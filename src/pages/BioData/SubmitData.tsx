import { Button } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import { ActionTypeName } from "@/context/actionType";

const SubmitData = () => {
  const { dispatch } = useCatagroy();

  return (
    <>
      <div className="bg-slate-100 mx-auto pt-5 max-w-sm p-2">
        <h1 className="text-center text-4xl font-bold text-gray-700 pt-10">
          Are you Sure to Submit Data
        </h1>
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
        <Button className="" title="Submit" type="submit" onClick={() => {}} />
      </div>
    </>
  );
};

export default SubmitData;
