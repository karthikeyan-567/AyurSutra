import catchAsync from '../utils/catchAsync.js';
import profileService from '../services/profile.service.js';

const getMe = catchAsync(async (req, res) => {
  const profile = await profileService.getProfileByUserId(req.user._id);
  res.send({ user: req.user, profile });
});

const updateProfile = catchAsync(async (req, res) => {
  const profile = await profileService.updateProfile(req.user._id, req.body);
  res.send(profile);
});

export default {
  getMe,
  updateProfile,
};
