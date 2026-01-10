import mongoose from 'mongoose';
import Appointment from '../models/appointment.model.js';
import Clinic from '../models/clinic.model.js';
import Ticket from '../models/ticket.model.js';
import ApiError from '../utils/ApiError.js';
import QRCode from 'qrcode';

/**
 * Book an appointment
 * @param {Object} appointmentBody
 * @returns {Promise<Object>}
 */
const bookAppointment = async (appointmentBody) => {
  try {
    const { clinic: clinicId, appointmentDate, appointmentTime } = appointmentBody;

    const clinic = await Clinic.findById(clinicId);
    if (!clinic) {
      throw new ApiError(404, 'Clinic not found');
    }

    // Double-booking check
    const existing = await Appointment.findOne({
      doctor: clinic.doctor,
      appointmentDate,
      appointmentTime,
    });

    if (existing) {
      throw new ApiError(400, 'Doctor is already booked for this time');
    }

    const savedAppointment = await Appointment.create({ ...appointmentBody, doctor: clinic.doctor });

    // Generate Ticket
    const ticketId = `ATK${new Date().getFullYear()}${Math.floor(Math.random() * 90000) + 10000}`;
    const qrData = JSON.stringify({
      appointmentId: savedAppointment._id,
      ticketId,
      patientId: savedAppointment.patient,
    });
    const qrBase64 = await QRCode.toDataURL(qrData);

    const validTill = new Date(appointmentDate);
    validTill.setHours(validTill.getHours() + 24);

    const ticket = await Ticket.create({
      appointment: savedAppointment._id,
      ticketId,
      qrBase64,
      validTill,
    });

    return {
      appointment: savedAppointment,
      ticket
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Query for appointments
 * @param {Object} filter
 * @param {Object} options
 * @returns {Promise<QueryResult>}
 */
const queryAppointments = async (filter, options = {}) => {
  const { limit = 10, page = 1 } = options;
  const skip = (page - 1) * limit;
  const count = await Appointment.countDocuments(filter);
  const appointments = await Appointment.find(filter)
    .populate('patient', 'name email')
    .populate('doctor', 'name email')
    .populate('clinic', 'clinicName address')
    .limit(limit)
    .skip(skip);

  return { appointments, totalPages: Math.ceil(count / limit), currentPage: page, totalResults: count };
};

export default {
  bookAppointment,
  queryAppointments,
};
