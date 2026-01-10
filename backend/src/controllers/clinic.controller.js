import catchAsync from '../utils/catchAsync.js';
import clinicService from '../services/clinic.service.js';
import Clinic from '../models/clinic.model.js';

const getClinics = catchAsync(async (req, res) => {
  const filter = {};
  if (req.query.doctor) filter.doctor = req.query.doctor;
  if (req.query.latitude && req.query.longitude) {
    filter.latitude = req.query.latitude;
    filter.longitude = req.query.longitude;
    filter.maxDistance = req.query.maxDistance;
  }
  
  const options = {
    limit: parseInt(req.query.limit, 10) || 10,
    page: parseInt(req.query.page, 10) || 1,
  };
  
  const result = await clinicService.queryClinics(filter, options);
  res.send(result);
});

const createClinic = catchAsync(async (req, res) => {
  const clinic = await Clinic.create(req.body);
  res.status(201).send(clinic);
});

export default {
  getClinics,
  createClinic,
};
