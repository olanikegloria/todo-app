import React from 'react';
import BaseInput from '../../components/base/Input/index';
import BaseButton from '../../components/base/Button/index';

interface TodoInputViewProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAddTodo: () => void;
}

const TodoInputView: React.FC<TodoInputViewProps> = ({
  input,
  onInputChange,
  onKeyDown,
  onAddTodo,
}) => (
  <div className="max-w-md mx-auto mt-10">
    <div className="flex items-center mb-4">
      <BaseInput
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder="Add new todo"
      />
      <BaseButton onClick={onAddTodo} className="bg-pink-500 text-white hover:bg-pink-600">
        Add Todo
      </BaseButton>
    </div>
  </div>
);

export default TodoInputView;

