import {
   GET_CONTACT_REQUEST,
   GET_CONTACT_SUCCESS,
   GET_CONTACT_FAIL,

   GET_CONTACT_BYID_SUCCESS,
   GET_CONTACT_BYID_REQUEST,
   GET_CONTACT_BYID_FAIL,

   ADD_CONTACT_REQUEST,
   ADD_CONTACT_SUCCESS,
   ADD_CONTACT_FAIL,

   EDIT_CONTACT_REQUEST,
   EDIT_CONTACT_FAIL,
   EDIT_CONTACT_SUCCESS,
   DELETE_CONTACT_REQUEST,
   DELETE_CONTACT_SUCCESS,
   DELETE_CONTACT_FAIL
} from '../constants/constants'

const initialState = {
   loading: false,
   error: null,
   contact: []
}

export const addContactReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_CONTACT_REQUEST:
         return {
            ...state,
            loading: true,
            error: null,
         }
      case ADD_CONTACT_SUCCESS:
         return {
            ...state,
            loading: false,
            error: null
         }
      case ADD_CONTACT_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload
         }

      default:
         return state
   }

}

export const getContactReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_CONTACT_REQUEST:
         return {
            ...state,
            loading: true,
            error: null,
         }
      case GET_CONTACT_SUCCESS:
         return {
            ...state,
            loading: false,
            error: null,
            contact: action.payload
         }
      case GET_CONTACT_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      default:
         return state
   }
}

const getContactByIdInitialState = {
   loading: false,
   error: null,
   data: ''
}

export const getContactByIdReducer = (state = getContactByIdInitialState, action) => {
   switch (action.type) {
      case GET_CONTACT_BYID_REQUEST:
         return {
            ...state,
            laoding: true,
            error: null
         }
      case GET_CONTACT_BYID_SUCCESS:
         return {
            ...state,
            laoding: false,
            data: action.payload
         }
      case GET_CONTACT_BYID_FAIL:
         return {
            ...state,
            laoding: false,
            error: action.payload
         }
      default:
         return state

   }
}

export const editReducer = (state = {}, action) => {
   switch (action.type) {
      case EDIT_CONTACT_REQUEST:
         return {
            loading: true,
            error: null,
         }
      case EDIT_CONTACT_SUCCESS:
         return {
            loading: false,
            error: null,
         }
      case EDIT_CONTACT_FAIL:
         return {
            loading: false,
            error: null,
            paylaod: action.payload
         }

      default:
         return state
   }
}

export const deleteReducer = (state = { loading: false, success: false, error: null }, action) => {
   switch (action.type) {
      case DELETE_CONTACT_REQUEST:
         return {
            loading: true,
            error: null
         }
      case DELETE_CONTACT_SUCCESS:
         return {
            loading: false,
            error: null,
            success: true
         }
      case DELETE_CONTACT_FAIL:
         return {
            loading: false,
            error: action.payload,
         }
      default:
         return state
   }
}

