const Contact = require('../model/ContactModel')


const addContact = async (req, res) => {

   const { name, phone, email, prof } = req.body
   try {
      let contact = new Contact({
         name,
         phone,
         email,
         prof
      })
      let newContact = await contact.save()
      if (newContact) {
         res.json({
            msg: 'Contact Added Successfully!'
         })
      } else {
         res.json({
            msg: 'Something went wrong to add contact'
         })
      }
   } catch (error) {
      res.status(500).json(error)
   }
}


const getContact = async (req, res) => {
   try {
      let contact = await Contact.find()
      res.json(contact)
   } catch (error) {
      res.status(500).json(error)
   }
}

const getContactById = async (req, res) => {
   try {
      let contact = await Contact.findById(req.params.id)
      if (contact) {
         res.json(contact)
      } else {
         res.json({
            msg: 'No contact found in this id'
         })
      }
   } catch (error) {
      res.json(error)
   }
}

const editContact = async (req, res) => {
   const { name, phone, email, prof } = req.body
   try {
      let editContact = await Contact.findByIdAndUpdate({ _id: req.params.id }, {
         name,
         phone,
         email,
         prof
      })
      if (editContact) {
         res.json({
            msg: 'Contact edited succesfully'
         })
      } else {
         res.json({
            msg: "Something went wrong to edit contact"
         })
      }
   } catch (error) {
      res.json(error)
   }
}

const delContact = async (req, res) => {
   try {
      delContact = await Contact.findByIdAndDelete(req.params.id)
      if (delContact) {
         res.json({
            msg: 'Contact deleted successfully!'
         })
      } else {
         res.json({
            msg: 'Something went wrong to delete Contact'
         })
      }
   } catch (error) {
      res.json(error)
   }
}

module.exports = {
   addContact,
   getContact,
   getContactById,
   editContact,
   delContact
}