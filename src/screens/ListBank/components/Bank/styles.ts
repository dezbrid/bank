import {StyleSheet} from 'react-native';
import {white, darkGray} from '@constants/colors';
import {GENERAL_BOX_SHADOW} from '@constants/commonStyles';
const HEIGHT_IMAGE = 90;
const WIDTH_IMAGE = 55;
const SIZES = {
  REGULAR: 15,
  TITLE: 17,
};

export default StyleSheet.create({
  container: {
    ...GENERAL_BOX_SHADOW,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: white,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  image: {
    height: HEIGHT_IMAGE,
    width: WIDTH_IMAGE,
  },
  containerText: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'space-between',
  },
  bankName: {
    fontSize: SIZES.TITLE,
    fontWeight: 'bold',
    color: darkGray,
  },
  description: {
    fontSize: SIZES.REGULAR,
    fontWeight: '500',
    color: darkGray,
  },
  ages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
