import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {userReducer, cartReducer, directoryReducer} from '.';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const _rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export type RootState = ReturnType<typeof _rootReducer>;

export const rootReducer = persistReducer(persistConfig, _rootReducer);
