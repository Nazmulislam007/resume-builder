import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { ActionType, InputStateType, StateType } from "./actionType";
import { reducer, stateReducer } from "./reducer";

export const initialState: StateType = {
  step: 3,
  generate: false,
};

export const inputInitalState: InputStateType = {
  bioData: {},
};

export type ContextType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
  inputFieldState: InputStateType;
  dispatchFieldValue: Dispatch<ActionType>;
};

const CreateCatagroy = createContext<ContextType>({
  state: initialState,
  inputFieldState: inputInitalState,
  dispatchFieldValue: () => {},
  dispatch: () => {},
});

export const useCatagroy = () => {
  return useContext(CreateCatagroy);
};

type CatagoryContextProps = {
  children: ReactNode;
};

const CatagoryContext = ({ children }: CatagoryContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputFieldState, dispatchFieldValue] = useReducer(
    stateReducer,
    inputInitalState
  );

  const value = useMemo(
    () => ({
      state,
      dispatch,
      inputFieldState,
      dispatchFieldValue,
    }),
    [state, inputFieldState]
  );

  return (
    <CreateCatagroy.Provider value={value}>{children}</CreateCatagroy.Provider>
  );
};

export default CatagoryContext;
