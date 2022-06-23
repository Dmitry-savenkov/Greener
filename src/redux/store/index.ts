import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import mainSaga from '../sagas';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

const configuredStore = configureStore();
const persist = persistStore(configuredStore);

sagaMiddleware.run(mainSaga);

export { persist };
export default configuredStore;
