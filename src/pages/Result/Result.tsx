import { child, get, ref } from "firebase/database";
import html2pdf from "html-to-pdf-js";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { user } from "../../assets";
import { db } from "../../firebase/firebase";
import Button from "../Button";
import InputField from "../InputField";

const Result = () => {
  const [data, setData] = useState({});
  const [inputData, setInputData] = useState("");
  const { bio, education, question } = data;
  const [show, setShow] = useState(false);

  const divElement = useRef();
  const targetDiv = divElement?.current;

  const handleSubmit = (e) => {
    e.preventDefault();
    get(child(ref(db), "BioData/" + inputData))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          alert("no data found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(true);
  };

  const generatePdf = () => {
    const opt = {
      filename: `${inputData}.pdf`,
      html2canvas: { scale: 4 },
      jsPDF: { format: "a3", orientation: "portrait" },
    };
    html2pdf().set(opt).from(targetDiv).save();
  };

  return (
    <>
      <div className="w-[1024px] mx-auto  mb-10">
        <div>
          <InputField
            placeholder="Enter your Username"
            value={inputData}
            className="border-none h-10 mb-3"
            onChange={(e) => setInputData(e.target.value)}
          />
          <Button
            title="Get User Details"
            className="mb-4 mr-5"
            onClick={handleSubmit}
          />
          <Button title="Download Pdf" onClick={generatePdf} type="button" />
        </div>

        {show ? (
          <div
            ref={divElement}
            className=" mx-auto w-[1024px] bg-white mb-8 p-10"
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
                {bio?.username}
              </p>
              <div className="grid grid-cols-2">
                <div className="font-style">
                  <p>
                    <span className="font-semibold">Father's Name : </span>
                    {bio?.fName}
                  </p>
                  <p>
                    <span className="font-semibold"> Mother's Name : </span>
                    {bio?.mName}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Phone Number (Personal) :{" "}
                    </span>
                    {bio?.pnp}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Phone Number (Emergency) :{" "}
                    </span>
                    {bio?.pne}
                  </p>
                </div>
                <div className="font-style">
                  <p>
                    <span className="font-semibold">Email : </span>
                    {bio?.email}
                  </p>
                  <p>
                    <span className="font-semibold">Religion : </span>
                    {bio?.reli}
                  </p>
                  <p>
                    <span className="font-semibold">Blood Group : </span>
                    {bio?.bg}
                  </p>
                  <p>
                    <span className="font-semibold">NID : </span>
                    {bio?.nid}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <table className="w-full">
                <tbody>
                  <tr>
                    <th>Exam</th>
                    <th>Subject/Group</th>
                    <th>Institution Name</th>
                    <th>University/Board</th>
                    <th>CGPA</th>
                    <th>Year</th>
                  </tr>
                  <tr>
                    <td>{education?.exam.name1}</td>
                    <td>{education?.exam.group1}</td>
                    <td>{education?.exam.inName1}</td>
                    <td>{education?.exam.board1}</td>
                    <td>{education?.exam.cgpa1}</td>
                    <td>{education?.exam.year1}</td>
                  </tr>
                  <tr>
                    <td>{education?.exam.name2}</td>
                    <td>{education?.exam.group2}</td>
                    <td>{education?.exam.inName2}</td>
                    <td>{education?.exam.board2}</td>
                    <td>{education?.exam.cgpa2}</td>
                    <td>{education?.exam.year2}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid gap-3 grid-cols-2">
              <div>
                <h1 className="text-sm mb-3 font-bold">
                  👉 Why do you want to Join us?
                </h1>
                <div className="border-2 border-black px-3 py-2 ">
                  <p className="mb-2">
                    <span className="font-bold">1. </span>
                    {question?.fq1}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">2. </span>
                    {question?.fq2}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">3. </span>
                    {question?.fq3}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-sm mb-3 font-bold">
                  👉 Describe Blue Bird Club (BB-C) in 3 Sentence:
                </h1>
                <div className="border-2 border-black px-3 py-2 ">
                  <p className="mb-2">
                    <span className="font-bold">1. </span>
                    {question?.sq1}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">2. </span>
                    {question?.sq2}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">3. </span>
                    {question?.sq3}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-sm mb-3 font-bold">
                  👉 Identify 3 problems of modern society which need to be
                  fixed:
                </h1>
                <div className="border-2 border-black px-3 py-2 ">
                  <p className="mb-2">
                    <span className="font-bold">1. </span>
                    {question?.tq1}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">2. </span>
                    {question?.tq2}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">3. </span>
                    {question?.tq3}
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-sm mb-3 pr-3 font-bold">
                  👉 3 Ideas of social work which you want to do with BB-C:
                </h1>
                <div className="border-2 border-black px-3 py-2 ">
                  <p className="mb-2">
                    <span className="font-bold">1. </span>
                    {question?.frq1}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">2. </span>
                    {question?.frq2}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">3. </span>
                    {question?.frq3}
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
          <div>
            <p>No User Data founded</p>
          </div>
        )}

        <div>
          <Link to="/" className="bg-green-600 px-10 py-2 text-white text-lg">
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Result;
