import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {Colors} from '../../utils/color';

const styles = StyleSheet.create({
  topContainer: {
    borderRadius: WP(2),
    height: WP(15),
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  container: {
    borderTopLeftRadius: WP(4),
    borderTopRightRadius: WP(4),
    flexDirection: 'row',
    alignItems: 'center',
    height: WP(15),
    justifyContent: 'space-between',
    paddingRight: WP(3),
  },
});

export default styles;
