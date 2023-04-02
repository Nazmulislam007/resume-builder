import { InputField } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import { ActionTypeName, DynamicBioData } from "@/context/actionType";
import { ChangeEvent, useEffect } from "react";

const type = "identity";

const Identity = () => {
  const { inputFieldState, dispatchFieldValue } = useCatagroy();
  const { bioData } = inputFieldState || {};
  const { identity } = bioData || {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatchFieldValue({
      type: ActionTypeName.CHANGE_IDENTITY_STATE,
      payload: { type, name, value },
    });
  };

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      dispatchFieldValue({
        type: ActionTypeName.CHANGE_IDENTITY_STATE,
        payload: { name, value: files[0] },
      });
    }
  };

  const fields = [
    "username",
    "image",
    "fatherName",
    "motherName",
    "phonePersonal",
    "phoneEmer",
    "blood",
    "email",
    "religion",
    "nid",
  ];

  let data: DynamicBioData = {};

  fields.forEach((key) => {
    data[key] = identity ? identity[key] : "";
  });

  useEffect(() => {
    dispatchFieldValue({
      type: ActionTypeName.GLOBAL_STATE,
      payload: {
        type,
        data,
      },
    });
  }, [dispatchFieldValue]);

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Blue Bird Club</h1>
      <div className="mx-auto my-5 grid-cs max-w-3xl p-2">
        <InputField
          title="Applicant Name"
          onChange={handleChange}
          name="username"
          value={identity?.username || ""}
          type="text"
          error_message=""
        />
        <InputField
          className="custom-file-input block w-full text-sm text-gray-900 border border-purple-500 cursor-pointer focus:outline-purple-500"
          onChange={handleImgChange}
          type="file"
          name="image"
          accept="image/*"
          error_message=""
          title="Image"
        />
        <InputField
          title="Father's Name"
          type="text"
          onChange={handleChange}
          name="fatherName"
          value={identity?.fatherName || ""}
          error_message=""
        />
        <InputField
          title="Mother's Name"
          type="text"
          onChange={handleChange}
          name="motherName"
          value={identity?.motherName || ""}
          error_message=""
        />
        <InputField
          title="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={identity?.email || ""}
          error_message=""
        />

        <InputField
          title="Phone Number (Personal)"
          type="number"
          onChange={handleChange}
          name="phonePersonal"
          value={identity?.phonePersonal || ""}
          error_message=""
        />

        <InputField
          title="Phone Number (Emergency)"
          type="number"
          onChange={handleChange}
          name="phoneEmer"
          value={identity?.phoneEmer || ""}
          error_message=""
        />
        <InputField
          title="Religion"
          type="text"
          onChange={handleChange}
          name="religion"
          value={identity?.religion || ""}
          error_message=""
        />
        <InputField
          title="Blood Group"
          type="text"
          onChange={handleChange}
          name="blood"
          value={identity?.blood || ""}
          error_message=""
        />
        <InputField
          title="NID/Birth Registration Number"
          type="number"
          onChange={handleChange}
          name="nid"
          value={identity?.nid || ""}
          error_message=""
        />
      </div>
    </>
  );
};

export default Identity;
