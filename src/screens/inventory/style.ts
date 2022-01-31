import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {Colors} from '../../utils/color';

const styles = StyleSheet.create({
  nameAmountContainer: {
    height: WP(25),
    padding: WP(3),
    paddingBottom: WP(5),
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    opacity: 0.8,
    color: Colors.BLACK_COLOR,
  },
  purchase: {
    opacity: 0.8,
    color: Colors.BLACK_COLOR,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: WP(20),
  },
  emptyListText: {
    color: Colors.BLACK_COLOR,
    opacity: 0.6,
    fontSize: WP(4.5),
  },
});
export default styles;
