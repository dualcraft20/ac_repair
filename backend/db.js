import mongoose from 'mongoose';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FALLBACK_FILE_PATH = path.join(__dirname, 'data', 'db-fallback.json');

// Memory/JSON DB Fallback store
let isFallbackMode = false;

// Mock schemas/models for MongoDB
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  serviceNeeded: { type: String, required: true },
  preferredTime: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const ServiceSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
  description: { type: String, required: true },
  residential: { type: Boolean, default: true },
  commercial: { type: Boolean, default: true }
});

const TestimonialSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  source: { type: String, default: 'Google Review' },
  date: { type: String }
});

let ContactModel, ServiceModel, TestimonialModel;

// Default Seed Data
const defaultServices = [
  {
    id: 1,
    name: "Central AC Inspection & Diagnostics",
    icon: "Wind",
    description: "Comprehensive diagnostics of central cooling units, duct pressures, and electrical sensors to pinpoint performance issues before they worsen.",
    residential: true,
    commercial: true
  },
  {
    id: 2,
    name: "Filter Cleaning & Replacement",
    icon: "Snowflake",
    description: "Deep washing of filters or premium replacement to optimize cooling efficiency, eliminate dust, and enhance overall indoor air quality.",
    residential: true,
    commercial: true
  },
  {
    id: 3,
    name: "Coil & Duct Cleaning",
    icon: "ShieldCheck",
    description: "Deep chemical cleaning of condenser coils and duct sterilization to prevent bacterial/mold build-up in Dubai's humid seasons.",
    residential: true,
    commercial: true
  },
  {
    id: 4,
    name: "Thermostat & Electrical Check",
    icon: "Clock",
    description: "Recalibration of smart/digital thermostats and thorough inspection of relays, capacitors, and power lines to prevent electrical short-circuits.",
    residential: true,
    commercial: true
  },
  {
    id: 5,
    name: "Refrigerant Level Inspection & Refill",
    icon: "Wrench",
    description: "Pressure testing for gas leaks, pipe sealing, and environment-friendly R410A/R22 refrigerant top-ups to restore maximum cooling power.",
    residential: true,
    commercial: false
  },
  {
    id: 6,
    name: "Preventive Maintenance Contracts",
    icon: "ShieldCheck",
    description: "Customized annual maintenance packages for villas, apartments, and commercial facilities ensuring regular check-ups and zero call-out charges.",
    residential: true,
    commercial: true
  },
  {
    id: 7,
    name: "24/7 Emergency AC Repair",
    icon: "Clock",
    description: "Immediate response for sudden cooling breakdowns in peak summer heat. Rapid dispatch of certified HVAC technicians day or night.",
    residential: true,
    commercial: true
  },
  {
    id: 8,
    name: "AC Installation & Replacement",
    icon: "Wrench",
    description: "Hassle-free replacement of aged central AC units with high-efficiency, energy-saving models. Full installation warranty included.",
    residential: true,
    commercial: true
  },
  {
    id: 9,
    name: "Minor Electrical & Plumbing Support",
    icon: "Wrench",
    description: "Ancillary support for drain pipe blockages, overflow tray piping, and basic electrical breaker fixes integrated with your AC unit.",
    residential: false,
    commercial: true
  }
];

const defaultTestimonials = [
  {
    id: 1,
    name: "Fatima Al Mansoori",
    rating: 5,
    review: "Incredible speed! Our central AC stopped cooling at 11 PM during July. Technicians arrived within 25 minutes and fixed a blown capacitor immediately. Highly recommended in Dubai!",
    source: "Verified Customer, Dubai Marina",
    date: "July 2026"
  },
  {
    id: 2,
    name: "Michael Henderson",
    rating: 5,
    review: "Signing up for their Annual Maintenance Contract was the best decision. They do quarterly filter cleans and checkups, keeping our villa cool and electric bills down.",
    source: "Homeowner, JVC",
    date: "June 2026"
  },
  {
    id: 3,
    name: "Rajesh K.",
    rating: 5,
    review: "Very professional and neat. They cleaned all the AC ducts in our office, wore shoe covers, and left the place spotless. The air smells much cleaner now.",
    source: "Facilities Manager, Business Bay",
    date: "May 2026"
  },
  {
    id: 4,
    name: "Sarah & David",
    rating: 5,
    review: "No hidden charges, honest quotes, and certified technicians. They explained exactly what was wrong with our fan motor and fixed it on the same day.",
    source: "Homeowners, The Springs",
    date: "May 2026"
  },
  {
    id: 5,
    name: "Ahmed Ibrahim",
    rating: 5,
    review: "Best AC service company in town. Honest pricing and very quick to reply on WhatsApp. They resolved the water leak in my bedroom AC within an hour.",
    source: "Resident, Palm Jumeirah",
    date: "April 2026"
  }
];

