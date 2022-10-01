import {
  configureStore,
  ThunkAction,
  Action,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import ReactotronConfig from '@config/ReactotronConfig';
import bankSlice from '@redux/bankSlice';

const enhancers: StoreEnhancer[] = [];
if (ReactotronConfig.createEnhancer) {
  enhancers.push(ReactotronConfig.createEnhancer());
}
export const store = configureStore({
  reducer: {
    bank: bankSlice,
  },
  enhancers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
