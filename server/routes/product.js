const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.post('/product', productController.storeProduct);
router.get('/products', productController.getAllProducts);
router.get('/product/:productID', productController.getProduct);
router.put('/product/:productID', productController.updateProduct);
router.delete('/product/:productID', productController.deleteProduct);

module.exports = router;