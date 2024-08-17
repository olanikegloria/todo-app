import React from 'react';
import { TodoProvider } from '../../context/TodoContext/index';
import TodoList from '../../views/TodoListView';
import TodoInput from '../../views/TodoInputView';

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
