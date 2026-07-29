@echo off
title AC Service Dev Servers
echo ========================================================
echo   🚀 STARTING AC SERVICE MERN WEBSITE DEMO SERVERS 🚀
echo ========================================================
echo.
echo Starting backend server on http://localhost:5000 ...
start "AC Service Backend" cmd /k "cd backend && npm run dev"

echo Starting frontend dev server on http://localhost:5173 ...
start "AC Service Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================================
echo   ✨ BOTH SERVERS RUNNING IN SEPARATE COMMAND WINDOWS ✨
echo   - Backend: http://localhost:5000
echo   - Frontend: http://localhost:5173
echo ========================================================
echo.
pause
