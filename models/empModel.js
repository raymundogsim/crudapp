const mongoose = require('mongoose')

const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
    },
    { timestamp: true}
);

const Employees = mongoose.model('Employees', empSchema)

module.exports = Employees;