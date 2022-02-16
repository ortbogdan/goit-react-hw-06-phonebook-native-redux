// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

import { createStore } from 'redux';
import { itemsReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(itemsReducer, composeWithDevTools())