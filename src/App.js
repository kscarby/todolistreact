
import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';


function App() {
  const [todos, setTodos] = useState ([
    { id: 1 , 
      text: "Estudar React!",
      category: "Estudos",
      state: true,
    },
    { id: 2 , 
      text: "Concluir tarefa x!",
      category: "Trabalho",
      state: false,
    },
    { id: 3 , 
      text: "Sair para jantar!",
      category: "Pessoal",
      state: false,
    },
    
  ]);

  const addTodo = (text, category) => {

    const newTodos = [...todos,
      {
        id: Math.floor(Math.random()* 10000),
        text,
        category,
        state: false,

      },
    ];
      
    setTodos(newTodos);

  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodo = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodo);
  };

  const completeTodo = (id) => {
    const completeTodos = [...todos];
    completeTodos.map((todo) =>
      todo.id === id ? todo.state = !todo.state : todo
    );

    setTodos(completeTodos);
  };


  return (
    <div className="app">
      <h1>List to do</h1>
      <TodoForm  addTodo = {addTodo}/>
      <div className='todo-list'>
        {todos.map ((todo) => (
          <Todo 
          key = {todo.id}
          todo = {todo}
          removeTodo = {removeTodo} 
          completeTodo = {completeTodo}/>
        ))}
      </div>
    </div>
  );
};
export default App;
