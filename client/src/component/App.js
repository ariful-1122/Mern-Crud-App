import React from 'react'
import AddContact from './AddContact'
import EditContact from './EditContact'
import ContactList from './ContactList';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contact from './Contact';


const App = () => {
   return (
      <div>
         <Router>
            <Navbar />
            <Switch>
               <Route exact path='/' component={ContactList} />
               <Route path='/add-contact' component={AddContact} />
               <Route path='/edit-contact/:id' component={EditContact} />
               <Route path='/contact' component={Contact} />
            </Switch>
         </Router>
      </div>
   )
}

export default App
