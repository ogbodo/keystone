import React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './style';

interface PropsType {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
}

const Card = (props: PropsType) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.children}
    </View>
  );
};

export default Card;
