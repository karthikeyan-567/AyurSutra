import catchAsync from '../utils/catchAsync.js';
import authService from '../services/auth.service.js';

const register = catchAsync(async (req, res) => {
  const user = await authService.createUser(req.body);
  const token = authService.generateToken(user._id, '24h');
  const refreshToken = authService.generateToken(user._id, '7d');
  res.status(201).send({ user, token, refreshToken });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const token = authService.generateToken(user._id, '15m');
  const refreshToken = authService.generateToken(user._id, '7d');
  res.send({ user, token, refreshToken });
});

const logout = catchAsync(async (req, res) => {
  // In a real app, you'd invalidate the refresh token in the DB
  res.status(204).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  // Logic to verify refresh token and issue new access token
  res.send({ message: 'Refresh token implementation stub' });
});

export default {
  register,
  login,
  logout,
  refreshTokens,
};
