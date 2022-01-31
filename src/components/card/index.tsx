import React from 'react';
import {ViewStyle, Pressable} from 'react-native';
import styles from './style';

interface PropsType {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  handleClick?(): void;
}

const Card = (props: PropsType) => {
  return (
    <Pressable
      onPress={props.handleClick}
      style={[styles.container, props.containerStyle]}>
      {props.children}
    </Pressable>
  );
};

export default Card;
