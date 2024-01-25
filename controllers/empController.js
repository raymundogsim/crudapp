const { Mongoose } = require('mongoose');
const empModel = require('../models/empModel')
//get items
const getEmpController = async (req,res) => {
    try { 
        const employees = await empModel.find();
        res.status(200).send(employees);
    } catch (error) {
        console.log(error);
    }
};

//add items
const addEmpController = async (req, res) => {
    try {
        const newEmp = new empModel(req.body);
        await newEmp.save();
        res.status(201).send("Item Created Successfully!");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error)
    }
};

//update items
const editEmpController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;

        console.log( id, "employee Id han gineedit")
        console.log( req.body, "req form")
        
        const existingEmployee = await empModel.findByIdAndUpdate({_id:id},{ name, age },{ new: true });

        if (!existingEmployee) {
          return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee updated successfully', data: existingEmployee });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
    

//delete items
const deleteEmpController = async (req, res) => {
    try {
        const {id} = req.params
        console.log(req.params.id, "conttt")
        console.log(id, "an eya ID")
        if (!id) {
            return res.status(400).send("Invalid Item ID");
        }
        const deletedItem = await empModel.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).send("Item not found");
        }
        res.status(200).send("Item Deleted!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


module.exports =  {getEmpController, addEmpController, editEmpController, deleteEmpController};