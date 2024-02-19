const { Mongoose } = require('mongoose');
const itemModel = require('../models/itemModel')


const getItemController = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.status(200).json(items);
    } catch (error) {
        console.log(error);
    }
};


//add items
const addItemController = async (req, res) => {
    try {
        const newItem = new itemModel(req.body);
        await newItem.save();
        res.status(202).json("Item Created Successfully!");
    } catch (error) {
        console.log(error);
        res.status(464).json({ error: "Error creating item" });
    }
};


//update items
const editItemController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id, "id bak")
        const { serial, businessUnit, itemName, purchaseAmt, inventoryId, quantity  } = req.body;
        const existingItem = await itemModel.findByIdAndUpdate({_id:id},{ serial, businessUnit, itemName, purchaseAmt, inventoryId, quantity  },{ new: true });
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
const deleteItemController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.params.id, "conttt");
        console.log(id, "an eya ID");
        
        if (!id) {
            return res.status(400).json({ error: "Invalid Item ID" });
        }

        const deletedItem = await itemModel.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ error: "Item not found" });
        }

        res.status(200).json("Item Deleted!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const getItemsByIdController = async (req, res) => {
    try {
        const invId = req.query
        const item = await itemModel.findOne(invId);
        console.log(item, "baton item")
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(206).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports =  {getItemController, addItemController, editItemController, deleteItemController, getItemsByIdController };