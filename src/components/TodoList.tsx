import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: string;
  text: string;
  completed: boolean
}

interface TodoListProps {
  todos: Todo[];
  updateTodo: (id: string, newText: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodoComplete: (id: string) => void;

}

const TodoList: React.FC<TodoListProps> = ({ todos, updateTodo, deleteTodo, toggleTodoComplete}) => {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-md p-11">
    <h1 className="text-3xl font-bold mb-4 text-center  text-pink-600" style={{ fontFamily: '"Pacifico", cursive' }}>Todo List</h1>
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleTodoComplete={toggleTodoComplete}
        />
      ))}
    </ul>
  </div>
  );
};

export default TodoList;
