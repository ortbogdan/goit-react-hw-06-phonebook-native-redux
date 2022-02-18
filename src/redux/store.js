
import { createStore, combineReducers } from 'redux';
import contactsReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getItemsForStorage } from '../services/localStorage';


const savedContacts = getItemsForStorage();

const preloadedState = {
  contacts: {
    items: savedContacts,
    filter: ''
  }
}



const rootReducer = combineReducers({
        contacts: contactsReducer,
})

export const store = createStore(rootReducer, preloadedState, composeWithDevTools())