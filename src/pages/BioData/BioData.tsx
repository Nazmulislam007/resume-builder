import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import { ActionTypeName } from "@/context/actionType";
import { number, object, string } from "yup";
import Educational from "./Educational";
import Identity from "./Identity";
import Question from "./Question";
import SubmitData from "./SubmitData";

type ErrorType = { [key: string]: string };

let userSchema = object({
  username: string().required(),
  image: string(),
  fatherName: string().required(),
  motherName: string().required(),
  phonePersonal: number().required(),
  phoneEmer: number().required(),
  blood: string().required(),
  email: string().email(),
  nid: number().required(),
  religion: string().required(),
});

export default function BioData() {
  const [errors, setErrors] = useState<ErrorType>({});
  const steps = [<Identity />, <Educational />, <Question />, <SubmitData />];
  const { state, dispatch, inputFieldState } = useCatagroy();
  const isFirst = state.step === 0;
  const isLast = state.step === steps.length - 1;

  function validation() {
    userSchema
      .validate(inputFieldState.bioData.identity, { abortEarly: false })
      .then(() => {})
      .catch((err) => {
        const newErrors: ErrorType = {};
        err.inner.forEach((error: any) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
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
          type="submit"
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            dispatch({
              type: ActionTypeName.PREV_BTN,
            });
          }}
        />
        <Button
          title={isLast ? "Generate" : "Next"}
          type="submit"
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
            validation();
            console.log(errors);
            if (errors) return;
            if (isLast) return dispatch({ type: ActionTypeName.TOGGLE });
            dispatch({
              type: ActionTypeName.NEXT_BTN,
            });
          }}
        />
      </div>
    </div>
  );
}
