import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    // HINT: Add all the cases for the different actions here.
    case VisibilityFilters.SHOW_ALL: 
      return VisibilityFilters.SHOW_ALL;
    case VisibilityFilters.SHOW_COMPLETED: 
      return VisibilityFilters.SHOW_COMPLETED;
    case VisibilityFilters.SHOW_ACTIVE: 
      return VisibilityFilters.SHOW_ACTIVE;
    default:
      return state
  }
}

export default visibilityFilter
