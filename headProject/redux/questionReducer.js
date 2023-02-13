const initState = {
  dataPagination: "",
  dataQuestions: [],
  answeredQuestion: [],
  wrongAnswer: [],
  showAnswer: [],
  popupState: null,
  isBurgerOPen: "100%",
};

function questionReducer(state = initState, action) {
  switch (action.type) {
    case "dataQuestions": {
      let newState = { ...state, dataQuestions: action.dataQuestions };
      return newState;
    }
    case "data_localStorage": {
      let newState = {
        ...state,
        dataQuestions: action.stateLocalStorage.dataQuestions,
        answeredQuestion: action.stateLocalStorage.answeredQuestion,
        wrongAnswer: action.stateLocalStorage.wrongAnswer,
        showAnswer: action.stateLocalStorage.showAnswer,
        popupState: action.stateLocalStorage.popupState,
        isBurgerOPen: action.stateLocalStorage.isBurgerOPen,
        dataPagination: action.stateLocalStorage.dataPagination,
      };
      return newState;
    }
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
      let newState = { ...state, answeredQuestion: [], wrongAnswer: [], showAnswer: [], popupState: null };
      return newState;
    }
    case "popup_props": {
      let newState = { ...state, popupState: action.popup_description };
      return newState;
    }
    case "cancel_popup": {
      let newState = { ...state, popupState: null };
      return newState;
    }
    case "isBurgerOPen": {
      let newState = { ...state, isBurgerOPen: action.isBurgerOPen };
      return newState;
    }
    case "pagination": {
      let newState = { ...state, dataPagination: action.dataPagination };
      return newState;
    }

    default:
      return state;
  }
}

export default questionReducer;
