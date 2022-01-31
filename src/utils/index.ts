import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {Colors} from './color';

export function hexToRGB(hexColor: string, alpha?: number) {
  //@ts-ignore
  const [r, g, b] = hexColor.match(/\w\w/g).map(x => parseInt(x, 16));
  return alpha ? `rgba(${r},${g},${b},${alpha})` : `rgb(${r},${g},${b})`;
}

export const shadow = {
  shadowOffset: {width: -WP(5), height: -WP(1.3)},
  shadowColor: Colors.GRAY,
  shadowOpacity: WP(0.15),
  shadowRadius: WP(4),
};
