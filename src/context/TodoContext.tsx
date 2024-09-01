import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import confetti from 'canvas-confetti';
import { Database_Url } from './../lib/config/index';
import { useAuth } from './AuthContext';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  updateTodo: (id: string, newText: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodoComplete: (id: string) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (user) {
      const fetchTodos = async () => {
        try {
          const response = await axios.get(`${Database_Url}/users/${user.uid}/todos.json`);
          const data = response.data;
          const loadedTodos = data ? Object.keys(data).map((key) => ({ id: key, ...data[key] })) : [];
          setTodos(loadedTodos);
        } catch (error) {
          console.error('Error fetching todos:', error);
        }
      };
      fetchTodos();
    }
  }, [user]);

  const addTodo = async (text: string) => {
    if (!user) return;
    try {
      const response = await axios.post(`${Database_Url}/users/${user.uid}/todos.json`, { text, completed: false });
      const newTodo = { id: response.data.name, text, completed: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (id: string, newText: string) => {
    if (!user) return;
    try {
      await axios.put(`${Database_Url}/users/${user.uid}/todos/${id}.json`, { text: newText, completed: todos.find(todo => todo.id === id)?.completed || false });
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
      );
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id: string) => {
    if (!user) return;
    try {
      await axios.delete(`${Database_Url}/users/${user.uid}/todos/${id}.json`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const toggleTodoComplete = async (id: string) => {
    if (!user) return;
    try {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        await axios.put(`${Database_Url}/users/${user.uid}/todos/${id}.json`, { text: todo.text, completed: !todo.completed });
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
        if (!todo.completed) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      }
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodoComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
