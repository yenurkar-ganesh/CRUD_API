
const express = require('express');
const app = express();
const dotenv = require('dotenv')
PORT = process.env.PORT || 4200;

const errorhandler = require('./middleware/errorhandler.js')
const connectDB = require('./config/DBconnection.js')

// middlewares 
app.use(express.json())
app.use(errorhandler)


// DATABASE CONNECTION 
connectDB()

// Routes 
app.use('/api/contacts', require('./routes/contact.route.js'));
app.use('/api/users', require('./routes/userRoute.route.js'));



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})