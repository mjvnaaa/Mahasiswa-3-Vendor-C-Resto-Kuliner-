const express = require('express');
const cors = require('cors');
const products = require('./data/products');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    api_name: "Vendor C API",
    version: "1.0.0",
    description: "Resto & Kuliner - Nested Object Structure",
    total_products: products.length,
    endpoints: {
      get_all: "GET /api/products",
      get_by_id: "GET /api/products/:id",
      filter: "GET /api/products?category=food",
      health: "GET /health"
    }
  });
});

app.get('/api/products', (req, res) => {
  let filteredProducts = [...products];

  if (req.query.category) {
    filteredProducts = filteredProducts.filter(
      p => p.details.category.toLowerCase() === req.query.category.toLowerCase()
    );
  }

  if (req.query.in_stock === 'true') {
    filteredProducts = filteredProducts.filter(p => p.stock > 0);
  }

  res.json(filteredProducts);
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      error: "Product not found"
    });
  }

  res.json(product);
});

app.get('/health', (req, res) => {
  res.json({
    status: "OK",
    service: "Vendor C API",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('VENDOR C API DENGAN DATA LENGKAP');
  console.log('='.repeat(50));
  console.log(`Total produk: ${products.length}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Endpoint: http://localhost:${PORT}/api/products`);
  console.log('='.repeat(50));
});