import {atom} from 'recoil';
import {GLOBAL_STATE_KEY} from '../constants';
import {GlobalStateInterface} from './types';
import {Valuables} from '../data/dummy_data.json';

export const globalDataState = atom<GlobalStateInterface>({
  key: GLOBAL_STATE_KEY,
  default: {
    valuables: [...Valuables],
    showAddModal: false,
    selected: null,
  },
});
