const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const contactRouter = require('./routes/contact');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/contact', contactRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Elitedge API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Elitedge backend running on http://localhost:${PORT}`);
});
