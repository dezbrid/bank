import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import bankSlice from '@slices/bankSlice';

export const store = configureStore({
  reducer: {
    bankSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
