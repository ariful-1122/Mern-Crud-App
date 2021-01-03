const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
   name: String,
   phone: String,
   email: String,
   prof: String
}, {
   timestamps: true
})

const Contact = mongoose.model("Contact", contactSchema)

module.exports = Contact