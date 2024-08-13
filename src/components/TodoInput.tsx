import { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({addTodo}) => {
    const [input, setInput] = useState('')

    const handleInput =(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
        if(input.trim()){
            addTodo(input)
            setInput('');
        }
    }

      const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          addTodo(input);
          setInput('');
        }
      };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-pink-100 shadow-lg rounded-lg relative overflow-hidden">
    <h1 className="text-2xl font-semibold mb-6 text-center text-pink-600 " style={{ fontFamily: '"Pacifico", cursive' }}>Add New Todo</h1>
    <form onSubmit={handleInput} className="flex mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new todo"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-6 py-2 rounded-r-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        Add
      </button>
    </form>
    </div>
  )
}

export default TodoInput