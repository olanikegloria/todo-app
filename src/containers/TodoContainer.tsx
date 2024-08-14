import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import '../App.css';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }
const TodoContainer: React.FC = () => {
    
 const [todos, setTodos] = useState<Todo[]>([]);

 const addTodo = ( text: string) =>{
   setTodos([ ...todos, {id:uuidv4(), text, completed: false}])
 }
const updateTodo = (id: string, newText: string) =>{
     setTodos(todos.map((todo) =>todo.id === id ? {...todo, text: newText} : todo ))
}

const deleteTodo =  (id: string) =>{
    setTodos(todos.filter((todo) =>todo.id !== id ))
}
const toggleTodoComplete = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  
    const todo = todos.find(todo => todo.id === id);
    if (todo && !todo.completed) {
      
      const confettiCount = 20; 
      for (let i = 0; i < confettiCount; i++) {
        const emojiContainer = document.createElement('div');
        emojiContainer.innerHTML = '🎉';
        emojiContainer.style.cssText = `
          position: fixed;
          left: ${Math.random() * 200}vw; 
          top: 100vh;
          font-size: 2rem;
          z-index: 50;
          pointer-events: none;
          animation: fly-across 1s ease-in-out forwards;
        `;
        document.body.appendChild(emojiContainer);
        setTimeout(() => {
          emojiContainer.remove();
        }, 2000);
      }
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
  <h1 className="text-4xl font-bold text-pink-600 mb-6 mt-10" style={{ fontFamily: '"Pacifico", cursive' }}>
    Todo App
  </h1>
  <TodoInput addTodo={addTodo} />
  <TodoList
    updateTodo={updateTodo}
    todos={todos}
    deleteTodo={deleteTodo}
    toggleTodoComplete={toggleTodoComplete}
  />
</div>

  )
}

export default TodoContainer