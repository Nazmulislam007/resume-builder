import { Button, InputField } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import { ActionTypeName } from "@/context/actionType";
import { ChangeEvent, useEffect, useState } from "react";

const Educational = () => {
  const { dispatch, state } = useCatagroy();
  const { biodata } = state;

  const [educationalData, setEducationalData] = useState({
    education1: {
      name: "",
      group: "",
      institution: "",
      board: "",
      cgpa: "",
      passingYear: "",
    },
    education2: {
      name: "",
      group: "",
      institution: "",
      board: "",
      cgpa: "",
      passingYear: "",
    },
  });

  const { education1, education2 } = educationalData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, parent: string) => {
    const { name, value } = e.target;

    setEducationalData({
      ...educationalData,
      [parent as keyof typeof educationalData]: {
        ...educationalData[parent as keyof typeof educationalData],
        [name]: value,
      },
    });
  };

  useEffect(() => {
    if (biodata.educational)
      Object.entries(biodata.educational).forEach(([key, value]) => {
        setEducationalData({
          ...biodata.educational,
          [key]: value,
        });
      });
  }, [biodata.question]);

  const handleClick = () => {
    dispatch({
      type: ActionTypeName.NEXT_BTN,
    });
    dispatch({
      type: ActionTypeName.EDUCATIONAL_STATE,
      payload: educationalData,
    });
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-gray-700 pt-10">
        Last two(2) Educational Qualification
      </h1>
      <div>
        <div className="bg-slate-100 border-2 mx-auto my-5 grid-cs max-w-3xl p-2">
          <h1 className="grid-1">Education 1</h1>
          <InputField
            title="Exam"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education1")
            }
            name="name"
            value={education1.name}
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
            value={education1.group}
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
            value={education1.institution}
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
            value={education1.board}
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
            value={education1.cgpa}
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
            value={education1.passingYear}
            required
            error_message=""
            className=""
          />
        </div>
        <div className="bg-slate-100 border-2 mx-auto my-5 grid-cs max-w-3xl p-2">
          <h1 className="grid-1">Education 2</h1>
          <InputField
            title="Exam"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(e, "education2")
            }
            name="name"
            value={education2.name}
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
            value={education2.group}
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
            value={education2.institution}
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
            value={education2.board}
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
            value={education2.cgpa}
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
            value={education2.passingYear}
            required
            error_message=""
            className=""
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

export default Educational;
