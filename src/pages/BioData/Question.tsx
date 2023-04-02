import { TextArea } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import { ActionTypeName, DynamicBioData } from "@/context/actionType";
import { ChangeEvent, useEffect } from "react";

const type = "question";

const Question = () => {
  const { dispatchFieldValue, inputFieldState } = useCatagroy();
  const { bioData } = inputFieldState || {};
  const { join, discribe, identify, ideas } = bioData?.question || {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>, subtype: string) => {
    const { name, value } = e.target;
    dispatchFieldValue({
      type: ActionTypeName.CHANGE_EDUCATIONAL_QUESTION_STATE,
      payload: { type, subtype, name, value },
    });
  };

  let data: DynamicBioData = {};

  const keys = ["join", "discribe", "identify", "ideas"];

  keys.forEach((key) => {
    data[key] = bioData?.question
      ? bioData?.question[key]
      : {
          Q1: "",
          Q2: "",
          Q3: "",
        };
  });

  useEffect(() => {
    dispatchFieldValue({
      type: ActionTypeName.GLOBAL_STATE,
      payload: { type, data },
    });
  }, [dispatchFieldValue]);

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
            value={join?.Q1}
            className=""
            no="1."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "join")
            }
            name="Q2"
            value={join?.Q2}
            className=""
            no="2."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "join")
            }
            name="Q3"
            value={join?.Q3}
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
            value={discribe?.Q1}
            className=""
            no="1."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "discribe")
            }
            name="Q2"
            value={discribe?.Q2}
            className=""
            no="2."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "discribe")
            }
            name="Q3"
            value={discribe?.Q3}
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
            value={identify?.Q1}
            className=""
            no="1."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "identify")
            }
            name="Q2"
            value={identify?.Q2}
            className=""
            no="2."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "identify")
            }
            name="Q3"
            value={identify?.Q3}
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
              handleChange(e, "ideas")
            }
            name="Q1"
            value={ideas?.Q1}
            className=""
            no="1."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "ideas")
            }
            name="Q2"
            value={ideas?.Q2}
            className=""
            no="2."
          />
          <TextArea
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "ideas")
            }
            name="Q3"
            value={ideas?.Q3}
            className=""
            no="3."
          />
        </div>
      </div>
    </>
  );
};

export default Question;
