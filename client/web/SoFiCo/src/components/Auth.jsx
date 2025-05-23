// Install framer-motion first: npm install framer-motion
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createUser, loginUser, setCurrentUserId } from '../services/api';
import { useNavigate } from 'react-router-dom';

const formVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

function AuthForm() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await createUser(formData);
      setSuccess('Registration successful!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: ''
      });
      // After successful registration, switch to login view
      setIsSignUp(false);
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const { email, password } = formData;
      const response = await loginUser({ email, password });
      
      // If we get here, login was successful
      setSuccess('Login successful!');
      // Navigate to dashboard immediately
      navigate('/dashboard', { replace: true });
      
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
      setCurrentUserId(null);
    }
  };

  return (
    <div className='min-h-[85vh] flex justify-center items-center '>
      <div style={{
        display: 'flex',
        width: 700,
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
      }}>
        {/* Left Panel */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, #4e9af1 0%, #3461c1 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 40
        }}>
          {isSignUp ? (
            <>
              <h2 style={{ fontWeight: 700 }}>Join Our Community</h2>
              <p style={{ margin: '16px 0 32px' }}>
                Start your journey with us and discover amazing opportunities.
              </p>
              <button
                style={{
                  border: '1px solid white',
                  background: 'transparent',
                  color: 'white',
                  padding: '10px 32px',
                  borderRadius: 24,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                onClick={() => setIsSignUp(false)}
              >
                SIGN IN
              </button>
            </>
          ) : (
            <>
              <h2 style={{ fontWeight: 700 }}>Welcome Back!</h2>
              <p style={{ margin: '16px 0 32px' }}>
                Sign in to continue your journey with us.
              </p>
              <button
                style={{
                  border: '1px solid white',
                  background: 'transparent',
                  color: 'white',
                  padding: '10px 32px',
                  borderRadius: 24,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                onClick={() => setIsSignUp(true)}
              >
                SIGN UP
              </button>
            </>
          )}
        </div>
        {/* Right Panel */}
        <AnimatePresence mode="wait">
          {isSignUp ? (
            <motion.div
              key="signup"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              style={{
                flex: 1,
                background: 'white',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h2 style={{ fontWeight: 700, marginBottom: 24 }}>Create Account</h2>
              <form className="form" autoComplete="off" onSubmit={handleSignUp}>
                {error && <div style={{ color: 'red', marginBottom: '16px' }}>{error}</div>}
                {success && <div style={{ color: 'green', marginBottom: '16px' }}>{success}</div>}
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle} 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle} 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyle} 
                />
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  style={inputStyle} 
                />
                <button type="submit" style={buttonStyle}>CREATE ACCOUNT</button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="signin"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              style={{
                flex: 1,
                background: 'white',
                padding: 40,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <h2 style={{ fontWeight: 700, marginBottom: 24 }}>Sign in</h2>
              <form className="form" autoComplete="off" onSubmit={handleSignIn}>
                {error && <div style={{ color: 'red', marginBottom: '16px' }}>{error}</div>}
                {success && <div style={{ color: 'green', marginBottom: '16px' }}>{success}</div>}
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle} 
                />
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  style={inputStyle} 
                />
                <button type="submit" style={buttonStyle}>SIGN IN</button>
                <a href="#" style={{ color: '#007bff', fontSize: 14, marginTop: 10, textAlign: 'right', display: 'block' }}>
                  Forgot your password?
                </a>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '16px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: 16
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  background: '#4e9af1',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 700,
  fontSize: 16,
  marginTop: '8px',
  cursor: 'pointer'
};

export default AuthForm;