import React from 'react';
import TodoListView from '../../views/TodoListView';
import { useTodoContext } from '../../context/TodoContext';

const TodoListContainer: React.FC = () => {
  const { todos } = useTodoContext();

  return <TodoListView todos={todos} />;
};

export default TodoListContainer;
