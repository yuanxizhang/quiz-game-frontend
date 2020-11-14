import cuid from 'cuid';
export const cuidFn = cuid;

const testsReducer = (state = { tests: [], loading: false }, action) => {

    switch(action.type){
        case 'LOADING_TESTS':
          return {
            ...state,
            tests: [...state.tests],
            loading: true
          }

          case 'ADD_TESTS':
            return {
              ...state,
              cats: action.tests,
              loading: false
            }

          case 'ADD_TEST':
            const newTest = {name: action.name, id: cuidFn()};
            return{
                ...state,
                tests: [...state.tests, newTest],
                loading: false
            }

        case 'DELETE_TEST':
            const tests = state.tests.filter(test => test.id !== action.id);
            return { ...state, tests}

        case 'LOADING_QUESTIONS':
          return {
            ...state,
            questions: [...state.questions],
            loading: true
          }

        case 'ADD_QUESTION':

            const newQuestion = { text: action.question.text, testId: action.question.testId, id: cuidFn() };
            return { 
              ...state,
              questions: [...state.questions, newQuestion],
              loading: false
            }
        
        case 'ADD_TRIVIA_QUESTIONS':

            const questions = { questions: action.questions, testId: cuidFn() };
            return { 
              ...state,
              questions: [...state.questions, questions],
              loading: false
            }

        case 'DELETE_QUESTION':
            const qs = state.questions.filter(question => question.id !== action.id);
            return {...state, qs}
            
        default:
            return state;
    }
}

export default testsReducer;