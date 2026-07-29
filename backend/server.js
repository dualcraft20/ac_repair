import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB, getServices, getTestimonials, saveContact } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend development server
app.use(cors({
  origin: '*', // For demo purposes, allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Endpoint: Get all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await getServices();
    res.json(services);
  } catch (err) {
    console.error('Error fetching services:', err);
    res.status(500).json({ error: 'Failed to retrieve services' });
  }
});

// Endpoint: Get all testimonials
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await getTestimonials();
    res.json(testimonials);
  } catch (err) {
    console.error('Error fetching testimonials:', err);
    res.status(500).json({ error: 'Failed to retrieve testimonials' });
  }
});

// Endpoint: Save contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, serviceNeeded, preferredTime, message } = req.body;
    
    // Simple validation
    if (!name || !phone || !serviceNeeded || !preferredTime) {
      return res.status(400).json({ 
        error: 'Missing required fields. Please provide name, phone, serviceNeeded, and preferredTime.' 
      });
    }

    const savedRecord = await saveContact({ name, phone, serviceNeeded, preferredTime, message });
    
    // Simulate email/WhatsApp notification to business owner
    console.log('========================================================');
    console.log('🔔 NEW SERVICE INQUIRY RECIEVED (AC SERVICE DEMO)');
    console.log(`👤 Name: ${name}`);
    console.log(`📞 Phone: ${phone}`);
    console.log(`🔧 Service Needed: ${serviceNeeded}`);
    console.log(`⏰ Preferred Time: ${preferredTime}`);
    console.log(`💬 Message: ${message || 'No additional details'}`);
    console.log('🚀 Sending simulated WhatsApp alert to owner...');
    console.log('📬 Sending simulated email notification to booking@acservice.com...');
    console.log('========================================================');

    res.status(201).json({ 
      success: true, 
      message: 'Inquiry saved successfully! A technician will call you back shortly.',
      data: savedRecord
    });
  } catch (err) {
    console.error('Error saving contact request:', err);
    res.status(500).json({ error: 'Internal server error while saving inquiry' });
  }
});

// Basic check route
app.get('/', (req, res) => {
  res.send('AC Service API is running...');
});

// Boot server
async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Express server running on port http://localhost:${PORT}`);
  });
}

startServer();
