const express = require('express');
const router = express.Router();
const { readDb, writeDb } = require('../dbHandler');

// Get all schemes
router.get('/', (req, res) => {
  try {
    const { category } = req.query;
    const db = readDb();
    let schemes = db.schemes;

    if (category) {
      schemes = schemes.filter(s => s.category === category);
    }

    res.json(schemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get scheme by ID
router.get('/:id', (req, res) => {
  try {
    const db = readDb();
    const scheme = db.schemes.find(s => s._id === req.params.id);
    if (!scheme) return res.status(404).json({ message: 'Scheme not found' });
    res.json(scheme);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create scheme
router.post('/', (req, res) => {
  try {
    const db = readDb();
    const newScheme = { _id: Date.now().toString(), ...req.body };
    db.schemes.push(newScheme);
    writeDb(db);
    res.status(201).json(newScheme);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update scheme
router.put('/:id', (req, res) => {
  try {
    const db = readDb();
    const index = db.schemes.findIndex(s => s._id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Scheme not found' });
    
    db.schemes[index] = { ...db.schemes[index], ...req.body };
    writeDb(db);
    res.json(db.schemes[index]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete scheme
router.delete('/:id', (req, res) => {
  try {
    const db = readDb();
    const index = db.schemes.findIndex(s => s._id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Scheme not found' });
    
    db.schemes.splice(index, 1);
    writeDb(db);
    res.json({ message: 'Scheme deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
