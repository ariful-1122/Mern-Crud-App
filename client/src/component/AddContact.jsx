import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/actions/contactAction';
import { Link } from 'react-router-dom'

const AddContact = ({ history }) => {
   document.title = 'add-contact'

   const dispatch = useDispatch()
   const [name, setName] = useState('')
   const [phone, setPhone] = useState('')
   const [email, setEmail] = useState('')
   const [prof, setProf] = useState('')

   const { loading, error, contact } = useSelector(state => state.addContactReducer)

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(addContact({
         name,
         phone,
         email,
         prof
      }))

      setName('')
      setPhone('')
      setEmail('')
      setProf('')
      history.push('/')
   }


   return (
      <div className='container'>
         <div className="col-md-8 col-lg-8 my-4 mx-auto">
            <div className="card shadow">
               <div className="card-header shadow bg-teal text-center">
                  <h3>ADD CONTACT</h3>
               </div>
               <div className="card-body">
                  <form onSubmit={submitHandler}>
                     <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input
                           value={name}
                           className='form-control'
                           type="text"
                           onChange={(e) => setName(e.target.value)}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                           value={phone}
                           className='form-control'
                           type="text"
                           onChange={(e) => setPhone(e.target.value)}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                           value={email}
                           className='form-control'
                           type="text"
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="profession">Profession</label>
                        <input
                           value={prof}
                           className='form-control'
                           type="text"
                           onChange={(e) => setProf(e.target.value)}
                        />
                     </div>
                     <button className='btn btn-indigo mr-3'> {loading ? "Processing" : "Submit"} </button>
                     <Link to='/' className='btn btn-pink'>
                        Back
                     </Link>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AddContact
