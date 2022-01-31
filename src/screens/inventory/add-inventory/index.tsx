import React, {useState} from 'react';
import {View, Text, Pressable, Image, Alert, SafeAreaView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, {dropDownStyle} from './style';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import {Colors} from '../../../utils/color';
import Input from '../../../components/input';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {globalDataState} from '../../../global/index';
import ModalDropdown from 'react-native-modal-dropdown';
import {CATEGORIES, VALUABLE_LIMIT} from '../../../constants';
import {inputValidator} from '../../../utils';
import RenderPickMediaModal from './pickmedia';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AddInventory = () => {
  const [canSelectMedia, setCanSelectMedia] = useState(false);
  const [globalData, setGlobalData] = useRecoilState(globalDataState);
  const [state, setState] = useState({
    id: globalData.selected?.id || 0,
    name: globalData.selected?.name || '',
    photo: globalData.selected?.photo || '',
    purchasePrice: globalData.selected?.purchasePrice || 0,
    type: globalData.selected?.type || '',
    description: globalData.selected?.description || '',
  });

  const Label = ({text}: {text: string}) => (
    <Text style={styles.label}>{text}</Text>
  );

  const handleMedia = async (photo: string) => {
    setCanSelectMedia(false);
    if (photo) {
      setState(prev => ({...prev, photo}));
    }
  };

  const canAddValuable = (currentVal: number) => {
    return (
      globalData.valuables.reduce((prev, cur) => {
        prev += cur.purchasePrice;
        return prev;
      }, currentVal) <= VALUABLE_LIMIT
    );
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
        <View style={styles.container}>
          <View style={styles.Header}>
            <Pressable
              onPress={() => {
                setGlobalData(prev => ({...prev, showAddModal: false}));
              }}>
              <Text style={styles.cancel}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                const {description, id, ...rest} = state;
                if (inputValidator(rest, true)) {
                  if (canAddValuable(rest.purchasePrice)) {
                    setGlobalData(prev => ({
                      ...prev,
                      valuables: [
                        ...prev.valuables,
                        {
                          ...state,
                          id: prev.valuables.length + 1,
                        },
                      ],
                      showAddModal: false,
                    }));
                  } else {
                    Alert.alert(
                      'Sorry, you can only add values up to 40,000 euros in total.',
                    );
                  }
                }
              }}>
              <Text style={styles.add}>Add</Text>
            </Pressable>
          </View>
          <View style={styles.formCameraContainer}>
            {state.photo ? (
              <View style={styles.photoPreviewDeleteContainer}>
                <View style={styles.photoPreview}>
                  <Image
                    source={{uri: state.photo, height: WP(40)}}
                    resizeMode="cover"
                    height={WP(40)}
                    width={WP(40)}
                  />
                </View>
                <MaterialCommunityIcons
                  name="delete"
                  size={WP(8)}
                  color={Colors.PRIMARY}
                  onPress={() => setState({...state, photo: ''})}
                  style={[
                    styles.deleteIcon,
                    {
                      paddingLeft: WP(1.2),
                      paddingTop: WP(0.5),
                      alignItems: 'center',
                    },
                  ]}
                />
              </View>
            ) : (
              <Pressable
                style={styles.cameraContainer}
                onPress={() => {
                  setCanSelectMedia(true);
                }}>
                <MaterialCommunityIcons
                  name="camera"
                  size={WP(10)}
                  color={Colors.SECONDARY}
                />
                <Text style={styles.cameraLabel}>Add Photo</Text>
              </Pressable>
            )}
            <View style={styles.form}>
              <View>
                <Label text="Name" />
                <Input
                  defaultValue={state.name}
                  placeholder="Bracelet"
                  onChangeText={name => setState({...state, name})}
                  containerStyle={{
                    marginBottom: WP(2.2),
                    paddingLeft: WP(2),
                  }}
                />
              </View>
              <View>
                <Label text="Category" />
                <ModalDropdown
                  {...dropDownStyle}
                  defaultValue={state.type || 'Select category...'}
                  options={CATEGORIES}
                  style={{...dropDownStyle.style, justifyContent: 'center'}}
                  onSelect={(_, category: string) => {
                    setState({...state, type: category});
                  }}
                />
              </View>
              <View>
                <Label text="Value" />
                <Input
                  defaultValue={`${state.purchasePrice}`}
                  placeholder="700"
                  keyboardType="numeric"
                  onChangeText={purchasePrice =>
                    setState({...state, purchasePrice: Number(purchasePrice)})
                  }
                  containerStyle={{
                    marginBottom: WP(2.2),
                    paddingLeft: WP(2),
                  }}
                  inputFieldIconRight={() => (
                    <Text style={styles.euro}>{`\u20AC`}</Text>
                  )}
                />
              </View>
              <View>
                <Label text="Description" />
                <Input
                  defaultValue={state.description}
                  multiline
                  textInputStyle={{
                    height: WP(30),
                    paddingTop: WP(3),
                    paddingLeft: WP(2),
                    color: Colors.BLACK_COLOR,
                  }}
                  placeholder="Optional"
                  textAlignVertical="top"
                  onChangeText={description =>
                    setState({...state, description})
                  }
                  containerStyle={{
                    marginBottom: WP(4),
                    height: WP(30),
                    paddingTop: WP(3),
                    paddingLeft: WP(2),
                  }}
                />
              </View>
            </View>
          </View>
          <RenderPickMediaModal
            isVisible={canSelectMedia}
            handleMedia={handleMedia}
            handleBackPress={() => setCanSelectMedia(false)}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddInventory;
