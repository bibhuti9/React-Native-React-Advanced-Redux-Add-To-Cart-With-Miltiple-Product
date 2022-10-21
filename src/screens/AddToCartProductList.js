import {View, Text} from 'react-native';
import React from 'react';
import {menu} from '../data/dummy_data';
import {MemoProductListRender} from '../components/ProductListRenderComponents';
import PriceContainer from '../components/common/PriceContainer';
export default function AddToCartProductList({route}) {
  const arr = route.params.arr;
  const selectProduct = _id => {
    const item = menu.filter(value => {
      return value._id == _id;
    });
    return item[0];
  };
  const byu = () => {};
  return (
    <View style={{flex: 1}}>
      {arr.map((value, index) => {
        return (
          <MemoProductListRender
            key={String(index)}
            item={selectProduct(value._id)}
          />
        );
      })}
      <PriceContainer onPress={byu} buttonText={'byu'} />
    </View>
  );
}
