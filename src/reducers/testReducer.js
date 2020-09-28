import cuid from 'cuid';
export const cuidFn = cuid;

export default function testReducer
(state = {
    tests: [],
    questions: [],
    loading: false
  }, action) {
    switch(action.type){
        case 'LOADING_TESTS':
          return {
            ...state,
            tests: [...state.tests],
            loading: true
          }

        case 'ADD_TEST':
            const test = {text: action.text, id: cuidFn()};
            return{
                ...state,
                tests: [...state.tests, test]
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

        case 'ADD_QUESTIONS':

            const question = { text: action.question.text, testId: action.question.testId, id: cuidFn() };
            return { ...state,
              questions: [...state.questions, question]
              loading: false
            }

        case 'DELETE_QUESTIONS':
            const questions = state.questions.filter(question => question.id !== action.id);
            return {...state, questions }
            
        default:
            return state;
    }
}
