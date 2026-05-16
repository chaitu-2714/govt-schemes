const express = require('express');
const router = express.Router();
const { readDb } = require('../dbHandler');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  try {
    const db = readDb();
    const user = db.users.find(u => u.username === username);
    
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Assuming plain text passwords in db.json for simplicity, or we could use bcrypt if they are hashed.
    // Let's assume plain text as per the seed data created earlier.
    if (user.password !== password) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.username, role: 'admin' }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user.username, username: user.username, role: 'admin' } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
