const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    purchaseOrderId: {
        type: String,
        required: true,
    },
    inventoryId: {
        type: String,
        required: true,
    },
    purchaseAmount: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    processedBy: {
        type: String,
        required: true,
    },
},
    {   timestamps: true },   
);


const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = purchaseModel;
