// reducers.js
import {
  ADD_TODO,
  MARK_TODO,
  REMOVE_TODO,
  MARK_ALL_COMPLETED,
} from './actionTypes';

const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, { text: action.payload.text, completed: false }],
      };
      case REMOVE_TODO:
        return {
          todos: state.todos.filter((todo, index) => index !== action.payload.id),
        };

    case MARK_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };


    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    default:
      return state;
  }
};

export default todoReducer;
