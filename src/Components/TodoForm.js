import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value || !category) return;
        addTodo(value, category);

        setValue('');
        setCategory('');
        console.log(value, category);
    }

  return (
    <div className='todo-form'>
        <h2>Criar nova tarefa</h2>
        <form className='form' onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder='Digite o título:' onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button className='submit' type='submit'>Criar</button>
        </form>
    </div>
  )
}

export default TodoForm