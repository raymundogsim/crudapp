const mongoose = require('mongoose')

const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
    },
    type:{
        type:String,
    },
    },
    { timestamp: true}
);

const Employees = mongoose.model('Employees', empSchema)

module.exports = Employees;