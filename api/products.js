// api/products.js
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  try {
    const dataPath = path.join(process.cwd(), 'data.json');
    const data = fs.readFileSync(dataPath, 'utf8');
    res.status(200).send(data);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};