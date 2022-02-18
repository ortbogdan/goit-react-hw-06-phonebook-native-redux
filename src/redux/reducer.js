import { actionsTypes } from "./types";
import {combineReducers} from "redux"
import { setItemToStorage } from "../services/localStorage";




const itemsReducer = (state=[], { type, payload }) => {
    switch (type) {
        case actionsTypes.ADD_CONTACT:
            const checkContact = state.find(
                (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
            );
            if (checkContact) {
                alert(`${payload.name} is already in contacts.`);
                return;
            }
            // window.localStorage.setItem(KEY, JSON.stringify([payload, ...state]));
            setItemToStorage(payload, state);
            return [payload, ...state];
        case actionsTypes.DELETE_CONTACT:
            return state.filter(contact => contact.id !== payload.id)

        default:
            return state;
    }
}

const filterReduser = (state='', { type, payload }) => {
    switch (type) {
        case actionsTypes.CHANGE_FILTER:
            return payload.query;
            
        default:
            return state;
    }
}

export default combineReducers({
        items: itemsReducer,
        filter: filterReduser
})