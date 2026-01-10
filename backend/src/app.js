import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import config from '../config/index.js';
import { errorConverter, errorHandler } from './middleware/error.js';
import ApiError from './utils/ApiError.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import appointmentRoutes from './routes/appointment.route.js';
import clinicController from './controllers/clinic.controller.js';
import { auth } from './middleware/auth.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set security HTTP headers
app.use(helmet());

// Parse json request body
app.use(express.json());

// Parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Gzip compression
app.use(compression());

// Enable cors
app.use(cors());
app.options('*', cors());

// HTTP request logger
if (config.env !== 'test') {
  app.use(morgan('dev'));
}

// Health check
app.get('/api/healthz', (req, res) => {
  res.send({ status: 'OK', env: config.env });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

// Clinic routes (Defined here for brevity or can be moved to separate file)
app.get('/api/clinics', clinicController.getClinics);
app.post('/api/admin/clinics', auth('ADMIN'), clinicController.createClinic);

// Swagger UI (Stub - in a real app, generate the JSON using swagger-jsdoc)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(JSON.parse(fs.readFileSync(path.join(__dirname, '../docs/swagger.json'), 'utf8'))));

// Send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(404, 'Not found'));
});

// Convert error to ApiError, if needed
app.use(errorConverter);

// Handle error
app.use(errorHandler);

export default app;
