import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './style';

interface PropsType {
  title: string;
  icon?: React.ElementType;
}

const Header = (props: PropsType) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.icon && <props.icon />}
    </SafeAreaView>
  );
};

export default Header;
