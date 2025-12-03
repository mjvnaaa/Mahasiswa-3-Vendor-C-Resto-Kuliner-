const express = require('express');
const app = express();
// Gunakan port 3003 agar tidak bentrok
const port = 3000;

const products = [
    {
        id: 501,
        details: {
            name: "Nasi Tempong",
            category: 'Food'
        },
        pricing: {
            base_price: 20000,
            tax: 2000
        },
        stock: 50
    },
    {
        id: 502,
        details: {
            name: "Es Teh Manis",
            category: 'Drink'
        },
        pricing: {
            base_price: 5000,
            tax: 500
        },
        stock: 100
    },
    {
        id: 503,
        details: {
            name: "Sate Ayam",
            category: 'Food'
        },
        pricing: {
            base_price: 15000,
            tax: 1500
        },
        stock: 30
    },
    {
        id: 504,
        details: {
            name: "Jus Jambu",
            category: 'Drink'
        },
        pricing: {
            base_price: 12000,
            tax: 1200
        },
        stock: 20
    }
];

// Root endpoint untuk dokumentasi
app.get('/', (req, res) => {
    res.json({
        message: 'Vendor C API - Resto & Kuliner',
        status: 'Running',
        endpoints: {
            all_products: `GET http://localhost:${port}/api/products`,
            product_by_id: `GET http://localhost:${port}/api/products/:id`
        }
    });
});

// GET /api/products - semua produk
app.get('/api/products', (req, res) => {
    console.log(`[Vendor C] GET /api/products - ${new Date().toLocaleTimeString()}`);
    res.json(products);
});

// GET /api/products/:id - produk berdasarkan ID
app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = products.find(p => p.id === id);
    
    if (!item) {
        return res.status(404).json({
            success: false,
            message: `Produk dengan ID ${id} tidak ditemukan`
        });
    }
    
    res.json(item);
});

// Jalankan server
app.listen(port, () => {
    console.log(`🚀 Vendor C API berjalan di: http://localhost:${port}`);
    console.log(`📦 Total produk: ${products.length}`);
});

module.exports = app;