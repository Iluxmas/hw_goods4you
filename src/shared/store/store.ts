import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

import { baseApi } from './api/baseApi';

const combinedReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export const makeStore = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});

const typeStore = () => makeStore;

export const store = makeStore;
export type AppStore = ReturnType<typeof typeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export interface HydrateAction {
  payload: RootState;
}
