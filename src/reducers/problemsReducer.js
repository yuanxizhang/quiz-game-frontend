import cuid from 'cuid';

const problemsReducer = (state = {
    problems: [],
    solutions: [],
    oading: false
  }, action) => {
    switch(action.type){
        case 'LOADING_PROBLEMS':
            return {
            ...state,
            problems: [...state.problems],
            loading: true
            }
            
        case 'GET_PROBLEMS':
            return {
            ...state,
            problems: action.problems,
            loading: false
            }

        case 'ADD_PROBLEM':
            const problem = {text: action.text, id: cuid()};
            return{
                ...state,
                problems: [...state.problems, problem]
            }

        case 'EDIT_PROBLEM':    
            return {    
                ...state,    
                problems: state.problems.map(    
                    (content, i) => content.id === action.payload.id ? {...content, text : action.payload.text }    
                                    : content)    
            }; 

        case 'DELETE_PROBLEM':
            const problems = state.problems.filter(problem => problem.id !== action.payload.id);
            return { ...state, problems}

        case 'ADD_SOLUTION':

            const solution = { text: action.solution.text, problemId: action.solution.problemId, id: cuid() };
            return { ...state,
              solutions: [...state.solutions, solution]
            }

        case 'DELETE_SOLUTION':
            const solutions = state.solutions.filter(solution => solution.id !== action.id);
            return {...state, solutions }
            
        default:
            return state;
    }
}

export default problemsReducer;