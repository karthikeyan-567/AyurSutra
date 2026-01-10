import mongoose from 'mongoose';

const clinicSchema = new mongoose.Schema(
  {
    clinicName: {
      type: String,
      required: true,
      trim: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    openingTime: String,
    closingTime: String,
    availableDays: {
      type: [String],
      enum: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      default: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
  },
  {
    timestamps: true,
  }
);

clinicSchema.index({ location: '2dsphere' });

const Clinic = mongoose.model('Clinic', clinicSchema);

export default Clinic;
