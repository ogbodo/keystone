import React, {useCallback} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {Colors} from '../../utils/color';
import {Valuables} from '../../data/dummy_data.json';
import Card from '../../components/card';
import {IValuable} from './types';
import styles from './style';
import {CARD_WIDTH} from '../../constants';

const InventoryScreen = () => {
  const _renderItem = useCallback(
    ({item}: {item: IValuable}) => (
      <Card>
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
    [],
  );

  return (
    <View>
      <FlatList
        numColumns={Math.ceil(WP(80) / CARD_WIDTH)}
        data={Valuables}
        renderItem={_renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default InventoryScreen;
