import { ActionType, ActionTypeName, StateType } from "./actionType";
const {
  NEXT_BTN,
  PREV_BTN,
  EDUCATIONAL_STATE,
  IDENTITY_STATE,
  QUESTION_STATE,
} = ActionTypeName;

export const reducer = (state: StateType, { type, payload }: ActionType) => {
  switch (type) {
    case NEXT_BTN: {
      return {
        ...state,
        step: state.step === 3 ? state.step : state.step + 1,
      };
    }
    case PREV_BTN: {
      return {
        ...state,
        step: payload === state.step ? payload : state.step - 1,
      };
    }
    case IDENTITY_STATE: {
      return {
        ...state,
        biodata: { ...state, identity: payload },
      };
    }
    case EDUCATIONAL_STATE: {
      return {
        ...state,
        biodata: { ...state, educational: payload },
      };
    }
    case QUESTION_STATE: {
      return {
        ...state,
        biodata: { ...state, question: payload },
      };
    }
    default:
      return state;
  }
};
