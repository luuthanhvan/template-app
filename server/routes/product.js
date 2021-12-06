const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const upload = require('../configs/upload');

router.post('/product', upload.single("image"), productController.storeProduct);
router.get('/products', productController.getAllProducts);
router.get('/product/:productID', productController.getProduct);
router.put('/product/:productID', productController.updateProduct);
router.delete('/product/:productID', productController.deleteProduct);

module.exports = router;