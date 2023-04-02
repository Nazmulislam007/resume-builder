import { InputField } from "@/components";
import Result from "./Result";

const SubmitData = () => {
  return (
    <>
      <div className="mx-auto pt-5 max-w-sm p-2">
        <h1 className="text-center text-4xl font-bold text-gray-700 pt-10">
          Are you Sure to Submit Data
        </h1>
        <div>
          <InputField
            placeholder="Enter your Username"
            className="border-none h-10 mb-3"
            error_message=""
            title="Username"
          />
        </div>
      </div>

      <Result />
    </>
  );
};

export default SubmitData;
