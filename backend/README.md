# AyurSutra Node.js Backend

Production-ready backend for Ayurvedic Healthcare & E-Ticketing System.

## Features
- **Auth**: JWT based authentication with Refresh Tokens.
- **RBAC**: Role Based Access Control (PATIENT, DOCTOR, ADMIN).
- **Core Modules**: Clinics, Appointments, E-Ticketing (QR Code), Patient Profiles, Treatments, Feedback.
- **Security**: Helmet, CORS, Rate-limiting, Input Sanitization.
- **Industry Standards**: ES Modules, Winston Logging, Multi-stage Docker.

## Tech Stack
- **Node.js**: v18+
- **Database**: MongoDB (Mongoose)
- **Documentation**: Swagger UI
- **Testing**: Jest & Supertest

## Setup Instructions

### Prerequisites
- Node.js v18.x or higher
- MongoDB (Local or Atlas)
- Docker (Optional)

### Local Setup
1. Clone the repository.
2. Navigate to `backend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create `.env` from `.env.example`:
   ```bash
   cp .env.example .env
   ```
5. Run the application:
   ```bash
   npm run dev
   ```

### Docker Setup
```bash
docker-compose up --build
```

## API Documentation
Once the server is running, visit:
`http://localhost:4000/api/docs`

## Database Seeding
To seed an admin user, you can use the `/api/auth/register` endpoint and set the role to `ADMIN` in the request body (only allowed if no other admins exist or via custom seed script).

## Running Tests
```bash
npm test
```

## Deployment
- **Render/Railway**: Connect your GitHub repo and set environment variables.
- **AWS Beanstalk**: Zip the backend folder and upload, or use the EB CLI.
