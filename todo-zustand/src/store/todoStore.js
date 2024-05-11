import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// * Crear un 'store' con zustand
    const useTodoStore = create((set => ({ //Based on fucntions
    todos: [], //Array of todos
    // Set function updates the state. Argument (state) is the current state and returns the new state
    addTodo: (text) => set((state) => ({ todos: [...state.todos, {id: Date.now(), text, completed: false}] })), 
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })), 
    markTodo: (id) => set((state) => ({ todos: state.todos.map(t => t.id === id ? {...t, completed: !t.completed} : t) })), 
})), { name: "todos" });

// Descomentar para utilizar middleware (DevTools y Persist)
/*
let store = (set => ({ //Based on fucntions
    todos: [], //Array of todos
    // Set function updates the state. Argument (state) is the current state and returns the new state
    addTodo: (text) => set((state) => ({ todos: [...state.todos, {id: Date.now(), text, completed: false}] })), 
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })), 
    markTodo: (id) => set((state) => ({ todos: state.todos.map(t => t.id === id ? {...t, completed: !t.completed} : t) })), 
})); //Store 

store = devtools(store); //Devtools middleware
store = persist(store, { name: "todos" }); //Persist middleware (Save the state in the local storage 
const useTodoStore = create(store); //Create the store*/
export default useTodoStore;
