const mongoose = require('mongoose');


const itemSchema = mongoose.Schema({
    serial: {
        type: Number,
        required: false
    },
    businessUnit: {
        type: String,
        required: false,
    },
    inventoryId: {
        type: String,
        required: null,
    },
    itemName: {
        type: String,
        required: true,
    },
     purchaseAmt: {
        type: Number,
        required: null,
    },
    quantity: {
        type: Number,
        required: false
    },
},   
     { timestamps: true }
);

const itemModel = mongoose.model('items', itemSchema);


module.exports = itemModel;

