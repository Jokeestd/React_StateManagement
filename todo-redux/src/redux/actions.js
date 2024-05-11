// actions.js
import {
  ADD_TODO,
  MARK_TODO,
  REMOVE_TODO,
  MARK_ALL_COMPLETED,
} from './actionTypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const markTodo = (id) => ({
  type: MARK_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});
