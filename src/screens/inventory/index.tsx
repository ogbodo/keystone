import React, {useCallback} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import Card from '../../components/card';
import {IValuable} from './types';
import styles from './style';
import {CARD_WIDTH} from '../../constants';
import {useRecoilState} from 'recoil';
import {globalDataState} from '../../global';

const InventoryScreen = (props: any) => {
  const [globalData, setGlobalData] = useRecoilState(globalDataState);
  const _renderItem = useCallback(
    ({item}: {item: IValuable}) => (
      <Card
        handleClick={() => {
          setGlobalData(prev => ({
            ...prev,
            selected: item,
            showAddModal: true,
          }));
        }}>
        <Image
          source={{uri: item.photo, height: WP(40)}}
          resizeMode="cover"
          height={WP(40)}
          width={WP(40)}
        />
        <View style={styles.nameAmountContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.purchase}>{`\u20AC${Number(
            item.purchasePrice,
          ).toLocaleString()}`}</Text>
        </View>
      </Card>
    ),
    [globalData.valuables.length],
  );

  return (
    <View>
      <FlatList
        numColumns={Math.ceil(WP(80) / CARD_WIDTH)}
        data={globalData.valuables}
        renderItem={_renderItem}
        keyExtractor={item => `${item.id}`}
        ListEmptyComponent={
          <View style={styles.emptyList}>
            <Text style={styles.emptyListText}>Empty List</Text>
          </View>
        }
      />
    </View>
  );
};

export default InventoryScreen;
