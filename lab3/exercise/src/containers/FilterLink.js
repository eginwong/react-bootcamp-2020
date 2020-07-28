/**
 *  This is a container component that wraps the presentational Link component.
 *  It connects to the Redux store, extracts the state and determines which filter is currently active.
 *  It also passes down a method to Link that will allow it to set an active filter upon 
 *  click (by dispatching the right action).  
 */

import Link from '../components/Link'
import { connect } from 'react-redux'
import { toggleVisibilityFilters } from '../actions'

// HINT: Add the mapStateToProps and mapDispatchToProps methods here.

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter,
        children: ownProps.children,
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleVisibilityFilters(ownProps.filter));
    }
  }
}

// HINT: Connect this component to Redux using connect()
export default connect(mapStateToProps, mapDispatchToProps)(Link);
