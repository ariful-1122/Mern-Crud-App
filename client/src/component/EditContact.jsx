import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getContactById, addContact, editContactReducer } from '../redux/actions/contactAction';


const EditContact = ({ match, history }) => {

   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")
   const [email, setEmail] = useState("")
   const [prof, setProf] = useState("")

   const id = match.params.id
   const dispatch = useDispatch()

   const { data } = useSelector(state => state.getContactById)


   useEffect(() => {
      if (data) {
         setName(data.name)
         setPhone(data.phone)
         setEmail(data.email)
         setProf(data.prof)
      }
      dispatch(getContactById(id))
   }, [id, dispatch, data.name])


   const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(editContactReducer(id, {
         name,
         phone,
         email,
         prof
      }))
      history.push('/')
   }

   return (
      <div className='container'>
         <div className="col-md-8 col-lg-8 my-4 mx-auto">
            <div className="card">
               <div className="card-header shadow bg-pink text-light text-center">
                  <h3>EDIT CONTACT</h3>
               </div>
               <div className="card-body">
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input
                           value={name}
                           className='form-control'
                           type="text"
                           onInput={(e) => setName(e.target.value)}

                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                           value={phone}
                           className='form-control'
                           type="text"
                           onInput={(e) => setPhone(e.target.value)}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                           value={email}
                           className='form-control'
                           type="text"
                           onInput={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="profession">Profession</label>
                        <input

                           className='form-control'
                           type="text"
                           onInput={(e) => setProf(e.target.value)}
                           value={prof}
                        />
                     </div>
                     <button className='btn btn-teal mr-3'>Submit</button>
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

export default EditContact
