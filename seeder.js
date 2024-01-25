const mongoose = require("mongoose");
const dotanv = require('dotenv')
const connectDb = require('./config/config')
const itemModel = require('./models/itemModel')
const items = require('./utils/data')
require('colors')

dotanv.config()
connectDb()

const importData = async () => {
    try {
        await itemModel.deleteMany({});
        const itemData = await itemModel.insertMany(items);
        console.log("All Items Added".bgGreen);
        process.exit();      
    } catch (error) {
        console.log(`${error}`.bgRed.inverse);
        process.exit(1);   
    }
}

importData();