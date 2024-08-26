import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login: React.FC = () => {
  const { user, login} = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningIn(true);
    try {
      await login(email, password);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Failed to sign in. Please try again.');
      }
      setIsSigningIn(false);
    }
  };


  if (user) {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-pink-600">Welcome Back</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
          <button
            type="submit"
            disabled={isSigningIn}
            className={`w-full py-3 mt-4 bg-pink-500 text-white font-bold rounded-lg transition duration-300 ${isSigningIn ? 'bg-pink-300 cursor-not-allowed' : 'hover:bg-pink-600'}`}
          >
            {isSigningIn ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/register" className="text-pink-600 font-medium">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

