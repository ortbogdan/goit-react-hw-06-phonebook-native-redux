import { actionsTypes } from "./types";


export const itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
    case actionsTypes.ADD_CONTACT:
            const checkContact = state.find(
            (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
    );
    if (checkContact) {
      alert(`${payload.name} is already in contacts.`);
      return;
    }
            return [payload, ...state];
    case actionsTypes.DELETE_CONTACT:
            return state.filter(contact => contact.id !== payload)
    
        default:
            return state;
    }
}

export const filterReduser = (state = '', { type, payload }) => {
    switch (type) {
        case actionsTypes.CHANGE_FILTER:
            return payload;
            
    
        default:
            break;
    }
}