// Helper to initialize fallback JSON file if it doesn't exist
async function initFallbackFile() {
  try {
    await fs.mkdir(path.dirname(FALLBACK_FILE_PATH), { recursive: true });
    try {
      await fs.access(FALLBACK_FILE_PATH);
    } catch {
      // Create with default values
      const initialData = {
        contacts: [],
        services: defaultServices,
        testimonials: defaultTestimonials
      };
      await fs.writeFile(FALLBACK_FILE_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
      console.log('Initialized local JSON database fallback at:', FALLBACK_FILE_PATH);
    }
  } catch (err) {
    console.error('Error initializing fallback JSON file:', err);
  }
}

// Database Connection function
export async function connectDB() {
  const mongoURI = process.env.MONGODB_URI;
  
  await initFallbackFile();

  if (!mongoURI) {
    console.log('No MONGODB_URI environment variable detected. Running in local JSON database fallback mode.');
    isFallbackMode = true;
    return;
  }

  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoURI);
    console.log('Successfully connected to MongoDB!');
    
    // Register schemas
    ContactModel = mongoose.model('Contact', ContactSchema);
    ServiceModel = mongoose.model('Service', ServiceSchema);
    TestimonialModel = mongoose.model('Testimonial', TestimonialSchema);

    // Run seeding
    await seedMongoDatabase();
  } catch (err) {
    console.error('Failed to connect to MongoDB. Error:', err.message);
    console.log('Switching to local JSON database fallback mode.');
    isFallbackMode = true;
  }
}

// Seed function for MongoDB Atlas
async function seedMongoDatabase() {
  try {
    const serviceCount = await ServiceModel.countDocuments();
    if (serviceCount === 0) {
      await ServiceModel.insertMany(defaultServices);
      console.log('Seeded services into MongoDB.');
    }

    const testimonialCount = await TestimonialModel.countDocuments();
    if (testimonialCount === 0) {
      await TestimonialModel.insertMany(defaultTestimonials);
      console.log('Seeded testimonials into MongoDB.');
    }
  } catch (err) {
    console.error('Error seeding MongoDB collections:', err);
  }
}

// Interface for services fetch
export async function getServices() {
  if (isFallbackMode) {
    const data = await fs.readFile(FALLBACK_FILE_PATH, 'utf-8');
    const json = JSON.parse(data);
    return json.services || defaultServices;
  } else {
    return await ServiceModel.find({});
  }
}

// Interface for testimonials fetch
export async function getTestimonials() {
  if (isFallbackMode) {
    const data = await fs.readFile(FALLBACK_FILE_PATH, 'utf-8');
    const json = JSON.parse(data);
    return json.testimonials || defaultTestimonials;
  } else {
    return await TestimonialModel.find({});
  }
}

// Interface for saving contact form submissions
export async function saveContact(contactData) {
  const { name, phone, serviceNeeded, preferredTime, message } = contactData;
  if (!name || !phone || !serviceNeeded || !preferredTime) {
    throw new Error('Required fields missing: name, phone, serviceNeeded, preferredTime');
  }

  const record = {
    name,
    phone,
    serviceNeeded,
    preferredTime,
    message: message || '',
    createdAt: new Date().toISOString()
  };

  if (isFallbackMode) {
    const data = await fs.readFile(FALLBACK_FILE_PATH, 'utf-8');
    const json = JSON.parse(data);
    
    if (!json.contacts) json.contacts = [];
    json.contacts.push(record);
    
    await fs.writeFile(FALLBACK_FILE_PATH, JSON.stringify(json, null, 2), 'utf-8');
    return record;
  } else {
    const contact = new ContactModel(record);
    await contact.save();
    return contact;
  }
}
