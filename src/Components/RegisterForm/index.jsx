import React from "react";
import LeftSideForm from "./LeftSideForm";
import TabForm from "./TabForm";
import { Form, NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const index = () => {
  // const userRef = useRef();
  // const errRef = useRef();

  const [userMobNumber, setUserMobNumber] = useState();
  // const [validNumber, setValidNumber] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  // const [errMsg, setErrMsg] = useState();
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [userMobNumber]);

  useEffect(() => {
    console.log(userMobNumber);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("userPhone:", userMobNumber);
  };
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
            <Form className=" mx-auto flex flex-col gap-3 items-end">
              <label
                htmlFor="userphone"
                className="font-bold text-xs text-right text-black dark:text-white"
              >
                شماره همراه
              </label>
              <input
                type="text"
                id="userphone"
                autoComplete="off"
                onChange={(e) => setUserMobNumber(e.target.value)}
                required
                placeholder="شماره همراه خود را وارد کنید"
                className="w-[400px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
              />

              <botton
                onClick={handleSubmit}
                className=" w-[400px] h-[48px] mx-auto text-center text-white bg-blue-500 rounded-3xl leading-10 mb-4 cursor-pointer"
              >
                ارسال کد تایید
              </botton>
            </Form>
          </div>
          <div className=" flex flex-row justify-center gap-3 my-6">
            <NavLink
              to="/login"
              className="text-blue-500 text-sm cursor-pointer font-bold underline"
            >
              ورود به حساب کاربری
            </NavLink>
            <p className="text-sm font-bold text-black dark:text-white">
              حساب کاربری دارید؟
            </p>
          </div>
          <NavLink to="/">
            <label className=" w-[140px] h-[50px] border border-gray-400 bg-white rounded-3xl mx-auto leading-8 px-2 flex flex-row-reverse justify-center items-center cursor-pointer">
              <p className="font-bold text-blue-500 text-right"> صفحه اصلی</p>
              <img
                className=" ml-2 size-5"
                src="\imgRegister\home-04.png"
              ></img>
            </label>
          </NavLink>
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
          <NavLink to="/register">
            <label className=" w-[111px] h-[40px] border border-gray-400 bg-white rounded-3xl font-bold text-blue-500 text-right mx-auto leading-8 px-2 flex flex-row-reverse justify-center items-center gap-3 cursor-pointer">
              <p>بازگشت</p>
              <img className=" ml-2" src="\imgRegister\arrow-left-01.png"></img>
            </label>
          </NavLink>
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
