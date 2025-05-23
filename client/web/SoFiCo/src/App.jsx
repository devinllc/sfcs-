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
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
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
  );
}

export default App;
