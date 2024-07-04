import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');
  
  const handleInputChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTodo.trim() !== ''){
      setTodos([...todos, { id: Date.now(), text: inputTodo }]);
      setInputTodo('');
    }
  };

  return (
    <div className="App">
      
      <form onSubmit={handleSubmit}>
        <input 
        type={"text"} 
        value={inputTodo} 
        onChange={handleInputChange}
        placeholder="해야할 일을 입력하세요."></input>
        <button type='submit'>추가하기</button>
      </form>
      <h1>Todo List</h1>

      <div className='todolist'>
        {todos.map((todo) => (
          <div key={todo.id} className="todoitems">
            {todo.text}
          </div>
        ))}

      </div>
  
      
    </div>
  );
}

export default App;
