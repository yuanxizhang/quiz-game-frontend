import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageTest
(state = {
    tests: [],
    questions: [],
  }, action) {
    switch(action.type){
        case 'ADD_TEST':
            const test = {text: action.text, id: cuidFn()};
            return{
                ...state,
                tests: [...state.tests, test]
            }

        case 'DELETE_TEST':
            const tests = state.tests.filter(test => test.id !== action.id);
            return { ...state, tests}

        case 'ADD_QUESTIONS':

            const question = { text: action.question.text, testId: action.question.testId, id: cuidFn() };
            return { ...state,
              questions: [...state.questions, question]
            }

        case 'DELETE_QUESTIONS':
            const questions = state.questions.filter(question => question.id !== action.id);
            return {...state, questions }
            
        default:
            return state;
    }
}
