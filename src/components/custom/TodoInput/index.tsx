import React, { useState } from 'react';
import { useTodo } from '../../../context/TodoContext';
import Input from '../../base/Input';
import Button from '../../base/Button';

const TodoInput: React.FC = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-3 mb-6">
      <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new todo" />
      <Button type="submit" className="bg-pink-500 text-white hover:bg-pink-600">Add</Button>
    </form>
  );
};

export default TodoInput;

