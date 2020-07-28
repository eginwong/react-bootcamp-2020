/**
 * This is a container component that is responsible for rendering the form to add the todos.
 * It will dispatch the necessary action upon the submission of a new todo.
 */

import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from '../actions'

const AddTodo = ({type, addTodo}) => {
  let input;

  const onSubmit = event => {
    event.preventDefault()
    if (!input.value.trim()) {
      return
    }

    // HINT: Dispatch an action here to add the new Todo.
    addTodo(input.value);

    input.value = ''
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todoName) => {
      dispatch(addTodoAction(todoName))
    }
  }
}

// HINT: Connect this component to Redux using connect()
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
