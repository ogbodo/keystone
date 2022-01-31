import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {Colors} from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: WP(5),
    marginRight: WP(5),
  },
  title: {
    fontSize: WP(7),
    fontWeight: 'bold',
    color: Colors.BLACK_COLOR,
    opacity: 0.7,
  },
});
export default styles;
