import {
  configureStore,
  ThunkAction,
  Action,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import ReactotronConfig from '@config/ReactotronConfig';
import bankSlice from '@redux/bankSlice';
import thunk from 'redux-thunk';

const enhancers: StoreEnhancer[] = [];
if (ReactotronConfig.createEnhancer) {
  enhancers.push(ReactotronConfig.createEnhancer());
}

const reducers = combineReducers({
  bank: bankSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
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
