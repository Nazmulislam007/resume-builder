import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { ActionType, StateType } from "./actionType";
import { reducer } from "./reducer";

export const initialState: StateType = {
  step: 0,
};

export type ContextType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

const CreateCatagroy = createContext<ContextType>({
  state: initialState,
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

  const value = useMemo(
    () => ({
      state,
      isFirst: state.step === 0,
      isLast: state.step === 3,
      dispatch,
    }),
    [state]
  );

  return (
    <CreateCatagroy.Provider value={value}>{children}</CreateCatagroy.Provider>
  );
};

export default CatagoryContext;
