# 🍁 Canadian Newcomer Companion

A comprehensive web application designed to help newcomers settle in Canada with ease. This platform provides personalized checklists, community resources, and essential information tailored to each user's region and circumstances.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features Deep Dive](#key-features-deep-dive)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## ✨ Features

### Core Functionality
- **🌐 Multilingual Support** - English and French interface with room for expansion
- **📍 Region-Based Personalization** - Customized content for all Canadian provinces and territories
- **✅ Interactive Checklist** - 11 essential tasks with detailed step-by-step guidance
- **🏘️ Community Resources** - 16+ local settlement services, language schools, and support organizations
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
- **Touch-Optimized** - Large tap targets and mobile-friendly interactions

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - Modern JavaScript library for building user interfaces
- **Vite 5.x** - Next-generation frontend tooling for fast development
- **CSS3** - Custom styling with responsive design and animations

### Data Management
- **LocalStorage API** - Client-side data persistence
- **React Hooks** - State management with useState, useEffect

### Development Tools
- **Git** - Version control
- **GitHub** - Repository hosting
- **ESLint** - Code quality and consistency

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/canadian-newcomer-companion.git
   cd canadian-newcomer-companion
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the development server**
```bash
   npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure
```
canadian-newcomer-companion/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── icon-*.png             # App icons
├── src/
│   ├── components/
│   │   ├── Welcome.jsx                    # Onboarding welcome screen
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
│   ├── utils/
│   │   └── storage.js         # LocalStorage utilities
│   ├── styles/
│   │   └── main.css          # Global styles
│   ├── App.jsx               # Main app component
│   └── main.jsx              # App entry point
├── index.html
├── package.json
└── README.md
```

---

## 🎯 Key Features Deep Dive

### 1. Onboarding Flow
Users complete a 6-step onboarding process:
1. **Welcome Screen** - Introduction and login options
2. **Language Selection** - Choose English or French
3. **Purpose of Visit** - Immigration, Temporary Visit, or Travel
4. **Region Selection** - Interactive map of Canadian provinces
5. **Location Detail** - Specific city or institution
6. **Indigenous Acknowledgement** - Learn about the land

### 2. Personalized Checklist
11 essential settlement tasks including:
- Get BC Services Card (healthcare)
- Apply for Social Insurance Number (SIN)
- Open a bank account
- Get driver's license
- Register for Medical Services Plan (MSP)
- Find a family doctor
- Get public transit pass
- Secure housing
- Set up phone plan
- Connect with community services
- Understand Canadian culture

Each task includes:
- Detailed description
- Required documents
- Step-by-step instructions
- Official government links
- Estimated completion time
- Priority level

### 3. Community Resources
16+ vetted organizations across categories:
- Settlement Services
- Language Training (LINC, ESL)
- Employment Services (WorkBC, IECBC)
- Housing Resources
- Healthcare Services
- Legal Services
- Cultural & Community Centers
- Education & Training
- Financial Services

Each resource includes:
- Contact information (phone, email, website)
- Physical address
- Service descriptions
- Searchable and filterable

### 4. Data Persistence
All user data is saved locally:
- User preferences (language, region, purpose)
- Checklist completion status
- Onboarding completion state
- Settings changes

Users can reset all data at any time.

### 5. Mobile-First Design
- Responsive layouts for all screen sizes
- Touch-optimized interactions
- Safe area insets for notched devices
- 44px minimum touch targets (iOS standard)
- Prevented zoom on input focus
- PWA-ready for installation

---

## 🔮 Future Enhancements

### Planned Features
- [ ] User account creation and cloud sync
- [ ] Task deadline tracking and reminders
- [ ] Interactive map integration (Google Maps)
- [ ] Additional language support (Spanish, Mandarin, Punjabi, Arabic, Hindi, Tagalog)
- [ ] Push notifications for important deadlines
- [ ] Progress visualization (charts and graphs)
- [ ] Achievement badges and milestones
- [ ] Printable checklist and progress reports
- [ ] Integration with government APIs
- [ ] Community forum/discussion board
- [ ] Video tutorials for common tasks
- [ ] Document upload and storage
- [ ] Calendar integration
- [ ] SMS reminders

### Technical Improvements
- [ ] Backend API development
- [ ] Database integration (PostgreSQL)
- [ ] Authentication system (OAuth)
- [ ] Real-time data sync
- [ ] Advanced analytics
- [ ] Automated testing suite
- [ ] CI/CD pipeline
- [ ] Performance optimization
- [ ] SEO optimization

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
- **University of Victoria** - SENG 310 Requirements Engineering course
- **React** - Facebook's UI library
- **Vite** - Build tool by Evan You

### Data Sources
- Government of Canada official websites
- Immigration, Refugees and Citizenship Canada (IRCC)
- Provincial government resources
- BC Housing, WorkBC, Service BC
- Indigenous Services Canada
- Native-Land.ca

### Special Thanks
- Settlement service providers across Canada
- Indigenous communities for land acknowledgement guidance
- Open-source community for tools and libraries

---

## 📞 Contact & Support

**Project Maintainer:** Mikael  
**Course:** SENG 310 - Requirements Engineering  
**Institution:** University of Victoria  

### Reporting Issues
If you encounter any bugs or have feature requests:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include screenshots if applicable
4. Specify browser and device information

---

## 📊 Project Status

**Current Version:** 1.0.0  
**Status:** Active Development  
**Last Updated:** January 2026

### Development Timeline
- **Week 1-2:** Project setup and onboarding flow
- **Week 3-4:** Core features (checklist, dashboard)
- **Week 5-6:** Additional pages (resources, help, settings)
- **Week 7:** Mobile optimization and polish
- **Week 8+:** Testing and documentation

---

## 🌟 Key Achievements

✅ **Complete onboarding workflow** with 6 interactive steps  
✅ **11 fully detailed tasks** with government links  
✅ **16+ community resources** for BC region  
✅ **Fully responsive design** optimized for mobile  
✅ **LocalStorage persistence** for offline functionality  
✅ **Indigenous land acknowledgement** with educational content  
✅ **Multilingual foundation** ready for expansion  
✅ **PWA capabilities** for app-like experience  

---

**Made with ❤️ for newcomers to Canada**

*This is a student project created for educational purposes. For official immigration information, please visit [canada.ca](https://www.canada.ca).*