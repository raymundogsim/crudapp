const { getEmpController, addEmpController, editEmpController, deleteEmpController } = require('../controllers/empController')

const express = require('express');
const router = express.Router();

//routes
//METHOD - get 
router.get("/get-emp", getEmpController);
//METHOD - post
router.post("/add-emp", addEmpController);
//METHOD - put
router.put("/edit-emp/:id", editEmpController);

router.delete("/delete-emp/:id",  deleteEmpController);


module.exports = router;