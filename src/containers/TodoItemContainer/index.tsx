import React, { useState } from 'react';
import TodoItemView from '../../views/TodoItemView/index';
import { useTodoContext } from '../../context/TodoContext/index';

const TodoItemContainer: React.FC<{ todo: { id: string; text: string; completed: boolean } }> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const { updateTodo, deleteTodo, toggleTodoComplete } = useTodoContext();

  const handleSave = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setNewText(todo.text);
  };

  return (
    <TodoItemView
      todo={todo}
      isEditing={isEditing}
      newText={newText}
      setIsEditing={setIsEditing}
      setNewText={setNewText}
      handleSave={handleSave}
      toggleTodoComplete={() => toggleTodoComplete(todo.id)}
      deleteTodo={() => deleteTodo(todo.id)}
      cancelEditing={cancelEditing}
    />
  );
};

export default TodoItemContainer;
