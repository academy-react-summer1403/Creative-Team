import React from "react";

const index = () => {
  return (
    <>
      <section className="flex flex-row mobile:justify-between my-8 h-4/5  justify-start ">
        <div className=" flex flex-col items-center cursor-pointer">
          <img
            className="w-20 h-20 cursor-pointer"
            src="\imgLand\Rectangle-4.svg"
          ></img>
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <img
            className="w-20 h-20 cursor-pointer"
            src="\imgLand\Rectangle-5.svg"
          ></img>
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center cursor-pointer ">
          <img
            className="w-20 h-20 cursor-pointer"
            src="\imgLand\Rectangle.png"
          ></img>
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
        </div>
        <div className=" flex flex-col items-center cursor-pointer">
          <img
            className="w-20 h-20 cursor-pointer"
            src="\imgLand\Rectangle-6.svg"
          ></img>
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
        </div>
        <div className=" flex flex-col items-center cursor-pointer ">
          <img
            className="w-20 h-20 cursor-pointer"
            src="\imgLand\Rectangle-7.svg"
          ></img>
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full hover:border-blue-400"></div>
        </div>
      </section>
    </>
  );
};

export default index;
