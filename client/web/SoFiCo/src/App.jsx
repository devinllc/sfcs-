import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './components/Auth';
import Dashboard from './components/Dashboard';
import { getCurrentUserId } from './services/api';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const userId = getCurrentUserId();
  if (!userId) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0e2d3c] to-[#116466]'>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
