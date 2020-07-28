let nextTodoId = 0

// This is the action to add a new Todo.
export const addTodoAction = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const toggleCompleteTodoAction = id => ({
  type: 'TOGGLE_COMPLETE_TODO',
  id
});

//HINT: Add the rest of the actions here

export const toggleVisibilityFilters = filter => ({
  type: filter
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}