const {getuserController, adduserController, edituserController, deleteuserController } = require('../controllers/userController')
const express = require('express');
const router = express.Router();



router.get("/get-user", getuserController);
//METHOD - post
router.post("/add-user", adduserController);
//METHOD - put
router.put("/edit-user/:id", edituserController);

router.delete("/delete-user/:id", deleteuserController);


module.exports = router;