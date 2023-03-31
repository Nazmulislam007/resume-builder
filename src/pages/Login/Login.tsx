import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { ChangeEvent, SyntheticEvent, useState } from "react";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-gray-700 pt-10">
        Login Form
      </h1>
      <div className="bg-slate-100 mx-auto pt-5 max-w-sm p-2">
        <InputField
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={inputValue.email}
          error_message=""
          className=""
          title=""
        />
        <InputField
          onChange={handleChange}
          placeholder="Enter Your Password"
          type="password"
          name="password"
          value={inputValue.password}
          className="mt-2"
          error_message=""
          title=""
        />
      </div>
      <div className="grid mt-3 place-items-center">
        <Button title="Login" className="" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Login;
