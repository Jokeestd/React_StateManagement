import './App.css'
import TodoList from './components/todoList/TodoList'
import AddTodoForm from './components/addTodoForm/AddTodoForm'
function App() {

  {/* <div className='container mx-auto max-w-md h-screen py-6'> */}
  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded shadow-lg'>
        <h1 className='text-2xl font-bold mb-4'>Lista de Tareas</h1>
        <AddTodoForm/>
        <TodoList />
      </div>
    
  )
}

export default App
