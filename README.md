# 🚀 GP Solutions

A modern, full-stack web application with a vibrant orange/red/yellow/white theme, built with modularity in mind.

## 📁 Project Structure

```
gp-sol/
├── frontend/          # React + Vite frontend
├── backend/           # Express.js backend
├── database.sqlite    # SQLite database (created on first run)
└── README.md
```

## ✨ Features

- **Dynamic Frontend**: React with Framer Motion animations
- **Vibrant Theme**: Orange, red, yellow, and white color scheme
- **Modular Backend**: Express.js with clean MVC architecture
- **SQLite Database**: Lightweight, file-based database
- **RESTful API**: Well-structured API endpoints
- **Responsive Design**: Works on all device sizes

## 🛠️ Technology Stack

### Frontend
- React 18
- Vite (Fast build tool)
- Framer Motion (Animations)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- better-sqlite3 (SQLite driver)
- CORS enabled

### Database
- SQLite3

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

### Running the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
The API will run on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
The frontend will run on http://localhost:3000

## 📡 API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Contact
- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Submit contact form
- `DELETE /api/contact/:id` - Delete contact message

### Health Check
- `GET /api/health` - Check API status

## 🎨 Color Scheme

```css
Orange: #FF6B35
Red: #FF3131
Yellow: #FFD23F
White: #FFFFFF
Light Orange: #FFB88C
```

## 📂 Modular Architecture

### Frontend Structure
```
frontend/src/
├── components/       # Reusable React components
├── styles/          # CSS modules
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

### Backend Structure
```
backend/src/
├── controllers/     # Request handlers
├── models/          # Database models
├── routes/          # API routes
├── database/        # Database configuration
└── server.js        # Express server
```

## 🔧 Configuration

### Frontend (vite.config.js)
- Development server on port 3000
- Proxy to backend API on port 5000

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

## 🌟 Key Features

### Animations
- Floating background shapes
- Smooth page transitions
- Hover effects on cards and buttons
- Animated gradients

### Modular Design
- Easy to add new services
- Expandable routing
- Clean separation of concerns
- Reusable components

## 📝 Adding New Features

### Add a New Frontend Component
1. Create component in `frontend/src/components/`
2. Create corresponding CSS in `frontend/src/styles/`
3. Import and use in `App.jsx`

### Add a New API Endpoint
1. Create model in `backend/src/models/`
2. Create controller in `backend/src/controllers/`
3. Create route in `backend/src/routes/`
4. Register route in `backend/src/server.js`

### Add Database Table
1. Add table creation in `backend/src/database/init.js`
2. Create model methods in `backend/src/models/`

## 🚢 Production Build

### Frontend
```bash
cd frontend
npm run build
```

### Backend
```bash
cd backend
npm start
```

## 🤝 Contributing

This is a modular project designed for easy expansion. Feel free to add new features, components, or endpoints following the existing patterns.

## 📄 License

MIT

## 👤 Author

GP Solutions Team

---

Built with ❤️ using React, Express, and SQLite
