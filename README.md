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