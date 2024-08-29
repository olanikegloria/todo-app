import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import TodoContainer from '../../containers/TodoContainer';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      signOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <main className="w-full h-screen flex-col items-center justify-center mt-5">
      <div className="relative">
        <button
          onClick={handleLogout}
          className="absolute right-4 px-4 py-2 text-white font-medium rounded-lg bg-pink-600 hover:bg-pink-700 transition duration-300"
        >
          Log Out
        </button>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Welcome, {user?.email}
      </h1>
      <TodoContainer />
    </main>
  );
};

export default Home;
