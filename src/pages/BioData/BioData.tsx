import { useCatagroy } from "@/context/CatagoryContext";
import { SyntheticEvent } from "react";

import Educational from "./Educational";
import Identity from "./Identity";
import Question from "./Question";
import SubmitData from "./SubmitData";

export default function BioData() {
  const steps = [<Identity />, <Educational />, <Question />, <SubmitData />];

  const { state } = useCatagroy();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="py-10">
      <form onSubmit={handleSubmit}>{steps[state.step]}</form>
    </div>
  );
}
