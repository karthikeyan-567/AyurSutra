import jwt from 'jsonwebtoken';
import config from '../../config/index.js';
import ApiError from '../utils/ApiError.js';
import User from '../models/user.model.js';
import catchAsync from '../utils/catchAsync.js';

export const auth = (...requiredRoles) =>
  catchAsync(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new ApiError(401, 'Please authenticate');
    }

    try {
      const decoded = jwt.verify(token, config.jwt.secret);
      const user = await User.findById(decoded.sub);

      if (!user) {
        throw new ApiError(401, 'User not found');
      }

      if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
        throw new ApiError(403, 'Forbidden');
      }

      req.user = user;
      next();
    } catch (error) {
      if (error instanceof ApiError) {
        return next(error);
      }
      if (error.name === 'TokenExpiredError') {
        return next(new ApiError(401, 'Token expired. Please login again.'));
      }
      return next(new ApiError(401, 'Invalid token'));
    }
  });
