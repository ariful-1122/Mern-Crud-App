import React from 'react';
import Contact from './Contact';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';


const ContactList = () => {

   const buttonHandle = () => {
      toast('Delete success!')
   }
   const { success } = useSelector(state => state.deleteContact)


   document.title = 'contact-list'

   return (
      <div className='container py-5'>
         {success ? <ToastContainer /> : <ToastContainer />}
         <div className="row">
            <div className="col-md-12 mx-auto">
               <table className='table shadow table-responsive-sm table'>
                  <thead className='bg-pink text-light shadow '>
                     <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Profession</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <Contact buttonHandle={buttonHandle} />
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

export default ContactList
