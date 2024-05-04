
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: {todo}
  });

export const updateSearch = (search) => ({
    type: UPDATE_SEARCH,
    payload: {search}
  });

export const filterTodos = (filter) => ({
    type: FILTER_TODOS,
    payload: {filter}
  });

  export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: {id}
  });

  export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: {id}
  });

  export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: {id}
  });
  
  export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {id}
  });

  export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED
  });