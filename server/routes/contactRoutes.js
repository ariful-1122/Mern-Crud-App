const router = require('express').Router();
const { getContact, addContact, editContact, delContact, getContactById } = require('../controller/contactController')

router.get('/get-contact', getContact)
router.get('/get-contact/:id', getContactById)
router.post('/add-contact', addContact)
router.put('/edit-contact/:id', editContact)
router.delete('/del-contact/:id', delContact)

module.exports = router