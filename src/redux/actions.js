import { actionsTypes } from "./types"
import { idGenerator } from "../services/idGenerator"

export const addContact = (name, number) => ({
    type: actionsTypes.ADD_CONTACT,
    payload: {
        name,
        number, 
        id: idGenerator()
    }

})

export const deleteContact = id => ({
    type: actionsTypes.DELETE_CONTACT,
    payload: { id }
})

export const changeFilter = filter => ({
    type: actionsTypes.CHANGE_FILTER,
    payload: {query: filter}
  });