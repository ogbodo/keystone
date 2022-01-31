import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import styles from './styles';
import {Colors} from '../../utils/color';

interface InputProps extends TextInputProps {
  textInputStyle?: {};
  containerStyle?: {};
  defaultValue: string;
  inputFieldIconRight?: React.ElementType;
}

export default function Input(props: InputProps) {
  return (
    <View style={[styles.topContainer, props.containerStyle]}>
      <View style={styles.container}>
        <TextInput
          {...props}
          placeholderTextColor={Colors.GRAY_LIGHT}
          style={[
            {
              fontSize: WP(3.5),
              color: Colors.BLACK_COLOR,
            },
            props.textInputStyle,
          ]}
        />
        {props.inputFieldIconRight && <props.inputFieldIconRight />}
      </View>
    </View>
  );
}
