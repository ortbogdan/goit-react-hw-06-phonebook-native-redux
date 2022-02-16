import { actionsTypes } from "./types"

export const addContact = (name, number) => ({
    type: actionsTypes.ADD_CONTACT,
    payload: {
        name,
        number, 
        id: Date.now()
    }

})