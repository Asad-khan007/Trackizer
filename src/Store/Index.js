import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';

const intialState = {};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middelware = [thunk];

// export const Store = createStore(
//
// );

export default () => {
  let store = createStore(
    persistedReducer,
    intialState,
    applyMiddleware(createLogger(), ...middelware),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
