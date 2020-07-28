/**
 *  This is a container component that wraps the presentational TodoList component. It connects
 *  to the Redux, extracts the state and determines which todos to display based on the active filter.
 *  It also passes down a method to TodoList that will allow to toggle a Todo (by dispatching the right action)
 */

import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import { connect } from 'react-redux'
import { toggleCompleteTodoAction } from '../actions'

// Helper method to get the todos based on the filter selected.
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// HINT: Add the mapStateToProps and mapDispatchToProps methods here.
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleCompleteTodoAction(id))
    }
  }
};

// HINT: Connect this component to Redux using connect()
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);