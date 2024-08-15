import React from 'react';
import { TodoProvider } from '../../context/TodoContext';
import TodoInput from '../../components/custom/TodoInput';
import TodoList from '../../components/shared/TodoList';

const TodoContainer: React.FC = () => {
  return (
    <TodoProvider>
      <div className="max-w-xl mx-auto">
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoContainer;
