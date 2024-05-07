import React from 'react';
import useTodoStore from '../../store/todoStore';

const TodoItem = (todo) => {
    const { markTodo } = useTodoStore();
    const removeTodo = useTodoStore(state => state.removeTodo);
    
  return (
    <li className='flex items-center p-2'>
      <input type="checkbox" checked={todo.completed} onChange={() => markTodo(todo.id)} className='form-checkbox h-5 w-5' />
      <span className={`flex-1 ml-2 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)} className='px-2 py-1 bg-red-700 text-white rounded'>Delete</button>
    </li>
  )
}

export default TodoItem