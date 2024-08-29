import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Register from '../../pages/RegisterPage/Register';

const RegisterContainer: React.FC = () => {
  const { user, signup } = useAuth();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningUp(true);
    try {
      await signup(name, email, password);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Failed to sign up. Please try again.');
      }
      setIsSigningUp(false);
    }
  };

  return (
    <Register
      user={user}
      name={name}
      email={email}
      password={password}
      isSigningUp={isSigningUp}
      errorMessage={errorMessage}
      onNameChange={setName}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterContainer;
