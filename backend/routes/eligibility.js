const express = require('express');
const router = express.Router();
const { readDb } = require('../dbHandler');

router.post('/check', (req, res) => {
  const { age, gender, income, occupation } = req.body;

  try {
    const db = readDb();
    const allSchemes = db.schemes;
    
    const matchedSchemes = allSchemes.filter(scheme => {
      const e = scheme.eligibility;
      if (!e) return true; // If no eligibility criteria, assume match
      
      // Age check
      if (e.ageMin && age < e.ageMin) return false;
      if (e.ageMax && age > e.ageMax) return false;
      
      // Gender check
      if (e.gender && e.gender !== 'All' && e.gender !== gender) return false;
      
      // Income check
      if (e.incomeLimit && income > e.incomeLimit) return false;
      
      // Occupation check
      if (e.occupation && e.occupation.length > 0 && !e.occupation.includes(occupation)) return false;
      
      return true;
    });

    res.json(matchedSchemes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
