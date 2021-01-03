import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-pink">
            <Link className="navbar-brand text-white" to='/'>Conatct software</Link>
            <button className="navbar-toggler" type="button" datatoggle="collapse" datatarget="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <NavLink className="nav-link text-white" to='/'>Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink activeStyle={{ textDecoration: 'underline' }} className="nav-link text-white" to='/add-contact'>Add Contact</NavLink>
                  </li>

               </ul>
            </div>
         </nav>


      </div>
   )
}

export default Navbar
