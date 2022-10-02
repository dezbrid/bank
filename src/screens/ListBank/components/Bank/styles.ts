import {StyleSheet} from 'react-native';

const HEIGHT_IMAGE = 90;
const WIDTH_IMAGE = 55;
const SIZES = {
  REGULAR: 15,
  TITLE: 17,
};
const COLORS = {
  codGray: '#0D0D0D',
  white: '#FFFFFF',
  tundora: '#4A4A4A',
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: COLORS.codGray,
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
  },
  image: {
    height: HEIGHT_IMAGE,
    width: WIDTH_IMAGE,
  },
  containerText: {
    marginLeft: 15,
    flex: 1,
  },
  bankName: {
    fontSize: SIZES.TITLE,
    fontWeight: 'bold',
    color: COLORS.tundora,
  },
  description: {
    fontSize: SIZES.REGULAR,
    fontWeight: '500',
    color: COLORS.tundora,
  },
  ages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
