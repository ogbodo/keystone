import React, {useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {Colors} from '../../../../utils/color';
import useAttachePhoto from '../../../../hooks/index';
import CustomModal from '../../../../components/modal';
import {GALLERY, CAMERA} from '../../../../constants';
import styles from './style';

interface PropsType {
  handleBackPress(): void;
  handleMedia(photo: string): void;
  isVisible: boolean;
}

const RenderPickMediaModal = (props: PropsType) => {
  const {pickMedia} = useAttachePhoto(props.handleMedia);

  const _renderPickMediaOptions = useCallback(
    (option: {text: string; optionType: string}) => (
      <Pressable
        key={option.text}
        style={styles.pickMedia}
        onPress={() => {
          pickMedia(option.optionType);
        }}>
        <Text style={styles.text}>{option.text}</Text>
      </Pressable>
    ),
    [],
  );

  return (
    <CustomModal
      isVisible={props.isVisible}
      onBackdropPress={props.handleBackPress}
      modalProps={{
        backdropOpacity: 0.3,
      }}>
      <View style={styles.modalContainer}>
        <Text
          style={[
            styles.text,
            {
              fontSize: WP(4.5),
              color: Colors.SECONDARY,
              marginBottom: WP(10),
            },
          ]}>
          Choose Photo Options
        </Text>
        {[
          {text: 'Select from gallery', optionType: GALLERY},
          {text: 'Launch camera directly', optionType: CAMERA},
        ].map(_renderPickMediaOptions)}
      </View>
    </CustomModal>
  );
};

export default RenderPickMediaModal;
