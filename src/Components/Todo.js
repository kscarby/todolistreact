import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className='todo' style={{backgroundColor: todo.state ? '#ffff7a' : ''}}>
            <div className='content' 
            style ={{textDecoration: todo.state ? 'line-through' : ''}}>
              <p>{todo.text}</p>

            </div>
            <div className='todo-buttons'>
        <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className='delete' onClick={() => removeTodo(todo.id)}>Apagar</button>
      </div>
    </div>
  )
}

export default Todo