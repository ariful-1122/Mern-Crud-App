import {
   ADD_CONTACT_SUCCESS,
   ADD_CONTACT_REQUEST,
   ADD_CONTACT_FAIL,

   GET_CONTACT_REQUEST,
   GET_CONTACT_SUCCESS,
   GET_CONTACT_FAIL,

   GET_CONTACT_BYID_REQUEST,
   GET_CONTACT_BYID_SUCCESS,
   GET_CONTACT_BYID_FAIL,

   EDIT_CONTACT_REQUEST,
   EDIT_CONTACT_FAIL,
   EDIT_CONTACT_SUCCESS,
   DELETE_CONTACT_REQUEST,
   DELETE_CONTACT_SUCCESS,
   DELETE_CONTACT_FAIL
} from '../constants/constants';
import axios from 'axios';
// const URL = "http://localhost:5000";

export const addContact = (contact) => async (dispatch) => {
   try {
      dispatch({
         type: ADD_CONTACT_REQUEST
      })
      await axios.post("/api/contact/add-contact", contact)
      dispatch({
         type: ADD_CONTACT_SUCCESS,
      })

   } catch (error) {
      dispatch({
         type: ADD_CONTACT_FAIL,
         payload: error.message
      })
   }
}

export const getContact = () => async (dispatch) => {
   try {
      dispatch({
         type: GET_CONTACT_REQUEST
      })
      let res = await axios.get('/api/contact/get-contact')
      dispatch({
         type: GET_CONTACT_SUCCESS,
         payload: res.data
      })
   } catch (error) {
      dispatch({
         type: GET_CONTACT_FAIL,
         payload: error.message
      })
   }
}

export const getContactById = (id) => async dispatch => {
   try {
      dispatch({
         type: GET_CONTACT_BYID_REQUEST
      })
      let res = await axios.get(`/api/contact/get-contact/${id}`)
      dispatch({
         type: GET_CONTACT_BYID_SUCCESS,
         payload: res.data
      })
   } catch (error) {
      dispatch({
         type: GET_CONTACT_BYID_FAIL,
         payload: error
      })
   }
}

export const editContactReducer = (id, contact) => async dispatch => {
   try {
      dispatch({
         type: EDIT_CONTACT_REQUEST
      })
      let res = await axios.put(`/api/contact/edit-contact/${id}`, contact)
      dispatch({
         type: EDIT_CONTACT_SUCCESS,
         payload: res.data
      })
   } catch (error) {
      dispatch({
         type: EDIT_CONTACT_FAIL,
         payload: error
      })
   }
}

export const delContactReducer = (id) => async dispatch => {
   try {
      dispatch({
         type: DELETE_CONTACT_REQUEST
      })
      let res = await axios.delete(`/api/contact/del-contact/${id}`)
      dispatch({
         type: DELETE_CONTACT_SUCCESS,
         payload: res.data
      })
   } catch (error) {
      dispatch({
         type: DELETE_CONTACT_FAIL
      })
   }
}


