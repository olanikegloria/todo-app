import React from 'react';
import BaseCheckbox from '../../components/base/checkbox/index';
import BaseButton from '../../components/base/Button/index';
import BaseInput from '../../components/base/Input/index';
import CustomLi from '../../components/custom/CustomList/index';
import CustomDiv from '../../components/custom/CustomDiv';
import CustomSpan from '../../components/custom/CustomSpan';

interface TodoItemViewProps {
  todo: { id: string; text: string; completed: boolean };
  isEditing: boolean;
  newText: string;
  setIsEditing: (value: boolean) => void;
  setNewText: (text: string) => void;
  handleSave: () => void;
  toggleTodoComplete: () => void;
  deleteTodo: () => void;
  cancelEditing: () => void;
}

const TodoItemView: React.FC<TodoItemViewProps> = ({
  todo,
  isEditing,
  newText,
  setIsEditing,
  setNewText,
  handleSave,
  toggleTodoComplete,
  deleteTodo,
  cancelEditing,
}) => (
  <CustomLi
    className={`flex items-center justify-between p-4 mb-4 rounded-md ${todo.completed ? 'bg-pink-200' : 'bg-white'} shadow-lg`}
  >
    <CustomDiv className="flex items-center w-full">
      <BaseCheckbox checked={todo.completed} onChange={toggleTodoComplete} />
      {isEditing ? (
        <BaseInput value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <CustomSpan className={`flex-grow mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </CustomSpan>
      )}
    </CustomDiv>
    <CustomDiv className="flex space-x-3">
      {isEditing ? (
        <>
          <BaseButton onClick={handleSave} className="bg-green-500 text-white hover:bg-green-600">Save</BaseButton>
          <BaseButton onClick={cancelEditing} className="bg-red-500 text-white hover:bg-red-600">Cancel</BaseButton>
        </>
      ) : (
        <BaseButton onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white hover:bg-yellow-600">Edit</BaseButton>
      )}
      <BaseButton onClick={deleteTodo} className="bg-red-500 text-white hover:bg-red-600">Delete</BaseButton>
    </CustomDiv>
  </CustomLi>
);

export default TodoItemView;
