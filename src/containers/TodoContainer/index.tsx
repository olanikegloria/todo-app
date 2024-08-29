import React from 'react';
import { TodoProvider } from '../../context/TodoContext';
import TodoListContainer from '../../containers/TodoListContainer';
import TodoInputContainer from '../../containers/TodoInputContainer';

const TodoContainer: React.FC = () => {
  return (
    <TodoProvider>
      <div className="max-w-xl mx-auto">
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    </TodoProvider>
  );
};

export default TodoContainer;
