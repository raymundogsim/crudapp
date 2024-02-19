const { Mongoose } = require('mongoose');
const purchaseModel = require('../models/purchaseModel');
const updateFields = require('../utils/data');



const getPurchasesController = async (req,res) => {
    try{
    const purchases = await purchaseModel.find();
    res.status(200).json(purchases); 
    } catch(error) {
    res.status(500).json({ error: 'Internal Server Error' });
    };
    }
//add items
const addPurchasesController = async (req, res) => {
    try {
        const purchase = new purchaseModel(req.body);
        const savedPurchase = await purchase.save();
        res.status(201).json(savedPurchase); 
    } catch (error) {
        res.status(464).send(error, "error");
        console.log(error)
    }
};

//update items

const editPurchasesController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatePurFields = req.body;
        const existingItem = await purchaseModel.findByIdAndUpdate(
            { _id: id },
            { ...updateFields },
            { new: true }
        );

        if (!existingItem) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json({ message: 'Item updated successfully', data: existingItem });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


    

//delete items
const deletePurchasesController = async (req, res) => {
    try {
        const {id} = req.params
        console.log(req.params.id, "conttt")
        console.log(id, "an eya ID")
        if (!id) {
            return res.status(400).send("Invalid Item ID");
        }
        const deletedItem = await purchaseModel.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).send("Item not found");
        }
        res.status(200).send("Item Deleted!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const getPurchasesByIdController = async (req, res) => {
    try {
        const { itemId } = req.params;
        const item = await purchaseModel.findById(itemId);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const extractPurchaseItemController = (req, res) => {
    try {
      const { purchaseId } = req.params;
      const purchase = purchaseData.find((item) => item.purchaseOrderId === parseInt(purchaseId));
  
      if (!purchase) {
        return res.status(404).json({ error: 'Purchase not found' });
      }
  
      const extractedProperties = purchase.purchaseItems.map((item) => {
        const { serial, itemName, itemDesc, purchaseAmt, qtyUom, quantity, supplierDetails, receiverDetails } = item;
        return {
          serial,
          itemName,
          itemDesc,
          purchaseAmt,
          qtyUom,
          quantity,
          supplierDetails,
          receiverDetails,
        };
      });
  
      res.status(200).json({ message: 'Properties extracted successfully', data: extractedProperties });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Example usage in Express route
  // app.get('/api/purchases/:purchaseId/extract-properties', extractPurchaseItemsProperties);
  


module.exports =  {getPurchasesController, addPurchasesController, editPurchasesController, deletePurchasesController, getPurchasesByIdController, extractPurchaseItemController };