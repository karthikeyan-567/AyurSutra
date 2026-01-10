import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../src/models/user.model.js';
import Clinic from '../src/models/clinic.model.js';
import Appointment from '../src/models/appointment.model.js';

dotenv.config();

const fixData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // 1. Find "mukil"
    const mukil = await User.findOne({ email: 'test@gmail.com' });
    if (!mukil) {
      console.error('User mukil not found');
      process.exit(1);
    }

    // 2. Make mukil a DOCTOR
    mukil.role = 'DOCTOR';
    await mukil.save();
    console.log('mukil promoted to DOCTOR');

    // 3. Assign mukil to the clinic
    const clinic = await Clinic.findOne({ clinicName: 'AyurSutra Main Center' });
    if (clinic) {
      clinic.doctor = mukil._id;
      await clinic.save();
      console.log('AyurSutra Main Center assigned to mukil');
    }

    // 4. Update existing appointments to point to mukil (so they show up in his dashboard)
    const result = await Appointment.updateMany(
      { clinic: clinic._id },
      { doctor: mukil._id }
    );
    console.log(`Updated ${result.modifiedCount} appointments to point to mukil`);

    process.exit(0);
  } catch (error) {
    console.error('Fix failed:', error);
    process.exit(1);
  }
};

fixData();
