import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {hexToRGB} from '../../../../utils';
import {Colors} from '../../../../utils/color';

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: WP(3),
    borderTopRightRadius: WP(3),
    paddingHorizontal: WP(6),
    paddingVertical: WP(4),
    paddingBottom: WP(7),
    backgroundColor: Colors.PRIMARY,
  },
  text: {
    opacity: 0.8,
    fontSize: WP(4.2),
    color: Colors.BLACK_COLOR,
  },
  pickMedia: {
    borderWidth: WP(0.1),
    borderColor: hexToRGB(Colors.BLACK_COLOR, 0.2),
    paddingVertical: WP(4),
    paddingHorizontal: WP(2),
    marginVertical: WP(2),
    width: WP(90),
    borderRadius: WP(2),
    alignSelf: 'center',
  },
});
export default styles;
