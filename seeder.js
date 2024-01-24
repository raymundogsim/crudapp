const mongoose = require('mongoose')
const dotanv = require('dotenv')
const connectDb = require('./config/config')
const empModel = require('./models/empModel')
const empItems = require('./utils/data')
require('colors')

//config
dotanv.config();
connectDb();

//function seeder
const importData = async () => {
    try {
        await empModel.deleteMany()
        const empData = await empModel.insertMany(empItems);
        console.log("All Items Added".bgGreen);
        process.exit();      
    } catch (error) {
        console.log(`${error}`.bgRed.inverse)
        process.exit(1)   
    }
}

importData();