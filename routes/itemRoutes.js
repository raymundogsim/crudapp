const { getItemController, addItemController, editItemController, deleteItemController, getItemsByIdController } = require('../controllers/itemController')

const express = require('express');
const router = express.Router();

//routes
//METHOD - get 
router.get("/get-item", getItemController);
//METHOD - post
router.post("/add-item", addItemController);
//METHOD - put
router.put("/edit-item/:id", editItemController);

router.delete("/delete-item/:id", deleteItemController);
//get by ID
router.get("/get-item-id/item", getItemsByIdController);


module.exports = router;