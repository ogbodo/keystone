import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {CAMERA, GALLERY} from '../constants';

export default function useAttachePhoto(cb: any) {
  const pickMedia = (option: string) => {
    if (!option) return;
    switch (option) {
      case CAMERA: {
        takePhoto();
        return;
      }
      case GALLERY: {
        selectGalleryImage();
        return;
      }
      default:
        return;
    }
  };

  const selectGalleryImage = async () => {
    try {
      launchImageLibrary({mediaType: 'photo'}, response => {
        if (!response.didCancel) {
          cb(response.uri);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const takePhoto = async () => {
    try {
      launchCamera({mediaType: 'photo'}, response => {
        if (!response.didCancel) {
          cb(response.uri);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {pickMedia};
}
