import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LoginView from '../../pages/LoginPage/Login';

const LoginContainer: React.FC = () => {
  const { user, login } = useAuth();
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

  return (
    <LoginView
      user={user}
      email={email}
      password={password}
      isSigningIn={isSigningIn}
      errorMessage={errorMessage}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
