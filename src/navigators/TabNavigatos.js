/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';

import {useDispatch} from 'react-redux';

import {setUserCurrentLocation} from '../features/basketSlicer';

import {createStackNavigator} from '@react-navigation/stack';
import AddToCartProductList from '../screens/AddToCartProductList';
import ProductList from '../screens/ProductList';

const Tab = createStackNavigator();
export default function TabNavigatos() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="ProductList" component={ProductList} />
      <Tab.Screen
        name="AddToCartProductList"
        component={AddToCartProductList}
      />
    </Tab.Navigator>
  );
}
