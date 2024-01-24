const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotanv = require('dotenv')
require('colors')
const connectDb = require('./config/config');


//dotenv config
dotanv.config()

//db config
connectDb();

//rest obj
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))


//routes
app.get("/", (req, res) => {
    res.send("<h1>THIS IS THE BACKEND</h1>");
});

//port
const PORT = process.env.PORT || 5050;


//listen
app.listen(PORT, () =>{
    console.log(`Server Running on Port ${PORT}`.bgCyan.white);
})