const { Mongoose } = require('mongoose');
const userModel = require('../models/userModel');
const updateFields = require('../utils/data');
const bcrypt = require('bcrypt')


const getuserController = async (req, res) => {
    try{
    const usercont = await userModel.find();
    res.status(200).json(usercont); 
    } catch(error) {
    res.status(500).json({ error: 'Internal Server Error' });
    };
    }

//add items

const adduserController = async (req, res) => {
    try {
        const { isAdmin, password, email, username } = req.body;

        if (!isAdmin || !password || !email || !username) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

      
        const hash = await bcrypt.hash(password, 10);

        const user = new userModel({
            isAdmin,
            password: hash, 
            email,
            username,
        });

        const savedUser = await user.save();

        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//update items

const edituserController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatePurFields = req.body;
        const existingItem = await userModel.findByIdAndUpdate(
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
const deleteuserController = async (req, res) => {
    try {
        const {id} = req.params
        console.log(id, "ID of deleted item")
        if (!id) {
            return res.status(400).send("Invalid Item ID");
        }
        const deletedItem = await userModel.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).send("Item not found");
        }
        res.status(200).send("Item Deleted!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

const getuserByIdController = async (req, res) => {
    try {
        const { itemId } = req.params;
        const item = await userModel.findById(itemId);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


  
  // Example usage in Express route
  // app.get('/api/user/:userd/extract-properties', extractusertemsProperties);
  


module.exports =  {getuserController, adduserController, edituserController, deleteuserController };