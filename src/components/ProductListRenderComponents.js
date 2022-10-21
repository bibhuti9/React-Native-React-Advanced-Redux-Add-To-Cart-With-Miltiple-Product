import React, {useRef, useMemo, useState, useEffect} from 'react';

import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToItemBasket,
  removeFromItemBasket,
  selectBasketItemById,
  selectTotalAmount,
} from '../features/basketSlicer';

import {COLOR, COLOR_PLATE, commonStyle, SIZE} from '../theme/colors';
import GetChildern from './GetChildern';

export function ProductListRenderComponents({item}) {
  const dispatch = useDispatch();

  const selectItem = useSelector(state =>
    selectBasketItemById(state, item._id),
  );

  const minusOnPressHandle = itemId => {
    dispatch(removeFromItemBasket(itemId));
  };

  const plusOnPressHandle = itemId => {
    dispatch(addToItemBasket(itemId));
  };

  return (
    <View style={{margin: 10}}>
      <GetChildern style={styles.itemCard}>
        <GetChildern col={1}>
          <Image source={{uri: item.mimages[0]}} style={styles.imageStyle} />
        </GetChildern>
        <GetChildern
          col={3}
          style={{flexDirection: 'row', marginHorizontal: SIZE.margin1}}>
          <GetChildern col={3}>
            <Text style={commonStyle.baseTextbl}>{item.mname}</Text>
            <Text numberOfLines={1} style={{color: COLOR_PLATE.green}}>
              ₹{item.mprice}
            </Text>
            <Text>Rating {item.rating}</Text>
          </GetChildern>
          <GetChildern col={1} style={styles.addToCardCard}>
            <TouchableOpacity
              disabled={selectItem == undefined}
              style={styles.addToCartButton}
              onPress={() => minusOnPressHandle(item)}>
              <Text style={commonStyle.baseTextbl}>-</Text>
            </TouchableOpacity>
            <Text> {selectItem == undefined ? 0 : selectItem?.count} </Text>
            <TouchableOpacity
              disabled={selectItem?.count >= item.mqty}
              onPress={() => plusOnPressHandle(item)}
              style={styles.addToCartButton}>
              <Text>+</Text>
            </TouchableOpacity>
          </GetChildern>
        </GetChildern>
      </GetChildern>
    </View>
  );
}

export const MemoProductListRender = React.memo(ProductListRenderComponents);

const styles = StyleSheet.create({
  itemCard: {
    borderRadius: SIZE.radius - 10,
    padding: SIZE.padding1,
    flexDirection: 'row',
    backgroundColor: COLOR.white,
    elevation: 5,
    height: SIZE.height / 8,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  addToCardCard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButton: {
    backgroundColor: COLOR.white,
    elevation: 5,
    width: 30,
    height: 30,
    borderRadius: SIZE.radius - 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
