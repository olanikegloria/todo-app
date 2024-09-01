import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

interface User {
  email: string;
  uid: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const apiKey = 'AIzaSyC9hfyoGTlWWKNPN5gKRtkdIFNBS-Fxwyw';


  const signup = async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
          displayName: name,
        }
      );

      const { idToken } = response.data;
      const decodedToken = jwtDecode<{ user_id: string; email: string }>(idToken);
      const uid = decodedToken.user_id;

      Cookies.set('uid', uid);
      Cookies.set('access_token', idToken);
      setUser({ email, uid });
      console.log('Signed up successfully');
    } catch (error) {
      console.error('Failed to sign up', error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );

      const { idToken } = response.data;
      const decodedToken = jwtDecode<{ user_id: string; email: string }>(idToken);
      const uid = decodedToken.user_id;

      Cookies.set('uid', uid);
      Cookies.set('access_token', idToken);
      setUser({ email, uid });
      console.log('Logged in successfully');
    } catch (error) {
      console.error('Failed to login', error);
      throw error;
    }
  };

  const signOut = () => {
    Cookies.remove('uid');
    Cookies.remove('access_token');
    setUser(null);
    console.log('Logged out successfully');
  };


  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      try {
        const decodedToken = jwtDecode<{ user_id: string; email: string }>(token);
        const uid = decodedToken.user_id;
        const email = decodedToken.email;
        setUser({ email, uid });
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
