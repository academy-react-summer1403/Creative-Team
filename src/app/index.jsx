import React from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";
// import "./input.css";
import "./App.css";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import RegisterForm from "../Components/RegisterForm";
// import { authRoutes } from "../Config/Router/Auth.router";
import index from "./../Screen/Register/index";
import { NavLink } from "react-router-dom";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {/* ****************************Header  */}
      <Header />
      {/* *************************** content **************** */}
      <section className=" flex gap-8 baseW mx-auto mt-8  flex-col">
        <section className="laptop:w-11/12 h-4/5 laptop:flex laptop:flex-row justify-between gap-10 my-10 mx-10 mobile: flex flex-col w-96 items-center">
          <div className="  flex flex-col gap-5 items-center my-5 mobile:w-72 mobile:mx-auto ">
            <h4 className="font-serif text-black leading-8 text-lg font-medium not-italic laptop:text-right mobile:text-center">
              همین حالا
              <br />
              !شروع کن به یادگیری
            </h4>
            <div className="w-40 h-12 bg-gray-950 rounded-3xl font-serif text-center text-white leading-10 text-lg font-medium not-italic">
              جدیدترین دوره ها
            </div>
          </div>
          <div className="  flex flex-col gap-3 mobile:w-72 mx-auto">
            <div className="font-serif text-center text-black leading-10 text-3xl font-bold not-italic ">
              آموزش مدرن
              <br />
              پیشرفت سریع
            </div>
            <div className="font-serif text-center text-gray-800 leading-8 text-lg font-medium not-italic">
              آکادمی آموزشی تخصصی برنامه نویسی بحر
              <br />
              از کودکان تا بزرگسال
            </div>
          </div>
          <div className="  flex flex-col gap-2 mt-14 my-auto cursor-pointer w-32 tablet:w-36 mobile:w-20 mx-auto">
            <img
              className=" tablet:bg-auto mobile:bg-cover"
              src="\imgLand\Frame 7.png"
            ></img>
            <img
              className="tablet:bg-auto mobile:bg-cover"
              src="\imgLand\Frame 9.png"
            ></img>
          </div>
        </section>

        {/* ****************************** Tabs ****************** */}
        <section className="flex flex-row laptop:justify-between my-8 h-4/5 mx-10 mobile:justify-start mobile:mx-8">
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
        {/* ******************************  Goals  ******************/}
        <section className="mt-8 flex flex-col gap-5 laptop:bg-transparent mobile:bg-none mobile:mx-10">
          <div className="font-semibold text-3xl font-serif not-italic laptop:text-center text-left ml-28">
            اهداف ما در آکادمی
          </div>
          <div className=" laptop:flex laptop:flex-row laptop:gap-3 mx-16 mobile:flex-col gap-6">
            <div className=" bg-white w-1/4 h-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
              <h3 className="mr-3 text-right text-xl font-bold font-serif not-italic leading-7">
                آماده سازی برای بازار کار
              </h3>
              <p className=" mr-3 text-right text-sm text-gray-600 font-serif not-italic leading-7">
                جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین
                المللی کاریابی و آماده سازی برای شرکت ها
              </p>
              <img
                className=" w-52 h-52 mx-auto"
                src="imgLand/3d-hygge-open-window-with-active-sprints 1.png"
              />
            </div>
            <div className=" bg-white w-1/4 h-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
              <h3 className="mr-3 text-right text-xl font-bold font-serif not-italic leading-7">
                آموزش های تخصصی
              </h3>
              <p className=" mr-3 text-right text-sm text-gray-600 font-serif not-italic leading-7">
                کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد
                اقبال و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی
                و ...
              </p>
              <img
                className=" w-52 h-52 mx-auto"
                src="imgLand/3d-hygge-colleagues-discussing-the-project-in-vr 1.png"
              />
            </div>
            <div className=" bg-white w-1/4 h-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
              <h3 className="mr-3 text-right text-xl font-bold font-serif not-italic leading-7">
                راهنمایی و ایجاد انگیزه
              </h3>
              <p className=" mr-3 text-right text-sm text-gray-600 font-serif not-italic leading-7">
                آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل
                محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش
              </p>
              <img
                className=" w-52 h-52 mx-auto"
                src="imgLand/3d-hygge-isometric-view-of-man-leaning-on-chair-and-talking-to-young-woman 1.png"
              />
            </div>
            <div className=" bg-white w-1/4 h-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
              <h3 className="mr-3 text-right text-xl font-bold font-serif not-italic leading-7">
                استعدادیابی
              </h3>
              <p className=" mr-3 text-right text-sm text-gray-600 font-serif not-italic leading-7">
                یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف
                نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...
              </p>
              <img
                className=" w-52 h-52 mx-auto"
                src="imgLand/3d-hygge-isometric-view-of-young-woman-and-man-discussing-the-project 1.png"
              />
            </div>
          </div>
        </section>

        {/* ***************************      Services   ****************** */}
        <section className=" my-8 flex flex-col gap-3 laptop:items-center items-start">
          <div className="font-bold text-3xl text-black leading-10 w-96 h-38 text-center laptop:ml-18 ml-24">
            خدماتی که ما در طی دوره ها به شما ارائه میدهیم
          </div>
          <div className=" mobile:justify-center flex flex-wrap gap-6 laptop:gap-1">
            <div className="box1">
              <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mt-10 mr-24">
                آزمون ها
              </h2>
              <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mr-24">
                با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید
              </p>
              <div className="boxIcon boxIcon1"></div>
            </div>
            <div className="box1">
              <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mt-10 mr-24">
                مدرک معتبر
              </h2>
              <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mr-24">
                با مدرک ما میتوانید به راحتی در همه جا استخدام بشید
              </p>
              <div className="boxIcon boxIcon2"></div>
            </div>
            <div className="box1">
              <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mt-10 mr-24">
                فرصت های شغلی
              </h2>
              <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mr-24">
                با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده
                میشه
              </p>
              <div className="boxIcon boxIcon3"></div>
            </div>
            <div className="box1">
              <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mt-10 mr-24">
                مشاوره 24ساعته
              </h2>
              <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mr-24">
                مشاورین ما 24 ساعته جوابگو سوال های شما هستند
              </p>
              <div className="boxIcon boxIcon4"></div>
            </div>
          </div>
        </section>
        {/* *************************** Top Course***********************  */}
        <section className=" my-8  flex flex-col gap-3">
          <div className=" my-0 font-semibold text-3xl text-black leading-10 laptop:text-center laptop:mx-auto  text-left mx-60">
            دوره های برتر هفته
          </div>
          <div className="  laptop:w-full h-3/4 flex flex-row gap-6 my-0 mx-auto mobile:w-1/2 tablet:w-2/3 mobile:justify-end">
            <div className=" flex flex-col items-start p-0 gap-2">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 12.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                  دوره طراحی سایت
                </h3>
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif font-medium text-lg text-black">
                      تومان
                    </span>
                    <span className=""> 500000</span>
                  </div>
                  <span className="font-serif font-normal text-sm text-gray-700">
                    محمدحسین بحرالعلومی
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start p-0 gap-2">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 11.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                  دوره جاوا اسکریپت
                </h3>
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif font-medium text-lg text-black">
                      تومان
                    </span>
                    <span className=""> 500000</span>
                  </div>
                  <span className="font-serif font-normal text-sm text-gray-700">
                    محمدحسین بحرالعلومی
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start p-0 gap-2">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 10.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                  دوره فیگما
                </h3>
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif font-medium text-lg text-black">
                      تومان
                    </span>
                    <span className=""> 500000</span>
                  </div>
                  <span className="font-serif font-normal text-sm text-gray-700">
                    محمدحسین بحرالعلومی
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start p-0 gap-2">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 9.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                  دوره ریکت
                </h3>
                <div className="flex flex-row justify-between gap-3">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif font-medium text-lg text-black">
                      تومان
                    </span>
                    <span className=""> 500000</span>
                  </div>
                  <span className="font-serif font-normal text-sm text-gray-700">
                    محمدحسین بحرالعلومی
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-32 h-10 bg-black rounded-3xl my-0  text-white text-center text-ms leading-9 font-light laptop:mx-auto mx-72">
            مشاهده بیشتر
          </div>
        </section>
        {/* *****************************Top Blogs ********************** */}
        <section className="topBlogs ">بلاگ برتر</section>
      </section>

      {/* *****************************Footer ********************* */}
      <Footer />
      {/* **************************** Register Form ************* */}
      <RegisterForm />
      {/* ******************************** Courses *********************************** */}
      <section>
        <div className="border border-red-500 flex flex-col justify-between items-center  laptop:gap-5 gap-3">
          <h1 className="font-bold font-serif text-3xl">شروع ماجراجویی جدید</h1>
          <p className="text-sm text-gray-600 font-serif text-center">
            یک شروع قوی برای یادگیری یک مسئله <br></br>جدید می تونه تو پیشرفت
            کمک کنه
          </p>
        </div>
        <div className=" flex justify-center  gap-8 mt-4">
          <div className=" w-3/4 ">
            <div className=" flex flex-row justify-end mr-10 mt-4 font-serif text-center font-semibold">
              <ul className="py-2">
                <li className="inline border border-gray-600 rounded-3xl mx-2 py-1 px-2 font-serif text-center font-semibold">
                  ارزان ترین
                </li>
                <li className="inline border border-gray-600 rounded-3xl mx-2 py-1 px-2 font-serif text-center font-semibold">
                  گران ترین
                </li>
                <li className="inline border border-gray-600 rounded-3xl mx-3 py-1 px-2 font-serif text-center font-semibold">
                  محبوب ترین
                </li>
                <li className="inline border border-red-600 rounded-3xl mr-4 py-1 px-3 text-red-600 font-serif text-center font-semibold">
                  جدید ترین
                </li>
                <li className="inline  text-black font-serif text-center font-bold text-xl">
                  ترتیب{" "}
                </li>
              </ul>
            </div>
            <div className=" flex flex-col items-center gap-5">
              <div className="  ml-5 flex flex-wrap justify-around gap-1">
                <div className=" flex flex-col items-start  w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 12.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره طراحی سایت
                    </h3>
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 9.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره ریکت
                    </h3>
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 11.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره جاوا اسکریپت
                    </h3>
                    <div className=" flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 10.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره فیگما
                    </h3>
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 12.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره طراحی سایت
                    </h3>
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 11.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره جاوا اسکریپت
                    </h3>
                    <div className=" flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 9.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره ریکت
                    </h3>
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 10.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره فیگما
                    </h3>
                    <div className=" flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
                  <img
                    className="w-full h-3/4 rounded-lg flex flex-row"
                    src="\imgLand\Group 11.png"
                  ></img>
                  {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                  {/* <span className="catOfCourse">برنامه نویسی</span> */}

                  <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                    <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                      دوره جاوا اسکریپت
                    </h3>
                    <div className=" flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ********************* pagition  */}
              <div className=" my-10">
                <div className="bg-gray-200 p-4 rounded-2xl flex flex-row justify-between gap-20">
                  <img src="\imgLand\arrow-left-01.png"></img>
                  <i>1</i>
                  <i>2</i>
                  <i>3</i>
                  <i>4</i>
                  <img src="\imgLand\arrow-left.png"></img>
                </div>
                {/* <Swiper
                  className=" border border-blue-600 w-96 flex flex-row justify-center gap-1"
                  modules={[Navigation]}
                  navigation
                  pagination
                >
                  <SwiperSlide>
                    <img src="\imgLand\Frame 9(1).png" />
                    <noscript>
                      <img decoding="async" src="/img/sample1.png" />
                    </noscript>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      decoding="async"
                      src="\imgLand\Frame 10.png"
                      data-lazy-src="/img/sample2.png"
                    />
                    <noscript>
                      <img decoding="async" src="/img/sample2.png" />
                    </noscript>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      decoding="async"
                      src="\imgLand\Frame 11.png"
                      data-lazy-src="/img/sample3.png"
                    />
                  </SwiperSlide>
                </Swiper> */}
              </div>
            </div>
          </div>
          {/* ***************************************filter */}
          <div className="border border-gray-600 w-1/4 h-2/4 rounded-3xl mt-20 flex flex-col items-end gap-6 mr-5">
            <h1 className="font-serif font-bold text-3xl mr-7 mt-4">فیلتر</h1>
            {/* جست جو */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-xl font-serif">جستجو</span>
                <img src="\imgLand\search-01-stroke-rounded 1.png"></img>
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-200 w-full p-3 rounded-xl"
                  type="text"
                ></input>
                <img
                  className="bg-blue-600 rounded-xl -mt-10 ml-1 p-2"
                  src="\imgLand\search-01-stroke-rounded 2.png"
                ></img>
              </div>
            </div>
            {/* دسته یندی */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-xl font-serif">دسته بندی</span>
                <img src="public\imgLand\cells-stroke-rounded 1.png"></img>
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-200 w-full p-3 rounded-xl"
                  type="text"
                ></input>
                <img
                  className="-mt-10 ml-1 p-2"
                  src="\imgLand\arrow-down-01.png"
                ></img>
              </div>
            </div>
            {/* سطح آموزشی */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-xl font-serif">سطح آموزشی</span>
                <img src="\imgLand\layers-01-stroke-rounded 2.png"></img>
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-200 w-full p-3 rounded-xl"
                  type="text"
                ></input>
                <img
                  className="-mt-10 ml-1 p-2"
                  src="\imgLand\arrow-down-01.png"
                ></img>
              </div>
            </div>
            {/* اساتید */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-2xl font-serif">اساتید</span>
                <img src="\imgLand\teacher-stroke-rounded 1.png"></img>
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-200 w-full p-3 rounded-xl"
                  type="text"
                ></input>
                <img
                  className="-mt-10 ml-1 p-2"
                  src="\imgLand\arrow-down-01.png"
                ></img>
              </div>
            </div>
            {/* قیمتها */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-2xl font-serif">قیمت</span>
                <img src="\imgLand\money-04-stroke-rounded 2.png"></img>
              </div>
              <div className="flex flex-row justify-between mt-2">
                <div>
                  <span className="ml-2">تا</span>
                  <span>1000000</span>
                </div>
                <div>
                  <span className="ml-2">از</span>
                  <span>1000</span>
                </div>
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <input className="w-1/3" type="range"></input>
                <input className="w-1/3" type="range"></input>
              </div>
            </div>
            {/* تاریخ */}
            <div className="w-11/12 mr-3 mb-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-xl font-serif">تاریخ برگزاری-اتمام</span>
                <img
                  className="text-xl font-serif"
                  src="public\imgLand\calendar-02-stroke-rounded 2.png"
                ></img>
              </div>
              <input
                className="bg-gray-200 w-full p-3 rounded-xl text-center mt-2"
                type=""
                placeholder="خرداد 1403- اردیبهشت1403"
              ></input>
            </div>
          </div>
        </div>
      </section>
      {/* Routers */}
    </>
  );

  // {
  //   isLoggedIn ? <Auth /> : <Public />;
  // }

  // {
  //   <RouterProvider routes={isLoggedIn ? authRoutes : PublicRoute} />;
  // }
  // <Routes>
  //   <Route />
  // </Routes>;
}
export default App;
