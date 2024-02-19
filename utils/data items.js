const items = [
    {
      date: "02/03/2024",
      businessUnit: "RBNT",
      InventoryId: "20",
      itemName: "Cucumber Lemonade",
      purchaseAmt: 10000,
      quantity: 50,
    },
    {
      date: "02/03/2024",
      businessUnit: "MTRO",
      InventoryId: "20",
      itemName: "Pure Orange",
      purchaseAmt: 5000,
      quantity: 50,
    },
    {
      date: "02/03/2024",
      businessUnit: "RTRS",
      InventoryId: "15",
      itemName: "Classic Lemonade",
      purchaseAmt: 60,
      quantity: 50,
    },
  ];
  
  const purchase = [
    {
      purchaseOrderId: 1,
      inventoryId: "aa1",
      purchaseAmount: 12500,
      quantity: 200,
      processedBy: "Owner",
    },
    {
      purchaseOrderId: 2,
      inventoryId: "ab2",
      purchaseAmount: 12500,
      quantity: 200,
      processedBy: "Owner",
    },
    {
      purchaseOrderId: 3,
      inventoryId: "ac3",
      purchaseAmount: 12500,
      quantity: 200,
      processedBy: "Owner",
    },
    {
      purchaseOrderId: 4,
      inventoryId: "ad4",
      purchaseAmount: 12500,
      quantity: 200,
      processedBy: "Owner",
    },
    {
      purchaseOrderId: 5,
      inventoryId: "sx5",
      purchaseAmount: 12500,
      quantity: 200,
      processedBy: "Owner",
    },
  ];
  
  module.exports = { updateFields: [     'date',
                                        'purchaseOrderId',
                                        'inventoryId',
                                        'businessUnit',
                                        'purchaseAmount',
                                        'quantity',
                                        'processedBy',
                                      ], items, purchase };
  