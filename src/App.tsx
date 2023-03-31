import { SyntheticEvent } from "react";
import { Route, Routes } from "react-router-dom";
import { useCatagroy } from "./context/CatagoryContext";
import Educational from "./pages/BioData/Educational";
import Identity from "./pages/BioData/Identity";
import Question from "./pages/BioData/Question";
import SubmitData from "./pages/BioData/SubmitData";
import Login from "./pages/Login/Login";

function App() {
  const steps = [<Identity />, <Educational />, <Question />, <SubmitData />];

  const { state } = useCatagroy();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route
          path="/form"
          element={<form onSubmit={handleSubmit}>{steps[state.step]}</form>}
        />
        {/* <Route path="/result" element={<Result />} /> */}
      </Routes>
    </div>
  );
}

export default App;
