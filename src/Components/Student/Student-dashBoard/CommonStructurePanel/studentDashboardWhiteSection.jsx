import React from "react";

const studentDashboardWhiteSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 w-[1126px] h-[928px]   rounded-3xl ml-6 text-black">
        <div className="flex gap-40  h-[147px] m-auto">
          <div className=" w-[504px] m-auto flex flex-col ">
            <div className="pr-2 flex gap-1">
              <div className="f5">سلام پارسا ، روزت بخیر</div>
              <div className="">
                <img src="src/assets/StudentImg/👋.png" className="" />
              </div>
              <div className="p f1">امیدوارم امروز روز خوبی رو داشته باشید</div>
            </div>
            <div className="flex  gap-14 mt-3">
              <div className="flex gap-1 ">
                <img
                  src="src/assets/StudentImg/Group 114.png"
                  className="w-[40px] h-[40px]"
                />
                <img
                  src="src/assets/StudentImg/Frame 120.png"
                  className="w-[38px] h-[43px]"
                />
              </div>
              <div className="flex gap-1 ">
                <img
                  src="src/assets/StudentImg/Group 113.png"
                  className="w-[40px] h-[40px]"
                />
                <img
                  src="src/assets/StudentImg/Frame 119.png"
                  className="w-[126px] h-[43px]"
                />
              </div>
            </div>
          </div>
          <div className=" w-[424px] m-auto text-right text-pretty pr-2">
            سلام ، من پارسام<br></br>
             اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون بیایید منو
            بشناسید حال ندارم بخدا خستم
          </div>
        </div>
        <div className="flex gap-6 justify-center border border-black h-[246px]">
          <div className=" border border-black w-[801px] rounded-3xl">
            <div className="flex justify-between p-4 ">
              <div className="">دوره من</div>
              <div className="flex gap-1 cursor-pointer">
                <p className="text-blue-400 ">مشاهده بیشتر</p>
                <img
                  src="src/assets/StudentImg/arrow-left-01.png"
                  className=""
                />
              </div>
            </div>
            <div className="mx-auto w-[749px] h-[64px]  rounded-3xl flex justify-around  bg-slate-100">
              <p className="m-auto">#</p>
              <p className="m-auto">نام</p>
              <p className="m-auto">مدرس</p>
              <p className="m-auto">تاریخ برگزاری</p>
              <p className="m-auto">سطح</p>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className=" border border-black w-[253px] rounded-3xl">
            چپ وسط
          </div>
        </div>
        <div className="flex gap-1 border border-black h-[733px]">
          3<div className=" border border-black">راست پایین</div>
          <div className=" border border-black">چپ پایین</div>
        </div>
      </div>
    </div>
  );
};

export default studentDashboardWhiteSection;
