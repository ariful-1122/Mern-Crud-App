import React, { useEffect } from 'react';
import { getContact, delContactReducer } from '../redux/actions/contactAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


const Contact = ({ buttonHandle }) => {
   const dispatch = useDispatch()
   const history = useHistory()
   // const History = history
   const { loading, error, contact } = useSelector(state => state.getContact)
   const { loading: delLoading, error: delError, success: delSuccess } = useSelector(state => state.deleteContact)


   useEffect(() => {
      dispatch(getContact());
      if (delSuccess) {
         dispatch(getContact())
      };
   }, [dispatch, delSuccess])

   const deleteHandler = (id) => {
      dispatch(delContactReducer(id))
      buttonHandle()
   }

   return (
      <>
         {
            contact.length ?
               contact.map((item, index) => (
                  <tr key={index}>
                     <td> {item.name} </td>
                     <td> {item.email} </td>
                     <td> {item.phone} </td>
                     <td> {item.prof} </td>
                     <td>
                        <Link to={`/edit-contact/${item._id}`} className='btn btn-teal btn-sm mr-1'>edit</Link>
                        <button onClick={() => deleteHandler(item._id)} className='btn btn-pink btn-sm'> {delLoading ? "Proceccing" : "del"} </button>
                     </td>
                  </tr>
               )) :
               (
                  <tr className='text-center text-danger'>
                     <td colSpan='5'>No Contact Found!</td>
                  </tr>
               )
         }
      </>
   )
}

export default Contact
