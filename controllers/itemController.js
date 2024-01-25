const { Mongoose } = require('mongoose');
const itemModel = require('../models/itemModel')
//get items
const getItemController = async (req,res) => {
    try { 
        const items = await itemModel.find();
        res.status(200).send(items);
    } catch (error) {
        console.log(error);
    }
};

//add items
const addItemController = async (req, res) => {
    try {
        const newItem = new itemModel(req.body);
        await newItem.save();
        res.status(201).send("Item Created Successfully!");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error)
    }
};

//update items
const editItemController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, category } = req.body;

        console.log( id, "Item Id han gineedit")
        console.log( req.body, "req form")
        
        const existingItem= await itemModel.findByIdAndUpdate({_id:id},{ name, price, category },{ new: true });

        if (!existingItem) {
          return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item updated successfully', data: existingItem });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
    

//delete items
const deleteItemController = async (req, res) => {
    try {
        const {id} = req.params
        console.log(req.params.id, "conttt")
        console.log(id, "an eya ID")
        if (!id) {
            return res.status(400).send("Invalid Item ID");
        }
        const deletedItem = await itemModel.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).send("Item not found");
        }
        res.status(200).send("Item Deleted!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const getItemsByIdController = async (req, res) => {
    try {
        const { itemId } = req.params;
        const item = await itemModel.findById(itemId);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports =  {getItemController, addItemController, editItemController, deleteItemController, getItemsByIdController };