import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  mongoose: {
    url: process.env.MONGO_URI,
    options: {}
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpirationMinutes: process.env.JWT_EXPIRY || '15m',
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRY || '7d',
  },
  security: {
    bcryptSalt: parseInt(process.env.BCRYPT_SALT, 10) || 10,
    corsOrigin: process.env.CORS_ORIGIN || '*'
  },
  logLevel: process.env.LOG_LEVEL || 'info'
};

export default config;
