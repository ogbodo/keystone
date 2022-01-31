import {IValuable} from '../screens/inventory/types';

export interface GlobalStateInterface {
  valuables: IValuable[];
  selected: IValuable | null;
  showAddModal: boolean;
}
