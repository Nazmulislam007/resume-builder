import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
    navigate("/form", { replace: true });
  };

  return (
    <div className="max-w-[320px] w-full -mt-12">
      <h1 className="text-center text-4xl font-bold text-gray-700">
        Login Form
      </h1>
      <div className="p-2">
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
        <Button title="Login" className="w-[100px]" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
