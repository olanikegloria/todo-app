import TodoContainer from '../containers/TodoAppContainer';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext/index';
import { doSignOut } from '../lib/auth/index';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
     <main className="w-full h-screen flex-col items-center justify-center mt-5">
      <div className="relative">
      <button
        onClick={handleLogout}
        className="absolute  right-4 px-4 py-2 text-white font-medium rounded-lg bg-pink-600 hover:bg-pink-700 transition duration-300"
      >
        Log Out
      </button>
      </div>
     
        <h1 className="text-3xl font-bold text-gray-800 text-center">Welcome, {currentUser?.email}</h1>
        <TodoContainer />
      </main>
    
    </>
   
  )
}

export default Home