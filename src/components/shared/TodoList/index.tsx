import React from 'react';
import TodoItem from '../../base/TodoItem/index';
import { useTodo } from '../../../context/TodoContext/index';

const TodoList: React.FC = () => {
  const { todos, updateTodo, deleteTodo, toggleTodoComplete } = useTodo();

  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No todos available</p>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleTodoComplete={toggleTodoComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;