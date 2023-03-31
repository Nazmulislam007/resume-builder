import { Button, TextArea } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import { ActionTypeName } from "@/context/actionType";
import { ChangeEvent, useEffect, useState } from "react";

const Question = () => {
  const { dispatch, state } = useCatagroy();
  const { biodata } = state;

  const [question, setQuestion] = useState({
    join: {
      Q1: "",
      Q2: "",
      Q3: "",
    },
    discribe: {
      Q1: "",
      Q2: "",
      Q3: "",
    },
    identify: {
      Q1: "",
      Q2: "",
      Q3: "",
    },
    idea: {
      Q1: "",
      Q2: "",
      Q3: "",
    },
  });

  const { join, discribe, identify, idea } = question;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, parent: string) => {
    const { name, value } = e.target;
    setQuestion({
      ...question,
      [parent as keyof typeof question]: {
        ...question[parent as keyof typeof question],
        [name]: value,
      },
    });
  };

  useEffect(() => {
    if (biodata.question)
      Object.entries(biodata.question).forEach(([key, value]) => {
        setQuestion({
          ...biodata.question,
          [key]: value,
        });
      });
  }, [biodata.question]);

  const handleClick = () => {
    dispatch({
      type: ActionTypeName.NEXT_BTN,
    });
    dispatch({
      type: ActionTypeName.QUESTION_STATE,
      payload: question,
    });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center pt-7">
          Answer The Questions
        </h1>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">👉 Why do you want to Join us?</h1>
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "join")
            }
            name="Q1"
            value={join.Q1}
            className=""
            no="1."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "join")
            }
            name="Q2"
            value={join.Q2}
            className=""
            no="2."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "join")
            }
            name="Q3"
            value={join.Q3}
            className=""
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 Describe Blue Bird Club (BB-C) in 3 Sentence:
          </h1>
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "discribe")
            }
            name="Q1"
            value={discribe.Q1}
            className=""
            no="1."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "discribe")
            }
            name="Q2"
            value={discribe.Q2}
            className=""
            no="2."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "discribe")
            }
            name="Q3"
            value={discribe.Q3}
            className=""
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 Identify 3 problems of modern society which need to be fixed:
          </h1>
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "identify")
            }
            name="Q1"
            value={identify.Q1}
            className=""
            no="1."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "identify")
            }
            name="Q2"
            value={identify.Q2}
            className=""
            no="2."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "identify")
            }
            name="Q3"
            value={identify.Q3}
            className=""
            no="3."
          />
        </div>
        <div className="mx-auto py-5 max-w-2xl p-2">
          <h1 className="text-lg mb-3">
            👉 3 Ideas of social work which you want to do with BB-C:
          </h1>
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "idea")
            }
            name="Q1"
            value={idea.Q1}
            className=""
            no="1."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "idea")
            }
            name="Q2"
            value={idea.Q2}
            className=""
            no="2."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "idea")
            }
            name="Q3"
            value={idea.Q3}
            className=""
            no="3."
          />
        </div>
      </div>
      <div className="flex justify-center gap-3 mx-auto mt-3">
        <Button
          className=""
          title="Prev"
          type="button"
          onClick={() => {
            dispatch({
              type: ActionTypeName.PREV_BTN,
            });
          }}
        />
        <Button className="" title="Next" type="button" onClick={handleClick} />
      </div>
    </>
  );
};

export default Question;
