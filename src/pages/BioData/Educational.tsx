import { Button, InputField } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import { ActionTypeName, DynamicBioData } from "@/context/actionType";
import { ChangeEvent, SyntheticEvent, useEffect } from "react";

const type = "educational";

const Educational = () => {
  const { dispatchFieldValue, inputFieldState, dispatch } = useCatagroy();
  const { bioData } = inputFieldState || {};
  const { educational } = bioData || {};
  const { education1, education2 } = educational || {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>, subtype: string) => {
    const { name, value } = e.target;
    dispatchFieldValue({
      type: ActionTypeName.CHANGE_EDUCATIONAL_QUESTION_STATE,
      payload: { type, subtype, name, value },
    });
  };

  let data: DynamicBioData = {};
  let subData: DynamicBioData = {};

  const keys = ["education1", "education2"];
  const subKeys = [
    "name",
    "group",
    "institution",
    "board",
    "cgpa",
    "passingYear",
  ];

  subKeys.forEach((key) => {
    subData[key] = "";
  });

  keys.forEach((key) => {
    data[key] = educational ? educational[key] : subData;
  });

  useEffect(() => {
    dispatchFieldValue({
      type: ActionTypeName.GLOBAL_STATE,
      payload: { type, data },
    });
  }, [dispatchFieldValue]);

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-gray-700 pt-4">
        Last two(2) Educational Qualification
      </h1>
      <div>
        <div className="border-2 mx-auto my-5 grid-cs max-w-3xl p-2">
          <h1 className="grid-1">Education 1</h1>
          <InputField
            title="Exam"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education1")
            }
            name="name"
            value={education1?.name || ""}
            type="text"
            required
            error_message=""
            className=""
          />
          <InputField
            title="Subject/Group"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education1")
            }
            name="group"
            value={education1?.group || ""}
            required
            error_message=""
            className=""
          />
          <InputField
            title="Institution Name"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education1")
            }
            name="institution"
            value={education1?.institution || ""}
            required
            error_message=""
            className=""
          />
          <InputField
            title="University/Board"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education1")
            }
            name="board"
            value={education1?.board || ""}
            required
            error_message=""
            className=""
          />
          <InputField
            title="CGPA"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education1")
            }
            name="cgpa"
            value={education1?.cgpa || ""}
            required
            error_message=""
            className=""
          />
          <InputField
            title="Passing Year"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education1")
            }
            name="passingYear"
            value={education1?.passingYear || ""}
            required
            error_message=""
            className=""
          />
        </div>
        <div className="border-2 mx-auto my-5 grid-cs max-w-3xl p-2">
          <h1 className="grid-1">Education 2</h1>
          <InputField
            title="Exam"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education2")
            }
            name="name"
            value={education2?.name || ""}
            type="text"
            required
            error_message=""
            className=""
          />
          <InputField
            title="Subject/Group"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education2")
            }
            name="group"
            value={education2?.group || ""}
            required
            error_message=""
            className=""
          />
          <InputField
            title="Institution Name"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education2")
            }
            name="institution"
            value={education2?.institution || ""}
            required
            error_message=""
            className=""
          />
          <InputField
            title="University/Board"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education2")
            }
            name="board"
            value={education2?.board || ""}
            required
            error_message=""
            className=""
          />
          <InputField
            title="CGPA"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education2")
            }
            name="cgpa"
            value={education2?.cgpa || ""}
            required
            error_message=""
            className=""
          />
          <InputField
            title="Passing Year"
            type="number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education2")
            }
            name="passingYear"
            value={education2?.passingYear || ""}
            required
            error_message=""
            className=""
          />
        </div>
      </div>
      <div className="flex justify-center gap-3 mx-auto mt-3">
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
          title={"Next"}
          type="button"
          onClick={(e: SyntheticEvent) => {
            e.preventDefault();
          }}
        />
      </div>
    </>
  );
};

export default Educational;
