import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/color';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY,
    height: WP(185),
    borderTopLeftRadius: WP(4),
    borderTopRightRadius: WP(4),
  },
  Header: {
    marginTop: WP(5),
    marginHorizontal: WP(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancel: {
    color: Colors.SECONDARY,
    fontSize: WP(4),
  },
  add: {
    color: Colors.BLACK_COLOR,
    fontSize: WP(4),
    fontWeight: 'bold',
    opacity: 0.4,
  },
  euro: {
    color: Colors.BLACK_COLOR,
    fontSize: WP(4),
    fontWeight: 'bold',
    opacity: 0.4,
  },
  formCameraContainer: {
    flex: 1,
    marginTop: WP(10),
    alignItems: 'center',
  },
  cameraContainer: {
    alignItems: 'center',
  },
  cameraLabel: {
    marginTop: WP(3),
    fontWeight: 'bold',
    fontSize: WP(3.5),
    color: Colors.BLACK_COLOR,
  },
  label: {
    marginVertical: WP(2),
    fontWeight: 'bold',
    fontSize: WP(3),
    color: Colors.BLACK_COLOR,
  },
  form: {
    flex: 1,
    width: WP(90),
    marginHorizontal: WP(5),
  },
  photoPreview: {
    width: WP(35),
    height: WP(35),
    borderRadius: WP(35) / 2,
    overflow: 'hidden',
  },
  photoPreviewDeleteContainer: {},
  deleteIcon: {
    position: 'absolute',
    bottom: 0,
    right: WP(0),
    width: WP(10),
    height: WP(10),
    borderRadius: WP(10) / 2,
    backgroundColor: Colors.RED,
  },
});
export default styles;

export const dropDownStyle = {
  style: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: WP(1.3),
    marginBottom: WP(2.2),
    height: WP(15),
    paddingLeft: WP(2),
  },
  textStyle: {
    fontSize: WP(3.5),
    color: Colors.BLACK_COLOR,
  },
  dropdownTextStyle: {
    fontSize: WP(3.5),
    color: Colors.GRAY_LIGHT,
  },
  dropdownStyle: {
    width: '75%',
    marginTop: WP(3.7),
    paddingHorizontal: WP(3),
  },
};
