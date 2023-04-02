import { SyntheticEvent } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "./components";
import { useCatagroy } from "./context/CatagoryContext";
import { ActionTypeName } from "./context/actionType";
import Educational from "./pages/BioData/Educational";
import Identity from "./pages/BioData/Identity";
import Question from "./pages/BioData/Question";
import SubmitData from "./pages/BioData/SubmitData";
import Login from "./pages/Login/Login";

function App() {
  const steps = [<Identity />, <Educational />, <Question />, <SubmitData />];
  const { state, dispatch, inputFieldState } = useCatagroy();
  const isFirst = state.step === 0;
  const isLast = state.step === steps.length - 1;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route
          path="/form"
          element={
            <div className="py-10">
              <form onSubmit={handleSubmit}>{steps[state.step]}</form>
              <div className="flex justify-center gap-3 mx-auto mt-3">
                {isFirst && (
                  <Link to="/">
                    <Button title="Logout" type="button" />
                  </Link>
                )}
                <Button
                  title="Prev"
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: ActionTypeName.PREV_BTN,
                    });
                  }}
                />
                <Button
                  title={isLast ? "Generate" : "Next"}
                  type="button"
                  onClick={() => {
                    if (isLast)
                      return dispatch({ type: ActionTypeName.TOGGLE });
                    dispatch({
                      type: ActionTypeName.NEXT_BTN,
                    });
                  }}
                />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
