import React from "react";

const index = () => {
  return (
    <>
      <div className="hidden mobile:block w-[700px] rounded-3xl bg-gray-100 my-4">
        <div className=" flex flex-row justify-end gap-2 my-3 mr-4">
          <img className="" src="/imgRegister/Untitled-1 3.svg" />
          <img className="" src="/imgRegister/Untitled-1 4.svg" />
        </div>
        <div className=" flex flex-col gap-3 items-end mr-4 my-24">
          <h2 className="font-bold text-2xl text-right">شروع یک ماجراجویی</h2>
          <p className="text-sm text-right">
            هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
          </p>
        </div>
        <div>
          <img
            className="mt-64 mb-20 mx-auto size-60"
            src="\imgRegister\3d-hygge-top-view-of-laptop-glasses-cup-of-coffee-headphones-1 1.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export default index;
