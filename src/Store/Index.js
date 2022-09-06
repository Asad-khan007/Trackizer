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

export default () => {
  let store = createStore(
    persistedReducer,
    intialState,
    applyMiddleware(...middelware, createLogger()),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};

// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import RootReducer from './Reducers';
// import {persistStore, persistReducer} from 'redux-persist';
// import {createLogger} from 'redux-logger';

// const Store = createStore(
//   RootReducer,
//   {},
//   applyMiddleware(
//     createLogger(),
//   thunk
//   ),
// );

// let Persistor = persistStore(Store);

// export {Store, Persistor};
