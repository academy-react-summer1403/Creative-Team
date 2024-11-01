import React from "react";
import LeftSideForm from "./LeftSideForm";
import TabForm from "./TabForm";

const index = () => {
  return (
    <>
      {/*      Register Page01 */}
      <div className="  w-[1330px] bg-white dark:bg-gray-950 flex flex-row justify-center gap-10 mx-auto">
        <LeftSideForm />

        <div className=" w-[500px] my-4">
          <TabForm />
          <div className=" flex flex-col gap-8 justify-center items-end my-7">
            <div className=" mx-auto flex flex-col items-end justify-center gap-3 my-5">
              <h2 className="font-bold text-lg text-black dark:text-white">
                !خوش اومدی
              </h2>
              <p className="text-sm text-right text-gray-500">
                لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود
              </p>
            </div>

            <div className=" mx-auto flex flex-col gap-3 items-end">
              <div className="font-bold text-xs text-right text-black dark:text-white">
                شماره همراه
              </div>
              <input
                type="text"
                placeholder="شماره همراه خود را وارد کنید"
                className="w-[400px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
              />
            </div>
            <div className=" w-[400px] h-[48px] mx-auto text-center text-white bg-blue-500 rounded-3xl leading-10 mb-4">
              ارسال کد تایید
            </div>
          </div>
          <div className=" flex flex-row justify-center gap-3 my-6">
            <span className="text-blue-500 text-sm cursor-pointer font-bold underline">
              ورود به حساب کاربری
            </span>
            <p className="text-sm font-bold text-black dark:text-white">
              حساب کاربری دارید؟
            </p>
          </div>
          <div className=" w-[141px] h-[40px] border border-gray-400 bg-white rounded-3xl font-bold text-blue-500 text-right mx-auto leading-8 px-2">
            صفحه اصلی
            <img className="-mt-7 ml-2" src="\imgRegister\home-04.png"></img>
            <div className="homeBottomIcon"></div>
          </div>
        </div>
      </div>
      {/*      Register Page02 */}
      <div className="  w-[1330px] bg-white dark:bg-gray-950 flex flex-row justify-center gap-10 mx-auto ">
        <LeftSideForm />
        <div className="rightSideRegister">
          <TabForm />
          <div className=" flex flex-col gap-8 justify-center items-end my-7">
            <div className=" mx-auto flex flex-col items-end justify-center gap-3 my-5">
              <h2 className="font-bold text-lg text-black dark:text-white">
                تایید کد ارسال شده{" "}
              </h2>
              <p className="text-sm text-right text-gray-500">
                لطفا کد ارسال شده به شماره همراه 09381235486 را وارد کنید
              </p>
            </div>

            <div className=" mx-auto flex flex-col gap-3 items-end">
              <div className="font-bold text-xs text-right text-black dark:text-white">
                کد تایید
              </div>
              <input
                type="text"
                placeholder="کدتایید خود را وارد کنید "
                className="w-[400px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
              />
            </div>
            <div className=" mr-12  bg-gray-200 rounded-3xl w-[180px] p-2 text-center">
              <span className="text-blue-500 text-center font-bold text-xs">
                01:00 ارسال مجدد کد تایید
              </span>
            </div>
            <div className=" w-[400px] h-[48px] mx-auto text-center text-white bg-blue-500 rounded-3xl leading-10 mb-4">
              تایید
            </div>
          </div>
          <div className=" w-[111px] h-[40px] border border-gray-400 bg-white rounded-3xl font-bold text-blue-500 text-right mx-auto leading-8 px-2">
            بازگشت
            <img
              className="-mt-7 ml-2"
              src="\imgRegister\arrow-left-01.png"
            ></img>
            <div className="homeBottomIcon"></div>
          </div>
        </div>
      </div>
      {/*      Register Page03 */}
      <div className="  w-[1330px] bg-white dark:bg-gray-950 flex flex-row justify-center gap-10 mx-auto ">
        <LeftSideForm />

        <div className="rightSideRegister">
          <TabForm />
          <div className=" flex flex-col gap-8 justify-center items-end my-7">
            <div className="mr-12 flex flex-col items-end justify-center gap-3 my-5">
              <h2 className="font-bold text-lg text-black dark:text-white">
                واردکردن اطلاعات شخصی
              </h2>
              <p className="text-sm text-right text-gray-500">
                لطفا اطلاعات اولیه خواسته شده را وارد کنید
              </p>
            </div>

            <div className=" mx-auto flex flex-col gap-3 items-end">
              <div className="font-bold text-xs text-right text-black dark:text-white">
                ایمیل
              </div>
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید "
                className="w-[400px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
              />
            </div>
            <div className=" mx-auto flex flex-col gap-3 items-end">
              <div className="font-bold text-xs text-right text-black dark:text-white">
                رمزعبورجدید
              </div>
              <input
                type="pasword"
                placeholder="رمزعبور جدید خود را وارد کنید "
                className="w-[400px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
              />
            </div>

            <div className=" w-[400px] h-[48px] mx-auto text-center text-white bg-blue-500 rounded-3xl leading-10 mb-4">
              تایید
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
