import { actionsTypes } from "./types";

export const itemsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionsTypes.ADD_CONTACT:
            return [payload, ...state];
        case actionsTypes.DELETE_CONTACT:
            return state.filter(contact => contact.id !== payload.id)
    
        default:
            return state;
    }
    
}