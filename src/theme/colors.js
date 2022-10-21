import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
console.log(width);
console.log(height);
export const COLOR = {
  primaryColor: '#2a2e33',
  secondaryColor: '#53575c',
  grey1: '#e7eaf0',
  grey2: '#9d9d9d',
  black: '#2a2e32',
  white: '#fefefe',
};

export const SIZE = {
  base: 10,
  fontSize: 20,
  radius: 30,

  padding1: 10,
  padding2: 15,

  margin1: 10,
  margin2: 15,

  width: width,
  height: height,
};

export const textSize = {
  h1: 30,
  h2: 28,
  h3: 25,
  base: 20,
  m: 18,
  s: 15,
};
export const commonStyle = {
  iconStyle: {
    height: 30,
    width: 30,
  },
  textStyle: {
    fontSize: SIZE.fontSize,
    color: COLOR.black,
  },
  baseTextw: {
    fontSize: textSize.m,
    color: COLOR.white,
  },
  baseTextbl: {
    fontSize: textSize.m,
    color: COLOR.black,
  },
};

export const COLOR_PLATE = {
  yellow: '#ffca18',
  red: '#ff6262',
  sky: '#62ffb0',
  blue: '#62aeff',
  purple: '#cd62ff',
  pink: '#ff62cb',
  orange: '#ffab62',
  green: '#0bb63c',
};
