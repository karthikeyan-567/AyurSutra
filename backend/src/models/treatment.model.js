import mongoose from 'mongoose';

const treatmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    durationMinutes: Number,
    benefits: [String],
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
      },
    ],
    images: [String],
  },
  {
    timestamps: true,
  }
);

const Treatment = mongoose.model('Treatment', treatmentSchema);

export default Treatment;
