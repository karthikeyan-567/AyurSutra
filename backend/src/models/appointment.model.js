import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    clinic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Clinic',
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    appointmentTime: {
      type: String, // format HH:MM
      required: true,
    },
    status: {
      type: String,
      enum: ['BOOKED', 'COMPLETED', 'CANCELLED'],
      default: 'BOOKED',
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Compound index to prevent double booking for a doctor at the same time and date
appointmentSchema.index({ doctor: 1, appointmentDate: 1, appointmentTime: 1 }, { unique: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
