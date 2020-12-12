import cuid from 'cuid';
export const cuidFn = cuid;

const problemsReducer = (state = {
    problems: [],
    solutions: [],
  }, action) => {
    switch(action.type){
        case 'ADD_PROBLEM':
            const problem = {text: action.text, id: cuidFn()};
            return{
                ...state,
                problems: [...state.problems, problem]
            }

        case 'DELETE_PROBLEM':
            const problems = state.problems.filter(problem => problem.id !== action.id);
            return { ...state, problems}

        case 'ADD_SOLUTION':

            const solution = { text: action.solution.text, problemId: action.solution.problemId, id: cuidFn() };
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