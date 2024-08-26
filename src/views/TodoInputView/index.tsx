import React, { useState } from 'react';
import BaseInput from '../../components/base/Input/index';
import BaseButton from '../../components/base/Button/index';
import { useTodoContext } from '../../context/TodoContext';

const TodoInput: React.FC = () => {
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
    <div className="max-w-md mx-auto mt-10">
      <div className="flex items-center mb-4">
        <BaseInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add new todo"
        />
        <BaseButton onClick={handleAddTodo} className="bg-pink-500 text-white hover:bg-pink-600">
          Add Todo
        </BaseButton>
      </div>
    </div>
  )

}

export default TodoInput;
