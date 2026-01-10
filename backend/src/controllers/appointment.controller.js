import catchAsync from '../utils/catchAsync.js';
import appointmentService from '../services/appointment.service.js';
import Ticket from '../models/ticket.model.js';

const book = catchAsync(async (req, res) => {
  const result = await appointmentService.bookAppointment({
    ...req.body,
    patient: req.user._id,
  });
  res.status(201).send(result);
});

const getMyAppointments = catchAsync(async (req, res) => {
  const filter = req.query.role === 'doctor' ? { doctor: req.user._id } : { patient: req.user._id };
  const options = {
    limit: parseInt(req.query.limit, 10) || 10,
    page: parseInt(req.query.page, 10) || 1,
  };
  const result = await appointmentService.queryAppointments(filter, options);
  res.send(result);
});

const getTicket = catchAsync(async (req, res) => {
  const ticket = await Ticket.findOne({ ticketId: req.params.ticketId }).populate({
    path: 'appointment',
    populate: [ { path: 'patient', select: 'name email' }, { path: 'clinic', select: 'clinicName address' } ]
  });
  if (!ticket) {
    return res.status(404).send({ message: 'Ticket not found' });
  }
  res.send(ticket);
});

export default {
  book,
  getMyAppointments,
  getTicket,
};
