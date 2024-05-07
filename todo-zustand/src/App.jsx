import './App.css'
import TodoList from './components/todoList/TodoList'
import AddTodoForm from './components/addTodoForm/AddTodoForm'
function App() {

  return (
    <div className='container mx-auto max-w-md h-screen py-6'>
      <div className='flex flex-col p-4 border rounded-lg shadow-lg h-full'>
        <h1 className='text-2xl font-bold mb-4'>Lista de Tareas</h1>
        <AddTodoForm/>
        <TodoList />
      </div>
    </div>
  )
}

export default App
