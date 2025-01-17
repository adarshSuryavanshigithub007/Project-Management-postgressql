const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
// const connectDB = require('./config/databaseConnection')

//dotenv
dotenv.config()

//rest object
const app = express();

// //Db connection
// connectDB()
//cors 
app.use(cors())

//middle wear
app.use(express.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is runnig on port ${process.env.SERVER_PORT}`)
})