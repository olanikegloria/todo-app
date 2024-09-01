import React from 'react';
import TodoItemContainer from '../../containers/TodoItemContainer';

interface TodoListViewProps {
  todos: { id: string; text: string; completed: boolean }[];
}

const TodoListView: React.FC<TodoListViewProps> = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItemContainer key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoListView;
