const express = require('express');
const router = express.Router();
const products = require('../data/products');

router.get('/', (req, res) => {
  let filteredProducts = [...products];

  if (req.query.category) {
    filteredProducts = filteredProducts.filter(
      p => p.details.category.toLowerCase() === req.query.category.toLowerCase()
    );
  }

  res.json(filteredProducts);
});

router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Vendor C API'
  });
});

module.exports = router;