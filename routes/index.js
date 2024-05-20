const express = require('express');

const router = express.Router();

const Product = require('../models/Product');

router.post('/addproducts', async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price
        });
        
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.get('/readAllProducts', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.put('/updateProduct/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.delete('/deleteProduct/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.json(deletedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})
module.exports = router;