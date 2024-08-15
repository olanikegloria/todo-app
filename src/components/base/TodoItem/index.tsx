import React, { useState } from 'react';
import Checkbox from '../checkbox/index';
import Button from '../Button/index';

interface TodoItemProps {
  todo: { id: string; text: string; completed: boolean };
  updateTodo: (id: string, newText: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodoComplete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo, toggleTodoComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`flex items-center justify-between p-4 mb-4 rounded-md ${todo.completed ? 'bg-pink-200' : 'bg-white'} shadow-lg`}>
      <div className="flex items-center w-full">
        <Checkbox checked={todo.completed} onChange={() => toggleTodoComplete(todo.id)} />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-grow px-3 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        ) : (
          <span className={`flex-grow mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex space-x-3">
        {isEditing ? (
          <>
            <Button onClick={handleSave} className="bg-green-500 text-white hover:bg-green-600">Save</Button>
            <Button onClick={() => setIsEditing(false)} className="bg-red-500 text-white hover:bg-red-600">Cancel</Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white hover:bg-yellow-600">Edit</Button>
        )}
        <Button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white hover:bg-red-600">Delete</Button>
      </div>
    </li>
  );
};

export default TodoItem;
