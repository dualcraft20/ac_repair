# AC Service UAE — Atmosphere Elite Web Application

A premium MERN-stack web application designed for central AC repair and comfort maintenance services in Dubai, UAE. Built with high-end typography, modern dark-mode aesthetics, custom grid asymmetry, bilingual context translation, and immersive Canvas animations.

---

## 🌟 Key Features

1. **Made-by-Design Visuals**:
   - Custom **Grid Asymmetry**: Re-engineered card layouts with double-width featured columns and uneven splits.
   - **Overlapping Factoids**: Floating glassmorphic cards and badges offset over image layers.
   - **Unified Typography & Icons**: Integrated Outfit/Poppins fonts and styled Google Material Symbols.
2. **Interactive Motion Graphics (React Bits)**:
   - **Global Galaxy WebGL Starfield**:twinkling, drifting star constellation rendered via a lightweight canvas shader, reacting to user cursor repulsion coordinates.
   - **Spotlight Cards**: Border and backdrop gradients trace cursor hover paths on services blocks.
   - **ClickSpark Sparks**: Every click anywhere on the page bursts a cluster of orange spark particles.
3. **Bilingual Translator Engine (EN / AR)**:
   - Global Language Provider switching document layout dynamically between `dir="ltr"` and `dir="rtl"`.
   - Dynamic translators mapping mock services and client reviews loaded from database collections into equivalent Arabic copies.
   - Localized form inputs, placeholders, calendar select windows, and coverage neighborhood listings.
4. **MERN Architecture**:
   - React 18, Vite 5, Tailwind CSS, Framer Motion, Mongoose (MongoDB), and Node Express server.

---

## 🚀 Local Setup & Installation

### Prerequisiets
Ensure you have [Node.js](https://nodejs.org/) (v16+) installed.

### 1. Install Dependencies
Run the install command inside both directories:
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 2. Configure Environment
Create a `.env` file inside the `backend` folder:
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/ac-service
```
*(If no `MONGO_URI` is supplied, the server automatically connects to a local JSON fallback file storage, ensuring 100% features functionality in offline/mock environments).*

### 3. Run Locally
To run both backend and frontend servers concurrently during development, run the startup script in the workspace root:
```bash
# Double-click or run the batch helper
run-dev.bat
```
Alternatively, start them separately:
```bash
# Terminal 1: Backend
cd backend
npm start

# Terminal 2: Frontend
cd frontend
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to test the site.

---

## ☁️ Deployment Guidelines

### Frontend (Vercel / Netlify)
You can deploy the Vite frontend directly to Vercel:
1. Select the `frontend` folder as the root directory of the Vercel project.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set the backend API URL inside your environment variables.

### Backend (Render / Heroku / railway)
Deploy the Express API server:
1. Choose Node environment and run `npm start` in the `backend` folder.
2. Hook the live database MongoDB connection.
