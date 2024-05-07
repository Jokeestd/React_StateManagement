import React, { useState } from 'react'
import useTodoStore from '../../store/todoStore'

const AddTodoForm = () => {
    const [text, setText] = useState('');
    const addTodo = useTodoStore(state => state.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        //if(!text.trim()) return;
        addTodo(text);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit} className='flex justify-between p-2'>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Añadir nueva tarea" className='flex-1 p-2 border rounded'/>
            <button type='submit' className='transition hover:big-blue-600 px-5 bg-blue-500 text-white ml-2 rounded'>Añadir</button>
        </form>
    )
}

export default AddTodoForm