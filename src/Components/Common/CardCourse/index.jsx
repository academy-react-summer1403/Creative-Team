import React from "react";
import { useNavigate } from "react-router-dom";
const index = ({
  title,
  tumbImageAddress,
  teacherName,
  levelName,
  statusName,
  cost,
  courseId,
  onHandleDetail,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="  flex flex-col p-0 justify-center mobile:w-[300px] w-11/12 mobile:h-[400px] bg-slate-100 rounded-3xl dark:bg-slate-200 dark:rounded-3xl cursor-pointer"
        onClick={onHandleDetail}
      >
        <div className="  flex flex-row-reverse gap-2 mr-4">
          <span className="bg-pink-400 rounded-2xl w-[100px] py-1 text-white text-xs text-center  ">
            {levelName}
          </span>
          <span className="bg-blue-300 rounded-2xl w-[100px] py-1 text-white text-xs text-center ">
            {statusName}
          </span>
        </div>
        <div
          className=" h-60 w-full mx-auto flex justify-center items-center mb-4 rounded-2xl"
          onClick={() => navigate("/coursedetail/" + courseId)}
        >
          <img
            className=" h-1/4 rounded-3xl  flex flex-row"
            src={tumbImageAddress}
          ></img>
        </div>

        <div className=" flex flex-col gap-3 w-5/6 mx-auto">
          <h3 className=" not-italic mobile:font-bold font-semibold mobile:text-xl text-sm mobile:leading-9 leading-6 text-right text-black">
            {title}
          </h3>
          <div className="flex justify-center gap-8 mt-4 mb-2  text-gray-500 space-x-2">
            <div className="  flex flex-nowrap gap-1">
              <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                تومان
              </span>
              <span className="mobile:text-base text-xs">{cost}</span>
            </div>
            <span className="  w-[140px] font-serif font-normal text-sm text-gray-700 text-right text-nowrap">
              {teacherName}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
