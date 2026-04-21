import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));
  const toggleComplete = (id) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  return (
    <div className="todo-container">
      <h1>Task Master</h1>
      <form onSubmit={addTodo} className="input-group">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="New task..." />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
