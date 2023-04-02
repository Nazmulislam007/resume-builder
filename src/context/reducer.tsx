import {
  ActionType,
  ActionTypeName,
  InputStateType,
  StateType,
} from "./actionType";
const {
  NEXT_BTN,
  PREV_BTN,
  CHANGE_IDENTITY_STATE,
  CHANGE_EDUCATIONAL_QUESTION_STATE,
  GLOBAL_STATE,
} = ActionTypeName;

export const reducer = (state: StateType, { type, payload }: ActionType) => {
  switch (type) {
    case NEXT_BTN: {
      return {
        ...state,
        step: state.step >= 3 ? state.step : state.step + 1,
      };
    }
    case PREV_BTN: {
      return {
        ...state,
        step: state.step <= 0 ? 0 : state.step - 1,
      };
    }
    default:
      return state;
  }
};

export const stateReducer = (
  state: InputStateType,
  { type, payload }: ActionType
) => {
  switch (type) {
    case GLOBAL_STATE: {
      return {
        ...state,
        bioData: {
          ...state.bioData,
          [payload.type]: payload.data,
        },
      };
    }

    case CHANGE_IDENTITY_STATE: {
      return {
        ...state,
        bioData: {
          ...state.bioData,
          [payload.type]: {
            ...state.bioData[payload.type],
            [payload.name]: payload.value,
          },
        },
      };
    }

    case CHANGE_EDUCATIONAL_QUESTION_STATE: {
      return {
        ...state,
        bioData: {
          ...state.bioData,
          [payload.type]: {
            ...state.bioData[payload.type],
            [payload.subtype]: {
              ...state.bioData[payload.type][payload.subtype],
              [payload.name]: payload.value,
            },
          },
        },
      };
    }

    default:
      return state;
  }
};
