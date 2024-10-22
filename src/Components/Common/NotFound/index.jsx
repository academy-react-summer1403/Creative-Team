import React from "react";

const index = () => {
  return (
    <>
      <div className="mobile:w-[350px] w-[250px] h-[200px] bg-gray-300 rounded-3xl mx-auto my-44 flex flex-col items-center gap-4">
        <div className="font-bold text-3xl text-center text-red-500 mt-8">
          <b>404</b>{" "}
        </div>
        <div className="font-medium text-sm text-gray-900 ">
          {" "}
          Page Not Found
        </div>
        <button className="bg-gray-400 rounded-2xl p-3 text-red-400 font-bold">
          {" "}
          Home Page
        </button>
      </div>
    </>
  );
};

export default index;
