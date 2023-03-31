type IdentityType = {
  username: string;
  image: File | string;
  fatherName: string;
  motherName: string;
  phonePersonal: string;
  phoneEmer: string;
  blood: string;
  email: string;
  religion: string;
  nid: string;
};

type EducationDataType = {
  name: string;
  group: string;
  institution: string;
  board: string;
  cgpa: string;
  passingYear: string;
};

type EducationalType = {
  education1: EducationDataType;
  education2: EducationDataType;
};

type QuestionDataType = {
  Q1: string;
  Q2: string;
  Q3: string;
};

type QuestionType = {
  join: QuestionDataType;
  discribe: QuestionDataType;
  identify: QuestionDataType;
  idea: QuestionDataType;
};

export type StateType = {
  step: number;
  biodata: {
    identity: IdentityType;
    educational: EducationalType;
    question: QuestionType;
  };
};

export enum ActionTypeName {
  NEXT_BTN = "step/next-btn",
  PREV_BTN = "step/prev-btn",
  IDENTITY_STATE = "catagory/identity-state",
  EDUCATIONAL_STATE = "catagory/educational-state",
  QUESTION_STATE = "catagory/question-state",
}

export type ActionType = {
  type:
    | ActionTypeName.NEXT_BTN
    | ActionTypeName.PREV_BTN
    | ActionTypeName.EDUCATIONAL_STATE
    | ActionTypeName.QUESTION_STATE
    | ActionTypeName.IDENTITY_STATE;
  payload?: number | object;
};
