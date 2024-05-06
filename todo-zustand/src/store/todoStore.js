import { create } from "zustand";

// * Crear un 'store' con zustand (Hooks)
const useTodoStore = create(set => ({ //Based on fucntions
    todos: [], //Array of todos
    // Set function updates the state. Argument (state) is the current state and returns the new state
    addTodo: (text) => set((state) => ({ todos: [...state.todos, {id: Date.now(), text, completed: false}] })), 
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })), 
    markTodo: (id) => set((state) => ({ todos: state.todos.map(todo => t.id === id ? {...t, completed: !t.completed} : t) })), 
}));

export default useTodoStore;
