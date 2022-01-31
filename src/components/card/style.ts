import {StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {CARD_WIDTH} from '../../constants';
import {shadow} from '../../utils';
import {Colors} from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    margin: WP(5),
    overflow: 'hidden',
    borderRadius: WP(2.5),
    backgroundColor: Colors.PRIMARY,
    elevation: WP(1.3),
    shadowOffset: shadow.shadowOffset,
    shadowColor: shadow.shadowColor,
    shadowOpacity: shadow.shadowOpacity,
    shadowRadius: shadow.shadowRadius,
  },
});
export default styles;
