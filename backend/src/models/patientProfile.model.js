import mongoose from 'mongoose';

const patientProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true,
    },
    age: Number,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    heightCm: Number,
    weightKg: Number,
    bloodGroup: String,
    hairDensity: String,
    hairType: String,
    acneLevel: String,
    medicalHistory: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    diet: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    gymRoutine: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const PatientProfile = mongoose.model('PatientProfile', patientProfileSchema);

export default PatientProfile;
