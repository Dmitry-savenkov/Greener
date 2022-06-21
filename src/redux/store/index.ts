import { createStore } from 'redux';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => createStore(persistedReducer, {});

const configuredStore = configureStore();
const persist = persistStore(configuredStore);

export { persist };
export default configuredStore;
