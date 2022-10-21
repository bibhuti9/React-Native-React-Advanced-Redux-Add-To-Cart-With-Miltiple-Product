import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR, COLOR_PLATE, commonStyle, SIZE} from '../../theme/colors';
import {useSelector} from 'react-redux';
import {selectTotalAmount} from '../../features/basketSlicer';

export default function PriceContainer({buttonText, onPress}) {
  const totalAmount = useSelector(state => selectTotalAmount(state));

  return (
    <View style={styles.priceContainer}>
      <Text style={commonStyle.baseTextw}>Total Price ₹{totalAmount}</Text>
      <TouchableOpacity
        onPress={onPress}
        disabled={totalAmount == 0}
        style={styles.addToCartButton}>
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  priceContainer: {
    backgroundColor: COLOR.primaryColor,
    borderRadius: SIZE.radius,
    padding: SIZE.padding1 + 5,
    flexDirection: 'row',
    margin: SIZE.margin1,
    height: 60,
    position: 'absolute',
    bottom: 0,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    backgroundColor: COLOR_PLATE.sky,
    padding: SIZE.padding1 - 4,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZE.radius - 10,
  },
});
