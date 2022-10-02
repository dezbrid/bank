import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@redux/store';
import {BankObject} from '@interfaces/bank';

export interface BankState {
  listBank: BankObject[];
  loadingList: boolean;
  banks: BankObject[];
}

const initialState: BankState = {
  listBank: [],
  loadingList: false,
  banks: [],
};
export const bankAsync = createAsyncThunk(
  'banks',
  async (): Promise<BankObject[]> => {
    const response = await fetch(
      'https://dev.obtenmas.com/catom/api/challenge/banks',
      {method: 'GET'},
    );
    const data = await response.json();
    return data;
  },
);
export const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    getOriginalList: state => {
      state.banks = state.listBank;
    },
    filterByName: (state, action: PayloadAction<string>) => {
      state.banks = state.listBank.filter(bank => {
        return bank.bankName.toLowerCase().includes(action.payload);
      });
      if (action.payload.trim().length === 0) {
        state.banks = state.listBank;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(bankAsync.pending, state => {
        state.loadingList = true;
      })
      .addCase(bankAsync.fulfilled, (state, action) => {
        state.loadingList = false;
        state.listBank = action.payload;
        state.banks = action.payload;
      })
      .addCase(bankAsync.rejected, state => {
        state.loadingList = false;
      });
  },
});
export const {getOriginalList, filterByName} = bankSlice.actions;
export const listBank = (state: RootState) => state.bank.banks;
export const orignialListBank = (state: RootState) => state.bank.listBank;

export default bankSlice.reducer;
