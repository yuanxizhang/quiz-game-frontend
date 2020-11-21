const jobsReducer = (state = { jobs: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_JOBS':
        return {
          ...state,
          jobs: [...state.jobs],
          loading: true
        }
      case 'ADD_JOBS':
        return {
          ...state,
          jobs: action.jobs,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default jobsReducer;