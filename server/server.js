const express = require('express');
const app = express()
const PORT = 5000;
const mongoose = require('mongoose')
const colors = require('colors');
const contactRoute = require('./routes/contactRoutes');
const bodyParser = require('body-parser');
const URL = 'mongodb://localhost/redux';
const cors = require('cors')

// DB Connection 

mongoose.connect(URL, {
   useNewUrlParser: true,
   useFindAndModify: false,
   useUnifiedTopology: true
}).then(() => {
   console.log("DB connected".bgMagenta)
}).catch(e => console.log(e.red))


// MiddleWare 
app
   .use(bodyParser.urlencoded({ extended: false }))
   .use(bodyParser.json())
   .use(cors())

// Route and Requests 

app.use('/api/contact', contactRoute)
app.get('/', (req, res) => {
   res.send('server running')
})

// Listen server 
app.listen(PORT, console.log('server running on port ' + PORT))