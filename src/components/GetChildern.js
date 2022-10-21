import {View, StyleSheet} from 'react-native';
import React from 'react';
export default function GetChildern({children, style, col = 4}) {
  const styles = StyleSheet.create({
    container: {
      width: `${25 * col}%`,
      ...style,
    },
  });
  return <View style={styles.container}>{children}</View>;
}
