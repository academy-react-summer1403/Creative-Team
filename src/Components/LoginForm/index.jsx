import React from "react";
import LeftSideForm from "../RegisterForm/LeftSideForm";
import TabLogin from "./TabLogin";

const index = () => {
  return (
    <>
      {/* *********** Login 1 */}
      <section className="  mobile:w-[1300px] w-[393px] bg-white mobile:flex mobile:flex-row mobile:justify-center mobile:gap-10 flex flex-col justify-between mx-auto">
        <LeftSideForm />
        <div className="mobile:hidden w-[393px] flex flex-row justify-between">
          <div className="w-[141px] h-[40px] border border-gray-400 bg-white rounded-3xl font-bold text-blue-500 text-right mobile:mx-auto mx-0 leading-8 px-2  ">
            صفحه اصلی
            <img className="-mt-7 ml-2" src="\imgRegister\home-04.png"></img>
            <div className="homeBottomIcon"></div>
          </div>
          <div>
            <img src="\imgRegister\Untitled-1 4-1.svg"></img>
          </div>
        </div>
        <div className=" mobile:w-[500px] w-[393px] my-4">
          <TabLogin />
          <div className=" flex flex-col gap-8 justify-center items-end my-7">
            <div className=" mr-16 flex flex-col items-end justify-center gap-3 my-5">
              <h2 className="font-bold text-lg text-black ">!خوش برگشتی</h2>
              <p className="text-sm text-right text-gray-500 w-[257px]">
                لطفا شماره همراه یا ایمیل و رمزعبور خود را برای ورود به حساب
                کاربری را وارد کنید
              </p>
            </div>

            <div className=" mx-auto flex flex-col gap-3 items-end">
              <div className="font-bold text-xs text-right text-black">
                شماره همراه یا ایمیل{" "}
              </div>
              <input
                type="text"
                placeholder="شماره همراه یا ایمیل خود را وارد کنید"
                className="w-[400px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
              />
            </div>
            <div className=" mx-auto flex flex-col gap-3 items-end">
              <div className="font-bold text-xs text-right text-black">
                رمزعبور
              </div>
              <input
                type="text"
                placeholder="رمزعبور خود را وارد کنید"
                className="w-[400px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
              />
            </div>
            <div className=" w-[400px] flex flex-row justify-between mx-auto">
              <div className="bg-gray-200 rounded-3xl w-[200px] text-blue-500 text-center cursor-pointer font-bold text-xs p-3">
                رمزعبور را فراموش کردید؟
              </div>
              <div className="font-bold text-xs text-right text-black mt-2">
                مرا بخاطر بسپار
                <input
                  className="w-[15px] h-[15px] bg-gray-200"
                  type="checked"
                ></input>
              </div>
            </div>
            <div className=" w-[400px] h-[48px] mx-auto text-center text-white bg-blue-500 rounded-3xl leading-10 mb-4">
              ورود به حساب
            </div>
          </div>
          <div className=" flex flex-row justify-center gap-3 my-6">
            <span className="text-blue-500 text-sm cursor-pointer font-bold underline">
              ایجاد حساب کاربری
            </span>
            <p className="text-sm font-bold">حساب کاربری ندارید؟</p>
          </div>
          <div className="hidden mobile:block w-[141px] h-[40px] border border-gray-400 bg-white rounded-3xl font-bold text-blue-500 text-right mx-auto leading-8 px-2  ">
            صفحه اصلی
            <img className="-mt-7 ml-2" src="\imgRegister\home-04.png"></img>
            <div className="homeBottomIcon"></div>
          </div>
        </div>
      </section>

      {/* **********Login 2 */}
      <div className="  mobile:w-[1300px] w-[393px] bg-white mobile:flex mobile:flex-row mobile:justify-center mobile:gap-10 flex flex-col justify-between mx-auto">
        <LeftSideForm />
        <div className="mobile:hidden w-[393px] flex flex-row justify-between">
          <div className="w-[111px] h-[40px] border border-gray-400 bg-white rounded-3xl font-bold text-blue-500 text-right mobile:mx-auto mx-0 leading-8 px-2">
            بازگشت
            <img
              className="-mt-7 ml-2"
              src="\imgRegister\arrow-left-01.png"
            ></img>
            <div className="homeBottomIcon"></div>
          </div>
          <div>
            <img src="\imgRegister\Untitled-1 4-1.svg"></img>
          </div>
        </div>
        <div className=" mobile:w-[500px] w-[393px] my-4">
          <TabLogin />
          <div className=" flex flex-col gap-8 justify-center items-end my-7">
            <div className=" mx-auto flex flex-col items-end justify-center gap-3 my-5">
              <h2 className="font-bold text-lg text-black ">
                !تایید کد دومرحله ای{" "}
              </h2>
              <p className="text-sm text-right text-gray-500">
                کد دومرحله‌ای به شماره همراه شما ارسال شد لطفا کد را وارد کنید
              </p>
            </div>

            <div className=" mx-auto flex flex-col gap-3 items-end">
              <div className="font-bold text-xs text-right text-black">
                کد دو مرحله ای
              </div>
              <input
                type="text"
                placeholder="کد دو مرحله خود را وارد کنید "
                className="w-[400px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
              />
            </div>

            <div className=" w-[400px] h-[48px] mx-auto text-center text-white bg-blue-500 rounded-3xl leading-10 mb-4">
              ورود به حساب
            </div>
          </div>
          <div className="hidden mobile:block w-[111px] h-[40px] border border-gray-400 bg-white rounded-3xl font-bold text-blue-500 text-right mx-auto leading-8 px-2">
            بازگشت
            <img
              className="-mt-7 ml-2"
              src="\imgRegister\arrow-left-01.png"
            ></img>
            <div className="homeBottomIcon"></div>
          </div>
        </div>
      </div>
      {/* **************Responsive */}
    </>
  );
};

export default index;
