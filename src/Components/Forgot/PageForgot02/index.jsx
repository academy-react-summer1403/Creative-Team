import React from "react";

const secondPageForgot = () => {
  return (
    <>
      <div className="body flex flex-row border-1 justify-evenly ">
        <div className="rightSection m-5 ml-15 ">
          <div className="top flex flex-row justify-content-between mt-1.5">
            <div className="right ml-5 flex flex-col">
              <div className="rectangle101 w-60 h-2 top-14 left-full">
                <img src="./src/assets/image/Rectangle 102.png" />
              </div>
              <h5 className=" mt-5 font-medium text-base text-right text-slate-500 w-24 h-6 top-20 right-24 text-nowrap">
                واردکردن ایمیل
              </h5>
            </div>
            <div className="left flex flex-col overflow-hidden">
              <div className="rectangle102 w-60 h-2">
                <img src="./src/assets/image/Rectangle 101.png" />
              </div>
              <h5 className="mt-5 font-medium text-slate-700  text-base text-centre">
                تایید کد ارسال شده دو مرحله‌ای
              </h5>
              <h5 className="mt-5 font-medium text-slate-700  text-base text-centre">
                ( درصورت فعال بودن دو مرحله‌ای )
              </h5>
            </div>
          </div>
          <div className="bottom flex flex-col">
            <h3 className="font-semibold leading-10 size-7 text-right text-nowrap text-black w-48 mt-10">
              رمز عبور جدید!
            </h3>
            <div className="mt-5 flex flex-col">
              {" "}
              <h5 className="text-right  text-slate-500">
                رمزعبور جدید خود را وارد کنید
              </h5>
              <h5 className="text-right  text-black mt-9 font-bold">
                رمزعبور جدید
              </h5>
              <div className="w-full h-12 mt-2 ">
                <input
                  className=" font-thin w-96 ml-40  text-right pr-3 pt-1 pb-1 border-solid border-2 rounded-2xl hover:border-blue-600"
                  type="text"
                  placeholder="رمزعبور خود را وارد کنید"
                />
              </div>
              <h5 className="text-right font-bold text-black-400 h-11 w-80 top-64 mt-4 text-nowrap">
                تکرار رمزعبور جدید
              </h5>
              <div className="w-full h-12  ">
                <input
                  className=" font-thin w-96 ml-40  text-right pr-3 pt-1 pb-1 border-solid border-2 rounded-2xl hover:border-blue-600"
                  type="text"
                  placeholder="تکرار رمزعبور خود را وارد کنید"
                />
              </div>
            </div>
            <div className="w-full h-12 mt-2 ">
              <button
                className=" border-solid borde-2 w-96 ml-40 text-white bg-blue-600 text-centre pr-3 pt-1 pb-1 border-2 rounded-2xl"
                type="button"
                placeholder=""
              >
                تایید رمز عبور{" "}
              </button>
            </div>
            <div className="w-28 h-10 text-left  pt-8 pr-16 pb-8 pl-32">
              <input
                type="image"
                className="l-90 pl-5"
                src="./src/assets/image/Frame 73.png"
                placeholder="بازگشت"
              />
            </div>
          </div>
        </div>
        {/* <div className="left border-2 bg-gray-200"></div> */}
        <div className="logo leftSection flex m-2 w-9/12 h-full border-solid backF bg-slate-100 left-8 mt-0.5 rounded-l-3xl ">
          <div className=" bg-slate-100">
            <div className="flex flex-row">
              <img className="size-10" src="./src/assets/image/logo.png" />
              <img
                className="w-48 h-10"
                src="./src/assets/image/logoTitle.png"
              />
            </div>
            <h3 className="w-72 h-12 top-40 left-96 font-bold mt-12 bg-slate-100 text-right">
              شروع یک ماجراجویی
            </h3>
            <h5 className="text-red font-semibold bg-slate-100 mt-0.1 text-right">
              هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
            </h5>
            <div className="flex items-stretch bg-slate-100">
              <img
                className="mt-20 self-centre bottom-44 ml-50"
                src="./src/assets/image/coffee.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default secondPageForgot;
