import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import PriceContainer from '../components/common/PriceContainer';

import {MemoProductListRender} from '../components/ProductListRenderComponents';

import {selectItemBasket} from '../features/basketSlicer';

import {menu} from '../data/dummy_data';

export default function ProductList() {
  const itemBasket = useSelector(state => selectItemBasket(state));
  const navigation = useNavigation();

  const addToCartButtonOnPress = () => {
    const arr = Array.from(itemBasket, ([name, value]) => value);
    navigation.navigate('AddToCartProductList', {arr});
  };

  const renderItem = ({item, index}) => {
    return <MemoProductListRender item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
      <PriceContainer
        onPress={addToCartButtonOnPress}
        buttonText={'Check Out'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
