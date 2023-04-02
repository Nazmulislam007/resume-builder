export type DynamicBioData = {
  [key: string]: any;
};

export type StateType = {
  step: number;
};

export type InputStateType = {
  bioData: {
    [key: string]: DynamicBioData;
  };
};

export enum ActionTypeName {
  NEXT_BTN = "step/next-btn",
  PREV_BTN = "step/prev-btn",
  GLOBAL_STATE = "catagory/global-state",
  CHANGE_IDENTITY_STATE = "catagory/changing-identity-state",
  CHANGE_EDUCATIONAL_QUESTION_STATE = "catagory/changing-educational-question-state",
}

export type ActionType = {
  type:
    | ActionTypeName.NEXT_BTN
    | ActionTypeName.PREV_BTN
    | ActionTypeName.CHANGE_EDUCATIONAL_QUESTION_STATE
    | ActionTypeName.GLOBAL_STATE
    | ActionTypeName.CHANGE_IDENTITY_STATE;
  payload?: any;
};
