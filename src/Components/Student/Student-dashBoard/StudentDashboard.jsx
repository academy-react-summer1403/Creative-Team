import React from "react";

const StudentDashboard = () => {
  return (
    <div className="w-[1440px] h-[1024px] bg-black text-white flex flex-col">
      <div className=" flex flex-row gap-1 h-[72px] border border-white ">
        1
        <div className="dashboardtopLogo flex gap-3 border border-white my-auto">
          <div className="border border-white my-auto">logo</div>
          <div className="border border-white my-auto">brand</div>
        </div>
        <div className="dashboardtopStudent flex gap-8   border border-white my-auto">
          <div className=" flex gap-1 align-middle border border-white">
            <img
              src="src/assets/StudentImg/Peppe – 07.png"
              className="w-[40px] h-[40px] "
              alt=""
            />
            <div className="flex flex-col  border border-white">
              <h2 className=" font-bold">پارسا آقایی</h2>
              <h4 className="text-gray-400">دانشجو</h4>
            </div>
          </div>
        </div>
        <div className="w-[290px] mx-auto flex justify-between p-1 my-auto border border-white">
          <div className="">صفحه اصلی</div>
          <div className="">گزارش</div>
          <div className="">ارتباط باما</div>
        </div>
        <div className="flex gap-2 border border-white p-2 w-[100px] h-[72px] mx-6">
          <div className="border border-white  w-[48px] h-[48px]">notif</div>
          <div className="border border-white  w-[48px] h-[48px] ">dark</div>
        </div>
      </div>
      <div className="flex w-[1440px]  h-[940px] ">
        <ul className="w-[290px] border border-white">
          <li className="border border-white">
            <img className="" />
            <p className="">داشبرد</p>
          </li>
          <li className="border border-white">
            {" "}
            <img className="" />
            <p className="">دوره من</p>
          </li>
          <li className="border border-white">
            {" "}
            <img className="" />
            <p className="">رزرو من</p>
          </li>
          <li className="border border-white">
            {" "}
            <img className="" />
            <p className="">دوره های موردعلاقه</p>
          </li>
          <li className="border border-white">
            {" "}
            <img className="" />
            <p className="">بلاگ های موردعلاقه</p>
          </li>
          <li className="border border-white">
            {" "}
            <img className="" />
            <p className="">پروفایل</p>
          </li>
          <li className="border border-white">
            {" "}
            <img className="" />
            <p className="">پرداخت ها</p>
          </li>
          <li className="border border-white text-red-500">
            {" "}
            <img className="" />
            <p className="">خروج از حساب کاربری</p>
          </li>
        </ul>
        <div className=" w-[1126px] h-[928px] bg-white rounded-3xl ml-6 text-black">
          3
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
