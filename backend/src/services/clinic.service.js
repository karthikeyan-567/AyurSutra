import Clinic from '../models/clinic.model.js';

/**
 * Query for clinics
 * @param {Object} filter
 * @param {Object} options
 * @returns {Promise<Object>}
 */
const queryClinics = async (filter, options = {}) => {
  const { limit = 10, page = 1 } = options;
  const skip = (page - 1) * limit;

  // Handle geo filtering if coordinates are provided
  let queryFilter = { ...filter };
  if (filter.latitude && filter.longitude) {
    queryFilter.location = {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [parseFloat(filter.longitude), parseFloat(filter.latitude)],
        },
        $maxDistance: filter.maxDistance || 10000, // Default 10km
      },
    };
    delete queryFilter.latitude;
    delete queryFilter.longitude;
    delete queryFilter.maxDistance;
  }

  const count = await Clinic.countDocuments(queryFilter);
  const clinics = await Clinic.find(queryFilter)
    .populate('doctor', 'name email')
    .limit(limit)
    .skip(skip);

  return { clinics, totalPages: Math.ceil(count / limit), currentPage: page, totalResults: count };
};

export default {
  queryClinics,
};
