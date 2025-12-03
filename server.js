const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data.json');
    const data = fs.readFileSync(dataPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    console.error('Error reading data.json:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'Vendor C API is running',
    endpoints: {
      products: '/api/products'
    }
  });
});

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;