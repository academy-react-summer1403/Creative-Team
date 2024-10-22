import React from "react";

const StudentDashboard = () => {
  return (
    <div className="w-[1440px] h-[1024px] bg-black text-white flex flex-col">
      <div className=" flex flex-row gap-1 h-[72px]  mr-4">
        <div className="dashboardtopLogo flex gap-3  my-auto">
          <div className=" my-auto ">
            <img
              className="w-[42px] h-[40px]"
              src="src/assets/StudentImg/Untitled-1 4.png"
            />
          </div>
          <div className=" my-auto">
            <img
              className="w-[189px] h-[38px]"
              src="src/assets/StudentImg/Untitled-1 3.png"
            />
          </div>
        </div>
        <div className="dashboardtopStudent flex gap-8    my-auto">
          <div className=" flex gap-1 align-middle ">
            <img
              src="src/assets/StudentImg/Peppe – 07.png"
              className="w-[40px] h-[40px] "
              alt=""
            />
            <div className="flex flex-col  ">
              <h2 className="  text-base font-semibold">پارسا آقایی</h2>
              <h4 className="text-gray-400 text-sm font-medium">دانشجو</h4>
            </div>
          </div>
        </div>
        <div className="w-[290px] mx-auto flex justify-between p-1 my-auto  font-medium text-base">
          <div className="">صفحه اصلی</div>
          <div className="">گزارش</div>
          <div className="">ارتباط باما</div>
        </div>
        <div className="flex gap-6 my-auto   p-2 w-[110px] h-[50px] mx-6">
          <div className="w-[65px] h-[36px] bg-gray-800 rounded-full ">
            <img
              className="m-auto w-[24px] h-[24px] "
              src="src/assets/StudentImg/notification-02.png"
            />
            <img
              src="src/assets/StudentImg/Group 3.png"
              className=" mb-2 ml-3"
            />
          </div>
          <div className="w-[65px] h-[36px] bg-gray-800 rounded-full   ">
            <img className=" m-auto" src="src/assets/StudentImg/moon-02.png" />
          </div>
        </div>
      </div>
      <div className="flex w-[1440px]  h-[940px] text-right">
        <ul className="w-[290px]   mt-10 p-2">
          <li className=" p-6 flex gap-2">
            <img className="" src="src/assets/StudentImg/activity-01.png" />
            <p className="">داشبرد</p>
          </li>
          <li className=" p-6 flex gap-2">
            {" "}
            <img className="" src="src/assets/StudentImg/course.png" />
            <p className="">دوره من</p>
          </li>
          <li className=" p-6 flex gap-2">
            {" "}
            <img className="" src="src/assets/StudentImg/book-02.png" />
            <p className="">رزرو من</p>
          </li>
          <li className=" p-6 flex gap-2">
            {" "}
            <img className="" src="src/assets/StudentImg/books-02.png" />
            <p className="">دوره های موردعلاقه</p>
          </li>
          <li className=" p-6 flex gap-2">
            {" "}
            <img className="" src="src/assets/StudentImg/library.png" />
            <p className="">بلاگ های موردعلاقه</p>
          </li>
          <li className=" p-6 flex gap-2">
            {" "}
            <img className="" src="src/assets/StudentImg/user-square.png" />
            <p className="">پروفایل</p>
          </li>
          <li className=" p-6 flex gap-2">
            {" "}
            <img
              className=""
              src="src/assets/StudentImg/money-send-02-stroke-rounded 1.png"
            />
            <p className="">پرداخت ها</p>
          </li>
          <li className="border border-red-700 rounded-3xl text-red-500 p-4 flex gap-2 mt-72">
            {" "}
            <img
              className=""
              src="src/assets/StudentImg/logout-03-stroke-rounded 1.png"
            />
            <p className="">خروج از حساب کاربری</p>
          </li>
        </ul>
        <div className=" w-[1126px] h-[928px] bg-white rounded-3xl ml-6 text-black"></div>
      </div>
    </div>
  );
};

export default StudentDashboard;
