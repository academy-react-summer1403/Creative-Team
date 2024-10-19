import React from "react";

const StudentDashboard = () => {
  return (
    <div className="w-[1440px] h-[1024px] bg-black text-white flex flex-col">
      <div className=" h-[72px] border border-white">1</div>
      <div className="flex border h-[940px] border-white">
        <div className="border border-white w-[330px]">2</div>
        <div className="border border-white w-[1126px] h-[928px] bg-white rounded-3xl mr-72">
          3
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
