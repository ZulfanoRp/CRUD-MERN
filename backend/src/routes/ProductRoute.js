const express = require("express");
const ProductController = require("../controllers/ProductController.js");

const router = express.Router();

router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.post('/products', ProductController.saveProduct);
router.patch('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;