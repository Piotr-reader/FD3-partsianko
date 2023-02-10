const initState = {
  answeredQuestion: [],
  wrongAnswer: [],
  showAnswer: [],
};

function questionReducer(state = initState, action) {
  switch (action.type) {
    case "correct_answer": {
      let flag = false;
      let aaa = [...state.answeredQuestion, action.numberQuestion];
      let newState = { ...state, answeredQuestion: aaa, wrongAnswer: [] };
      state.answeredQuestion.forEach((number) => {
        if (number.numberQuestion === action.numberQuestion.numberQuestion) {
          flag = true;
        }
      });
      if (flag) {
        return state;
      } else {
        return newState;
      }
    }
    case "wrong_answer": {
      let newState = { ...state, wrongAnswer: action.numberQuestion, showAnswer: [] };
      state.answeredQuestion.forEach((number, index) => {
        if (number.numberQuestion === action.numberQuestion) {
          newState.answeredQuestion.splice(index, 1);
        }
      });
      return newState;
    }
    case "show_answer": {
      let newState = { ...state, showAnswer: action.numberQuestion, wrongAnswer: [] };
      return newState;
    }
    case "refresh_answer": {
      let newState = { ...state, answeredQuestion: [], wrongAnswer: [], showAnswer: [] };
      return newState;
    }
    default:
      return state;
  }
}

export default questionReducer;
