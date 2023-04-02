import { useCatagroy } from "@/context/CatagoryContext";

const SubmitData = () => {
  const { dispatch } = useCatagroy();

  return (
    <>
      <div className="mx-auto pt-5 max-w-sm p-2">
        <h1 className="text-center text-4xl font-bold text-gray-700 pt-10">
          Are you Sure to Submit Data
        </h1>
      </div>
    </>
  );
};

export default SubmitData;
