const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const AppError = require('./services/errorHandlers/appError');
const globalErrorHandler = require('./services/errorHandlers/globalErrorHandler');
const routes = require('./routes');
// const connectDB = require('./config/databaseConnection')

//dotenv
dotenv.config()

//rest object
const app = express();

//cors 
app.use(cors())

//middle wear
app.use(express.json())


// Routes
app.use("/api", routes);


const Server_PORT =process.env.SERVER_PORT || 3000
app.listen(Server_PORT, () => {
    console.log(`server is runnig on port http://192.168.187.223: ${Server_PORT}`)
})
app.get('/', (req, res) => {
    res.status(200).send('Hello! The server is running successfully.');
});
console.log(process.env.SERVER_PORT)


app.use('*', (req, res, next) => {
    // console.log(`cont't find ${req.originalUrl} on this server`, 404)
    throw new AppError(`cont't find http://192.168.187.223:${Server_PORT}${req.originalUrl} this route`, 404)
})
app.use(globalErrorHandler)