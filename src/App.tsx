import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

import BioData from "./pages/BioData/BioData";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/form" element={<BioData />} />
      </Routes>
    </div>
  );
}

export default App;
