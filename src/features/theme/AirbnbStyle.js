import {StyleSheet} from 'react-native';
import {COLOR, SIZE} from './colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZE.margin1,
  },
  card: {
    height: SIZE.height / 6,
    backgroundColor: COLOR.white,
    elevation: 5,
    padding: SIZE.padding1,
    borderRadius: SIZE.radius - 15,
    alignItems: 'center',
  },
  header: {
    marginVertical: SIZE.margin1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
  },
  giftBox: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: COLOR.white,
    elevation: 3,
    marginRight: SIZE.margin1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 25,
    width: 25,
  },
  buttonStyle: {
    padding: SIZE.padding1,
    borderRadius: SIZE.radius - 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.primaryColor,
  },
  seperator: {
    width: '90%',
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: SIZE.margin1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
