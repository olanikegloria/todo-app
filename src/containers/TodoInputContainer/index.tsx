import React, { useState } from 'react';
import TodoInputView from '../../views/TodoInputView';
import { useTodoContext } from '../../context/TodoContext';

const TodoInputContainer: React.FC = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodoContext();

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    addTodo(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAddTodo();
  };

  return (
    <TodoInputView 
      input={input}
      onInputChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      onAddTodo={handleAddTodo}
    />
  );
}

export default TodoInputContainer;
