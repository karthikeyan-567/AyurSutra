import PatientProfile from '../models/patientProfile.model.js';

/**
 * Get profile by userId
 * @param {ObjectId} userId
 * @returns {Promise<PatientProfile>}
 */
const getProfileByUserId = async (userId) => {
  return PatientProfile.findOne({ user: userId });
};

/**
 * Update profile by userId
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<PatientProfile>}
 */
const updateProfile = async (userId, updateBody) => {
  let profile = await PatientProfile.findOne({ user: userId });
  if (!profile) {
    profile = new PatientProfile({ user: userId, ...updateBody });
  } else {
    Object.assign(profile, updateBody);
  }
  await profile.save();
  return profile;
};

export default {
  getProfileByUserId,
  updateProfile,
};
