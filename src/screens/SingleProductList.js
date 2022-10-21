import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {COLOR, COLOR_PLATE, commonStyle, SIZE, textSize} from '../theme/colors';
import GetChildern from '../components/GetChildern';
import {ScrollView} from 'react-native-gesture-handler';
import {backGroundImage, giftBox} from '../theme/icon';
import {menu} from '../data/dummy_data';
export default function SingleProductList() {
  const data = menu[0];
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [addToCart, setAddToCart] = useState(0);
  const minusPressHandle = () => {
    if (addToCart == 0) return;
    setAddToCart(addToCart - 1);
  };
  const plusPressHandle = () => {
    setAddToCart(addToCart + 1);
  };
  useEffect(() => {
    if (addToCart > 0) {
      Animated.spring(animatedValue, {
        toValue: -65,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -10,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [addToCart]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={backGroundImage} style={styles.imageContainer} />
          <View style={styles.productInfoCard}>
            <View style={styles.namePriceCard}>
              <Text style={commonStyle.baseTextbl}>{data.mname}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{alignSelf: 'flex-end'}}>Price </Text>
                <Text style={commonStyle.baseTextbl}>{data.mprice}</Text>
              </View>
            </View>
            <View style={{marginVertical: SIZE.margin1}}>
              <Text style={commonStyle.baseTextbl}>About</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <GetChildern col={4} style={styles.footerCard}>
          <GetChildern col={1} style={styles.ButtonCard}>
            <TouchableOpacity onPress={minusPressHandle} style={styles.button}>
              <Text style={{color: COLOR.black}}>Minus</Text>
            </TouchableOpacity>
          </GetChildern>
          <GetChildern col={2} style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.addToCardButton}>
              <Text style={(commonStyle.baseTextbl, {fontSize: textSize.s})}>
                Add To Cart
              </Text>
              <Image source={giftBox} style={{height: 20, width: 20}} />
            </TouchableOpacity>
            <Animated.View
              style={[
                styles.addToCartButtonCard,
                {
                  transform: [
                    {
                      translateY: animatedValue,
                    },
                  ],
                },
              ]}>
              <Text style={{color: COLOR.white}}>
                {addToCart == 0
                  ? `Add To Cart`
                  : `${addToCart} * ₹${data.mprice} = ₹${
                      addToCart * data.mprice
                    }`}
              </Text>
            </Animated.View>
          </GetChildern>
          <GetChildern col={1} style={styles.ButtonCard}>
            <TouchableOpacity onPress={plusPressHandle} style={styles.button}>
              <Text style={{color: COLOR.black}}>Plus</Text>
            </TouchableOpacity>
          </GetChildern>
        </GetChildern>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: SIZE.height / 2.5,
    borderBottomLeftRadius: SIZE.radius,
    borderBottomRightRadius: SIZE.radius,
  },
  productInfoCard: {
    flex: 1,
    padding: SIZE.margin1,
    backgroundColor: COLOR.white,
  },
  namePriceCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    height: 50,
    backgroundColor: COLOR.primaryColor,
    marginHorizontal: SIZE.margin1,
    borderRadius: SIZE.radius - 10,
    alignItems: 'center',
    padding: SIZE.padding1,
    justifyContent: 'center',
  },
  footerCard: {
    flexDirection: 'row',
  },
  ButtonCard: {
    backgroundColor: COLOR.white,
    borderRadius: SIZE.radius - 10,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: SIZE.radius - 10,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButtonCard: {
    backgroundColor: COLOR.primaryColor,
    width: '100%',
    height: 60,
    padding: SIZE.padding1,
    borderTopLeftRadius: SIZE.radius - 10,
    borderTopRightRadius: SIZE.radius - 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
  },
  addToCardButton: {
    width: '90%',
    backgroundColor: COLOR.white,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: SIZE.radius - 20,
    padding: 5,
    flexDirection: 'row',
  },
});
