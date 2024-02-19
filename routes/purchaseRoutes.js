const { getPurchasesController, addPurchasesController, editPurchasesController, deletePurchasesController, extractPurchaseItemController } = require('../controllers/purchaseController')
const express = require('express');
const router = express.Router();

//routes
//METHOD - get 
router.get("/get-purchases",  getPurchasesController);
//METHOD - post
router.post("/add-purchases", addPurchasesController);
//METHOD - put
router.put("/edit-purchases/:id", editPurchasesController);

router.delete("/delete-purchases/:id", deletePurchasesController);

//get by ID
// router.get("get-purchases/:id", getPurchasesByIdController);

// extract item props
// app.get('/api/purchases/:purchaseId/extract-properties', extractPurchaseItemsProperties);
router.get("/:purchaseId/extract-properties", extractPurchaseItemController);



module.exports = router;