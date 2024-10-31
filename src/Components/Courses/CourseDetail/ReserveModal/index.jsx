import React from "react";

const index = () => {
  return (
    <>
      <section className="mobile:w-[430px] w-[393px] border border-gray-400 rounded-2xl mx-auto flex flex-col justify-items-center gap-6">
        <div className="text-center text-blue-500 font-bold mt-5">
          <h1>!دوره به لیست دوره های رزرو شده شما اضافه شد</h1>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <div className="w-[250px]">
            <p className="mt-20 text-center font-serif text-lg">
              بعد از تایید ادمین ، دوره مورد نظر به لیست "دوره من" شما اضافه
              خواهد شد
            </p>
          </div>
          <div className="flex flex-col justify-center items-end">
            <img className="mr-2" src="\imgLand\Line 13.png"></img>
            <div className="flex flex-row justify-center gap-4 items-center">
              <div className="font-serif font-bold text-sm">رزرو من</div>
              <div className="w-[17px] h-[17px] border-2 border-gray-400 rounded-full"></div>
            </div>
            <img className="mr-2" src="\imgLand\Line 14.png"></img>
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="font-serif font-bold text-sm">دوره من</div>
              <div className="w-[17px] h-[17px] border-2 border-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-9 mb-3">
          <botton className="bg-gray-300 rounded-3xl w-[130px] text-center font-serif font-bold py-2 px-3">
            باشه
          </botton>
          <botton className="rounded-3xl w-[180px] text-center font-serif font-bold py-2 px-3 bg-blue-500 text-white">
            رزرو من
          </botton>
        </div>
      </section>
    </>
  );
};

export default index;
