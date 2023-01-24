import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { SLICE_MAIN_NAME, mainReducer } from "./mainStore";

const rootReducer = combineReducers({
  [SLICE_MAIN_NAME]: mainReducer,
});

const storeConfig = configureStore({
  reducer: rootReducer,
});

export default storeConfig;

export type RootState = ReturnType<typeof storeConfig.getState>;
export type AppDispatch = typeof storeConfig.dispatch;
