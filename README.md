# Government Schemes Awareness Website

A modern, responsive MERN stack portal designed to help citizens (Students, Women, Senior Citizens, and Farmers) discover and check eligibility for various government initiatives.

## Features

- **Category-wise Schemes**: Dedicated sections for Students, Women, Senior Citizens, and Farmers.
- **Smart Eligibility Checker**: Enter your details to find matching schemes instantly.
- **Modern UI/UX**: Clean, card-based layout with smooth animations and responsive design.
- **Admin Dashboard**: Secure panel to add, edit, and remove schemes.
- **Multi-language Support**: Structure ready for English, Telugu, Hindi, and Tamil.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Authentication**: JWT (JSON Web Tokens).

## Getting Started

### 1. Prerequisite
- Node.js installed.
- MongoDB running locally or a MongoDB Atlas URI.

### 2. Setup
1. Clone the repository or extract the files.
2. In the root directory, install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```

### 3. Configuration
1. Check `backend/.env` and update `MONGODB_URI` if necessary.

### 4. Seed Data
Populate the database with initial schemes and an admin user:
```bash
npm run seed
```
**Admin Credentials**:
- Username: `admin`
- Password: `admin123`

### 5. Run the Application
Start both frontend and backend concurrently:
```bash
npm run dev
```
The website will be available at `http://localhost:5173` and the API at `http://localhost:5000`.

## Website Modules

1. **Home**: Hero section, category cards, and latest updates.
2. **Schemes**: Searchable list of schemes with detailed modals for benefits and eligibility.
3. **Eligibility Checker**: Interactive form for personalized recommendations.
4. **Admin Panel**: CRUD interface for scheme management.
