const todos = (state = [], action) => {
  let updatedState = state.slice(); 
  switch (action.type) {
    // HINT: Add all the cases for the different actions here.
    case 'ADD_TODO': 
      updatedState.push(
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      )
      return updatedState
    case 'TOGGLE_COMPLETE_TODO': 
      let todo = updatedState.find(todo => todo.id === action.id);
      todo.completed = !todo.completed;
      return updatedState
    default:
      return state
  }
}

export default todos
