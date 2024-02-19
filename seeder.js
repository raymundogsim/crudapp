const mongoose = require("mongoose");
const dotenv = require('dotenv');
const connectDb = require('./config/config');
const postModel = require('./models/postModel');
const { post } = require('./utils/data'); 
require('colors');

dotenv.config();
connectDb();

const importData = async () => {
    try {
        const postdel = await postModel.deleteMany({});
        const postData = await postModel.insertMany(post);
        console.log("All Items Added".bgGreen);
        process.exit();      
    } catch (error) {
        console.error(`${error}`.bgRed.inverse);
        process.exit(1);   
    }
}

importData();
