import {combineReducers, configureStore} from '@reduxjs/toolkit';
import auth from './slices/authSlice';

export const rootReducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export default rootReducer;
