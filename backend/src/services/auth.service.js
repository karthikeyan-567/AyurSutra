import jwt from 'jsonwebtoken';
import config from '../../config/index.js';
import User from '../models/user.model.js';
import ApiError from '../utils/ApiError.js';

/**
 * Generate JWT token
 * @param {ObjectId} userId
 * @param {string} expires
 * @param {string} secret
 * @returns {string}
 */
const generateToken = (userId, expires, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (expires === '15m' ? 15 * 60 : 7 * 24 * 60 * 60),
  };
  return jwt.sign(payload, secret);
};

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(401, 'Incorrect email or password');
  }
  return user;
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.findOne({ email: userBody.email })) {
    throw new ApiError(400, 'Email already taken');
  }
  return User.create(userBody);
};

export default {
  generateToken,
  loginUserWithEmailAndPassword,
  createUser,
};
