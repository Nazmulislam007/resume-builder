import { Button, InputField } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import { ActionTypeName } from "@/context/actionType";
import { ChangeEvent, useEffect, useState } from "react";

const Identity = () => {
  const { state, dispatch } = useCatagroy();
  const { biodata } = state || {};

  const [identity, setIdentity] = useState({
    username: "",
    image: "" as File | string,
    fatherName: "",
    motherName: "",
    phonePersonal: "",
    phoneEmer: "",
    blood: "",
    email: "",
    religion: "",
    nid: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIdentity({ ...identity, [name]: value });
  };

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)
      setIdentity({
        ...identity,
        image: e.target.files[0],
      });
  };

  useEffect(() => {
    if (biodata?.identity)
      Object.entries(biodata.identity).forEach(([key, value]) => {
        setIdentity({ ...biodata.identity, [key]: value });
      });
  }, [biodata?.identity]);

  const handleClick = () => {
    dispatch({
      type: ActionTypeName.NEXT_BTN,
    });
    dispatch({
      type: ActionTypeName.IDENTITY_STATE,
      payload: identity,
    });
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold pt-10">Blue Bird Club</h1>
      <div className="bg-slate-100 mx-auto my-5 grid-cs max-w-3xl p-2">
        <InputField
          title="Applicant Name"
          onChange={handleChange}
          name="username"
          value={identity.username}
          type="text"
          required
          error_message=""
          className=""
        />
        <InputField
          className="custom-file-input"
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
          value={identity.fatherName}
          required
          error_message=""
          className=""
        />
        <InputField
          title="Mother's Name"
          type="text"
          onChange={handleChange}
          name="motherName"
          value={identity.motherName}
          required
          error_message=""
          className=""
        />
        <InputField
          title="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={identity.email}
          required
          error_message=""
          className=""
        />

        <InputField
          title="Phone Number (Personal)"
          type="number"
          onChange={handleChange}
          name="phonePersonal"
          value={identity.phonePersonal}
          required
          error_message=""
          className=""
        />

        <InputField
          title="Phone Number (Emergency)"
          type="number"
          onChange={handleChange}
          name="phoneEmer"
          value={identity.phoneEmer}
          required
          error_message=""
          className=""
        />
        <InputField
          title="Religion"
          type="text"
          onChange={handleChange}
          name="religion"
          value={identity.religion}
          required
          error_message=""
          className=""
        />
        <InputField
          title="Blood Group"
          type="text"
          onChange={handleChange}
          name="blood"
          value={identity.blood}
          error_message=""
          className=""
        />
        <InputField
          title="NID/Birth Registration Number"
          type="number"
          onChange={handleChange}
          name="nid"
          value={identity.nid}
          required
          error_message=""
          className=""
        />
      </div>
      <div className="flex justify-center gap-3 mx-auto mt-3">
        <Button className="" title="Log out" type="button" onClick={() => {}} />
        <Button title="Next" type="button" className="" onClick={handleClick} />
      </div>
    </>
  );
};

export default Identity;
