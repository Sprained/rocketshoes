import { createStore } from 'redux';

import reootReducer from './modules/rootReducer'

const enhancer = process.env.NODE_ENV === 'development'
    ? console.tron.createEnhancer()
    : null;

const store = createStore(reootReducer, enhancer);

export default store;