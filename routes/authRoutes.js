const {loginController} = require('../controllers/authController')
const express = require('express');
const router = express.Router();

//routes
//METHOD - get 
router.post("/login", loginController);

module.exports = router;