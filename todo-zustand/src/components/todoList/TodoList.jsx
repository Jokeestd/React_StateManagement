import React from 'react'
import useTodoStore from '../../store/todoStore'
import TodoItem from '../todoItem/TodoItem'; //Para renderizar cada todo

const TodoList = () => {
  const todos = useTodoStore(state => state.todos) //Extraer los todos del store
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />) //Renderizar cada todo
      )}
    </ul>
  )
}

export default TodoList;