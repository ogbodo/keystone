import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

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
  },
  purchase: {
    opacity: 0.8,
  },
});
export default styles;
