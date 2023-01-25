import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const middlewares = applyMiddleware();

export const store = createStore(rootReducer, middlewares);
export const persistor = persistStore(store);
