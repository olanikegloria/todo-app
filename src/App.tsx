import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/HomePage/Home';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
           <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;

