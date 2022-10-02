import bankSlice, {BankState, bankAsync} from './bankSlice';
import {LISTBANKS} from '@mocks/bankMock';

describe('Bank reducer', () => {
  const initialState: BankState = {
    listBank: [],
    loadingList: false,
  };
  it('should handle initial state', () => {
    expect(bankSlice(undefined, {type: 'unknown'})).toEqual({
      listBank: [],
      loadingList: false,
    });
  });
  it('should set loadingList to true', async () => {
    const action = {type: bankAsync.pending.type};
    const state = bankSlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loadingList: true,
    });
  });
  it('should set loadingList to false', async () => {
    const action = {type: bankAsync.rejected.type};
    const state = bankSlice(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loadingList: false,
    });
  });
  it('should set listBank with equal mock', () => {
    const action = {type: bankAsync.fulfilled.type, payload: LISTBANKS};
    const state = bankSlice(initialState, action);
    expect(state).toEqual({
      listBank: LISTBANKS,
      loadingList: false,
    });
  });
});
