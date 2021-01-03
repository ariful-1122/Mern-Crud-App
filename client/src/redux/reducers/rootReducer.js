import { combineReducers } from 'redux'
import { addContactReducer, getContactReducer, getContactByIdReducer, deleteReducer } from './contactReducer'

const rootReducer = combineReducers({
   getContact: getContactReducer,
   addContactReducer: addContactReducer,
   getContactById: getContactByIdReducer,
   deleteContact: deleteReducer
})

export default rootReducer