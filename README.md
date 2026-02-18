# 🍁 Canadian Newcomer Companion

A comprehensive full-stack web application designed to help newcomers settle in Canada with ease. This platform provides personalized checklists, community resources, and essential information tailored to each user's region and circumstances.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Key Features Deep Dive](#key-features-deep-dive)
- [Database Schema](#database-schema)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Core Functionality
- **🔐 User Authentication** - Secure registration, login, and JWT-based authentication
- **☁️ Cloud Data Sync** - User data stored in PostgreSQL database and synced across devices
- **👥 Guest Mode** - Use the app without creating an account (localStorage fallback)
- **🌐 Multilingual Support** - English and French interface with room for expansion
- **📍 Region-Based Personalization** - Customized content for all 13 Canadian provinces/territories
- **✅ Interactive Checklist** - 11 essential tasks with detailed step-by-step guidance
- **🏘️ Community Resources** - 50+ local settlement services, language schools, and support organizations
- **🍁 Indigenous Land Acknowledgement** - Respectful recognition of Indigenous territories with educational resources
- **💾 Progress Tracking** - Automatic saving of user preferences and checklist completion
- **⚙️ Customizable Settings** - Change language, region, and purpose of visit anytime
- **❓ Help & FAQ** - Comprehensive support with 15+ frequently asked questions
- **📱 Mobile Optimized** - Fully responsive design with PWA capabilities

### User Experience
- **Smooth Page Transitions** - Elegant animations between pages
- **Loading States** - Professional loading screens for better UX
- **Accessibility** - WCAG-compliant design with keyboard navigation support
- **Offline Support** - LocalStorage persistence for uninterrupted usage

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - Modern JavaScript library for building user interfaces
- **Vite 5.x** - Next-generation frontend tooling for fast development
- **Axios** - Promise-based HTTP client for API requests
- **CSS3** - Custom styling with responsive design and animations

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework
- **PostgreSQL** - Robust relational database
- **Prisma ORM** - Modern database toolkit for type-safe queries
- **JWT** - JSON Web Tokens for secure authentication
- **bcryptjs** - Password hashing for security

### Database (Supabase PostgreSQL)
- User authentication and profiles
- Task progress tracking
- Relational data modeling

### Development Tools
- **Git** - Version control
- **GitHub** - Repository hosting
- **ESLint** - Code quality and consistency
- **Nodemon** - Auto-restart during development

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- PostgreSQL database (or Supabase account)
- Git

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/canadian-newcomer-companion.git
cd canadian-newcomer-companion
```

#### 2. Install Frontend Dependencies
```bash
npm install
```

#### 3. Install Backend Dependencies
```bash
cd backend
npm install
```

#### 4. Set Up Environment Variables

Create `backend/.env` file:
```env
# Server Configuration
NODE_ENV=development
PORT=3001

# Database Configuration (Supabase or local PostgreSQL)
DATABASE_URL="postgresql://username:password@host:5432/database"

# JWT Secret (generate a random string)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

**Important:** Never commit `.env` files to Git!

#### 5. Set Up Database
```bash
# Run Prisma migrations to create tables
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate
```

#### 6. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend runs at: `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
# From project root
npm run dev
```
Frontend runs at: `http://localhost:5173`

---

## 📁 Project Structure
```
canadian-newcomer-companion/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma          # Database schema
│   │   └── migrations/            # Database migrations
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js  # Authentication logic
│   │   │   └── userController.js  # User profile & tasks
│   │   ├── middleware/
│   │   │   └── auth.js            # JWT authentication middleware
│   │   ├── routes/
│   │   │   ├── auth.js            # Auth routes
│   │   │   └── users.js           # User routes
│   │   ├── config/
│   │   │   └── db.js              # Database connection
│   │   └── server.js              # Express server setup
│   ├── .env                       # Environment variables (not committed)
│   ├── .gitignore
│   └── package.json
├── public/
│   ├── manifest.json              # PWA manifest
│   └── icons/                     # App icons
├── src/
│   ├── components/
│   │   ├── Welcome.jsx                    # Onboarding welcome screen
│   │   ├── Login.jsx                      # Login form
│   │   ├── Register.jsx                   # Registration form
│   │   ├── LanguageSelection.jsx          # Language picker
│   │   ├── PurposeOfVisit.jsx            # Purpose selection
│   │   ├── RegionSelection.jsx           # Interactive Canada map
│   │   ├── RegionDetail.jsx              # Location search
│   │   ├── IndigenousAcknowledgement.jsx # Land acknowledgement
│   │   ├── Dashboard.jsx                 # Main dashboard/home
│   │   ├── Checklist.jsx                 # Task checklist
│   │   ├── Settings.jsx                  # User settings
│   │   ├── Help.jsx                      # Help & FAQ
│   │   ├── CommunityResources.jsx        # Local resources
│   │   ├── Navigation.jsx                # Main navigation bar
│   │   ├── Loading.jsx                   # Loading screen
│   │   └── PageTransition.jsx            # Page transitions
│   ├── context/
│   │   └── AuthContext.jsx        # Authentication state management
│   ├── services/
│   │   └── api.js                 # API service & axios config
│   ├── utils/
│   │   └── storage.js             # Storage utilities (backend + localStorage)
│   ├── styles/
│   │   └── main.css              # Global styles
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # App entry point
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## 🔌 API Documentation

### Authentication Endpoints

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}

Response: { success: true, token: "jwt_token", user: {...} }
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response: { success: true, token: "jwt_token", user: {...} }
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>

Response: { success: true, user: {...} }
```

### User Profile Endpoints

#### Save Profile
```http
POST /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "language": "English",
  "purpose": "Immigration",
  "province": "BC",
  "location": "Victoria",
  "onboardingComplete": true
}

Response: { success: true, profile: {...} }
```

#### Get Profile
```http
GET /api/users/profile
Authorization: Bearer <token>

Response: { success: true, profile: {...} }
```

### Task Progress Endpoints

#### Save Tasks
```http
POST /api/users/tasks
Authorization: Bearer <token>
Content-Type: application/json

{
  "tasks": [
    { "taskId": 1, "completed": true },
    { "taskId": 2, "completed": false }
  ]
}

Response: { success: true, tasks: [...] }
```

#### Get Tasks
```http
GET /api/users/tasks
Authorization: Bearer <token>

Response: { success: true, tasks: [...] }
```

---

## 🎯 Key Features Deep Dive

### 1. Authentication System
- JWT-based authentication with 7-day token expiration
- Secure password hashing with bcrypt
- Protected routes with middleware
- Guest mode fallback for unauthenticated users

### 2. Personalized Checklist
11 essential settlement tasks including:
- Provincial health card (BC Services Card, OHIP, AHCIP, RAMQ, etc.)
- Social Insurance Number (SIN)
- Bank account setup
- Driver's license
- Healthcare registration
- Housing search
- Phone plan setup
- Community connection
- Cultural integration

Each task includes:
- Detailed description
- Required documents
- Step-by-step instructions
- Official government links
- Estimated completion time
- Priority level

### 3. Community Resources
50+ vetted organizations across all provinces:
- Settlement Services
- Language Training (LINC, ESL, FSL)
- Employment Services
- Housing Resources
- Healthcare Services
- Legal Services
- Cultural & Community Centers

### 4. Data Persistence
- **Authenticated Users:** Data stored in PostgreSQL via REST API
- **Guest Users:** Data stored in browser localStorage
- **Automatic Sync:** Changes saved immediately to backend
- **Offline Support:** LocalStorage fallback if backend unavailable

### 5. Provincial Support
Complete coverage for all 13 provinces/territories:
- British Columbia (BC)
- Ontario (ON)
- Alberta (AB)
- Quebec (QC)
- Saskatchewan (SK)
- Manitoba (MB)
- New Brunswick (NB)
- Nova Scotia (NS)
- Prince Edward Island (PE)
- Newfoundland and Labrador (NL)
- Yukon (YT)
- Northwest Territories (NT)
- Nunavut (NU)

---

## 💾 Database Schema

### User Table
```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  profile      UserProfile?
  taskProgress TaskProgress[]
}
```

### UserProfile Table
```prisma
model UserProfile {
  id        Int      @id @default(autoincrement())
  userId    Int      @unique
  language  String   @default("English")
  purpose   String
  province  String
  location  String
  onboardingComplete Boolean @default(false)
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### TaskProgress Table
```prisma
model TaskProgress {
  id          Int      @id @default(autoincrement())
  userId      Int
  taskId      Int
  completed   Boolean  @default(false)
  completedAt DateTime?
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@unique([userId, taskId])
}
```

---

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy `dist/` folder
3. Set environment variables in hosting dashboard
4. Configure build command: `npm run build`
5. Configure output directory: `dist`

### Backend Deployment (Render/Railway/Heroku)
1. Push to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Configure build command: `cd backend && npm install`
5. Configure start command: `cd backend && npm start`
6. Run migrations: `npx prisma migrate deploy`

### Database (Supabase/Neon/AWS RDS)
- Use production PostgreSQL instance
- Update `DATABASE_URL` in environment variables
- Run migrations on production database
- Enable SSL connections

---

## 🔮 Future Enhancements

### Planned Features
- [ ] Email verification for new accounts
- [ ] Password reset functionality
- [ ] Push notifications for task reminders
- [ ] Interactive map integration (Google Maps)
- [ ] Additional language support (Spanish, Mandarin, Punjabi, Arabic, etc.)
- [ ] Task deadline tracking
- [ ] Progress visualization (charts and graphs)
- [ ] Achievement badges and milestones
- [ ] Printable checklist and progress reports
- [ ] Document upload and storage
- [ ] Community forum/discussion board
- [ ] Video tutorials for common tasks
- [ ] Calendar integration
- [ ] SMS reminders
- [ ] Admin dashboard for content management

### Technical Improvements
- [ ] Unit and integration tests
- [ ] CI/CD pipeline
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Error tracking (Sentry)
- [ ] Rate limiting
- [ ] API versioning
- [ ] WebSocket for real-time updates

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
```bash
   git checkout -b feature/AmazingFeature
```
3. **Commit your changes**
```bash
   git commit -m 'Add some AmazingFeature'
```
4. **Push to the branch**
```bash
   git push origin feature/AmazingFeature
```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes across different devices
- Update documentation as needed
- Ensure accessibility standards are met

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### Built With
- **React** - Facebook's UI library
- **Express.js** - Web framework by Node.js Foundation
- **Prisma** - Next-generation ORM
- **Supabase** - Open-source Firebase alternative

### Data Sources
- Government of Canada official websites
- Immigration, Refugees and Citizenship Canada (IRCC)
- Provincial government resources
- Settlement service providers across Canada
- Indigenous Services Canada
- Native-Land.ca

### Special Thanks
- Settlement service providers across Canada
- Indigenous communities for land acknowledgement guidance
- Open-source community for tools and libraries
- Beta testers and early users

---

### Reporting Issues
If you encounter any bugs or have feature requests:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include screenshots if applicable
4. Specify browser and device information

---

## 📊 Project Status

**Current Version:** 2.0.0  
**Status:** Active Development  
**Last Updated:** February 2026

### Development Milestones
- ✅ **Week 1-2:** Project setup and frontend onboarding flow
- ✅ **Week 3-4:** Core features (checklist, dashboard, resources)
- ✅ **Week 5-6:** Additional pages (help, settings, all provinces)
- ✅ **Week 7:** Mobile optimization and PWA features
- ✅ **Week 8:** Backend API and database integration
- ✅ **Week 9:** User authentication and cloud sync
- 🔄 **Week 10:** Testing, bug fixes, and deployment prep

---

## 🌟 Key Achievements

✅ **Full-stack application** with React frontend and Node.js backend  
✅ **User authentication** with secure JWT implementation  
✅ **Cloud database** with PostgreSQL and Prisma ORM  
✅ **11 fully detailed tasks** with government links  
✅ **50+ community resources** across all provinces  
✅ **Complete coverage** of all 13 Canadian provinces/territories  
✅ **Dual-mode operation** (authenticated + guest)  
✅ **Fully responsive design** optimized for mobile  
✅ **PWA capabilities** for app-like experience  
✅ **Indigenous land acknowledgement** with educational content  
✅ **Comprehensive help system** with 15+ FAQs  

---

**Made with ❤️ for newcomers to Canada**

*This is a student project created for educational purposes. For official immigration information, please visit [canada.ca](https://www.canada.ca).*