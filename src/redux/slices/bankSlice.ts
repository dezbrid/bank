import {createSlice} from '@reduxjs/toolkit';
import {BankObject} from '../../interfaces/bank';

export interface bankState {
  listBank: BankObject[];
}

const initialState: bankState = {
  listBank: [],
};

export const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    getOriginalList: state => {
      state.listBank = state.listBank;
    },
  },
});
export const {getOriginalList} = bankSlice.actions;

export default bankSlice.reducer;
