const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
require('colors')
const connectDb = require('./config/config');

//dotenv config
dotenv.config()

//db config
connectDb();

//rest obj
const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("dev"));


//routes
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/purchases', require('./routes/purchaseRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));



//port
const PORT = process.env.PORT || 5050;


//listen
app.listen(PORT, () =>{
    console.log(`Server Running on Port ${PORT}`.bgCyan.white);
})