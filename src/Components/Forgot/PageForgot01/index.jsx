import React from "react";

const firstPageForgot = () => {
  return (
    <>
      <div className=" body-forgot top-40 left-28 flex flex-row ">
        <div className="rightSection ml-15">
          <div className="top flex flex-row justify-content-between ">
            <div className="right ">
              <div className="rectangle101 w-60 h-2 top-14 left-full">
                <img src="./src/assets/image/Rectangle 101.png" />
              </div>
              <h5 className=" mt-5 ">واردکردن ایمیل</h5>
            </div>
            <div className="left flex flex-col">
              <div className="rectangle102 w-60 h-2">
                <img src="./src/assets/image/Rectangle 102.png" />
              </div>
              <h5 className="mt-5">تایید کد ارسال شده دو مرحله‌ای</h5>
              <h5 className="mt-5">( درصورت فعال بودن دو مرحله‌ای )</h5>
            </div>
          </div>
          <div className="bottom">
            <h3 className="font-bold l-0">فراموشی رمزعبور!</h3>
            <div>
              {" "}
              <h5>اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد</h5>
              <h5>کنید تا لینک صفحه تغییر رمزعبور برای شما ارسال شود</h5>
            </div>
            <h5>ایمیل</h5>
            <div className="w-60  ">
              <input
                className=" font-thin border-solid border-2 rounded-xl hover:border-blue-700"
                type="text"
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
            <button className="sendEmail">
              ارسال ایمیل
              <input type="button" placeholder="ارسال لینک" />
            </button>
            <button className="back">بازگشت</button>
          </div>
        </div>
        <div className="leftSection backF bg-slate-300 left-8 top-32 rounded-l-3xl h-">
          <div className="logo ">
            <div className="flex flex-row">
              <img className="size-10" src="./src/assets/image/logo.png" />
              <img
                className="w-48 h-10"
                src="./src/assets/image/logoTitle.png"
              />
            </div>
            <h3 className="w-72 h-12 top-40 left-96 font-bold ">
              شروع یک ماجراجویی
            </h3>
            <h5 className="text-red font-semibold">
              هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
            </h5>
            <img src="./src/assets/image/coffee.png" />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default firstPageForgot;
