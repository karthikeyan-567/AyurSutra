import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../src/models/user.model.js';
import Clinic from '../src/models/clinic.model.js';

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Clinic.deleteMany({});

    // Create Admin
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@ayursutra.com',
      password: 'password123',
      role: 'ADMIN',
      isVerified: true
    });
    console.log('Admin created');

    // Create Doctor
    const doctor = await User.create({
      name: 'Dr. Karthikeyan',
      email: 'doctor@ayursutra.com',
      password: 'password123',
      role: 'DOCTOR',
      isVerified: true
    });
    console.log('Doctor created');

    // Create Patient
    const patient = await User.create({
      name: 'John Doe',
      email: 'patient@ayursutra.com',
      password: 'password123',
      role: 'PATIENT',
      isVerified: true
    });
    console.log('Patient created');

    // Create Clinic
    await Clinic.create({
      clinicName: 'AyurSutra Main Center',
      doctor: doctor._id,
      address: '123 Ayurveda St, Chennai',
      location: {
        type: 'Point',
        coordinates: [80.2707, 13.0827]
      },
      openingTime: '09:00',
      closingTime: '18:00',
      availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    });
    console.log('Clinic created');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seed();
