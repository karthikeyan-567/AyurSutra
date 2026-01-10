import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../src/models/user.model.js';
import Clinic from '../src/models/clinic.model.js';
import Appointment from '../src/models/appointment.model.js';

dotenv.config();

const debug = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const users = await User.find({}, 'name email role');
    console.log('--- USERS ---');
    console.log(users);

    const clinics = await Clinic.find({}).populate('doctor', 'name email');
    console.log('--- CLINICS ---');
    clinics.forEach(c => {
      console.log(`Clinic: ${c.clinicName}, Doctor: ${c.doctor?.name} (${c.doctor?.email}) ID: ${c.doctor?._id}`);
    });

    const appointments = await Appointment.find({}).populate('patient', 'name').populate('doctor', 'name').populate('clinic', 'clinicName');
    console.log('--- APPOINTMENTS ---');
    appointments.forEach(a => {
      console.log(`Appt: ${a._id}, Patient: ${a.patient?.name}, Doctor: ${a.doctor?.name}, Clinic: ${a.clinic?.clinicName}, Status: ${a.status}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Debug failed:', error);
    process.exit(1);
  }
};

debug();
