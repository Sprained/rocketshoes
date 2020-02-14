import { createStore } from 'redux';

import reootReducer from './modules/rootReducer'

const store = createStore(reootReducer);

export default store;