const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Government Schemes Awareness API');
});

// Import routes
const schemeRoutes = require('./routes/schemes');
const authRoutes = require('./routes/auth');
const eligibilityRoutes = require('./routes/eligibility');

app.use('/api/schemes', schemeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/eligibility', eligibilityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
