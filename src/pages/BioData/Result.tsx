import { Button } from "@/components";
import { useCatagroy } from "@/context/CatagoryContext";
import jsPDF from "jspdf";
import { useRef } from "react";
import { user } from "../../assets";

const Result = () => {
  const pdfViewRef = useRef<HTMLDivElement>(null);
  const { state, inputFieldState } = useCatagroy();
  const { bioData } = inputFieldState;
  const { identity, educational, question } = bioData;

  const handleGenerate = () => {
    const input = pdfViewRef.current;
    const pdf = new jsPDF({
      orientation: "p",
      unit: "px",
      format: [1024, 1024],
      putOnlyUsedFonts: true,
      floatPrecision: 16,
    });

    pdf.html(input as HTMLDivElement, {
      callback: function (doc) {
        doc.save();
      },
    });
  };

  return (
    <>
      <div className="w-[1024px] mx-auto  mb-10">
        {state.generate ? (
          <div
            ref={pdfViewRef}
            className="mx-auto w-[1024px] bg-white mb-8 p-10"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-20 h-20 logo-style ">
                <h1 className="text-[2.5rem] font-bold text-center font">B</h1>
              </div>
              <div>
                <h1 className="text-3xl mb-2 font-bold">Blue Bird Club</h1>
                <p className="text-center">Est. in 2012</p>
              </div>
              <div>
                <img src={user} width="133" height="133" alt="user" />
              </div>
            </div>
            <div className="mb-8 font-style">
              <p className="capitalize">
                <span className="font-extrabold">Applicant Name : </span>
                {identity?.username}
              </p>
              <div className="grid grid-cols-2">
                <div className="font-style">
                  <p>
                    <span className="font-semibold">Father's Name : </span>
                    {identity?.fatherName}
                  </p>
                  <p>
                    <span className="font-semibold"> Mother's Name : </span>
                    {identity?.motherName}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Phone Number (Personal) :{" "}
                    </span>
                    {identity?.phonePersonal}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Phone Number (Emergency) :{" "}
                    </span>
                    {identity?.phoneEmer}
                  </p>
                </div>
                <div className="font-style">
                  <p>
                    <span className="font-semibold">Email : </span>
                    {identity?.email}
                  </p>
                  <p>
                    <span className="font-semibold">Religion : </span>
                    {identity?.religion}
                  </p>
                  <p>
                    <span className="font-semibold">Blood Group : </span>
                    {identity?.blood}
                  </p>
                  <p>
                    <span className="font-semibold">NID : </span>
                    {identity?.nid}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <table className="w-full">
                <tbody>
                  <tr>
                    <th>Exam</th>
                    <th>Subject&#160;&#160;/&#160;Group</th>
                    <th>Institution Name</th>
                    <th>University&#160;/&#160;Board</th>
                    <th>CGPA</th>
                    <th>Year</th>
                  </tr>
                  <tr>
                    <td>{educational?.education1.name}</td>
                    <td>{educational?.education1.group}</td>
                    <td>{educational?.education1.institution}</td>
                    <td>{educational?.education1.board}</td>
                    <td>{educational?.education1.cgpa}</td>
                    <td>{educational?.education1.passingYear}</td>
                  </tr>
                  <tr>
                    <td>{educational?.education2.name}</td>
                    <td>{educational?.education2.group}</td>
                    <td>{educational?.education2.institution}</td>
                    <td>{educational?.education2.board}</td>
                    <td>{educational?.education2.cgpa}</td>
                    <td>{educational?.education2.passingYear}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid gap-3 grid-cols-2">
              <div>
                <h1 className="text-sm mb-3 font-bold">
                  &#128073; Why do you want to Join us?
                </h1>
                <div className="border-2 border-black px-3 py-2 ">
                  <p className="mb-2">
                    <span className="font-bold">1. </span>
                    {question?.join.Q1}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">2. </span>
                    {question?.join.Q2}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">3. </span>
                    {question?.join.Q3}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-sm mb-3 font-bold">
                  &#128073; Describe Blue Bird Club (BB-C) in 3 Sentence:
                </h1>
                <div className="border-2 border-black px-3 py-2 ">
                  <p className="mb-2">
                    <span className="font-bold">1. </span>
                    {question?.discribe.Q1}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">2. </span>
                    {question?.discribe.Q2}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">3. </span>
                    {question?.discribe.Q3}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-sm mb-3 font-bold">
                  &#128073; Identify 3 problems of modern society which need to
                  be fixed:
                </h1>
                <div className="border-2 border-black px-3 py-2 ">
                  <p className="mb-2">
                    <span className="font-bold">1. </span>
                    {question?.identify.Q1}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">2. </span>
                    {question?.identify.Q2}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">3. </span>
                    {question?.identify.Q3}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-sm mb-3 pr-3 font-bold">
                  &#128073; 3 Ideas of social work which you want to do with
                  BB-C:
                </h1>
                <div className="border-2 border-black px-3 py-2 ">
                  <p className="mb-2">
                    <span className="font-bold">1. </span>
                    {question?.ideas.Q1}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">2. </span>
                    {question?.ideas.Q2}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">3. </span>
                    {question?.ideas.Q3}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-9">
              <p className="tracking-normal word-spacing">
                I here by declare that the all information given above is true
                to the best of my knowledge and belief. I'm willingly joining
                Blue Bird Club (BB-C), for social work. I'll be aware of my
                duties and rules in this organization. If i do anything against
                the rules of Blue Bird Club (BB-C), necessary steps can be taken
                against me.
              </p>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full">
            <p className="text-center">No User Data founded</p>
          </div>
        )}
        <Button title="Download" onClick={handleGenerate}></Button>
      </div>
    </>
  );
};

export default Result;
