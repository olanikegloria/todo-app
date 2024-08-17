import React from 'react';
import TodoItemContainer from '../../containers/TodoItemContainer';
import {  useTodoContext } from '../../context/TodoContext/index';

const TodoList: React.FC = () => {
  const { todos } = useTodoContext();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItemContainer key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
