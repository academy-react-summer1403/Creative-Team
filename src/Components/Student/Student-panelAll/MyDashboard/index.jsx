import React from "react";

const index = () => {
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
            اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون بیایید منو بشناسید
            حال ندارم بخدا خستم
          </div>
        </div>
        <div className="flex gap-6 justify-center  h-[246px]">
          <div className="  w-[801px] rounded-3xl bg-slate-100 p-3">
            <div className="flex justify-between p-2 ">
              <div className="">دوره من</div>
              <div className="flex gap-1 cursor-pointer">
                <p className="text-blue-400 ">مشاهده بیشتر</p>
                <img
                  src="src/assets/StudentImg/arrow-left-01.png"
                  className=""
                />
              </div>
            </div>
            <div className="mx-auto w-[749px] h-[60px]  rounded-3xl flex justify-around  bg-slate-200">
              <p className="m-auto">#</p>
              <p className="m-auto">نام</p>
              <p className="m-auto">مدرس</p>
              <p className="m-auto">تاریخ برگزاری</p>
              <p className="m-auto">سطح</p>
            </div>
            <div className="flex justify-evenly gap-2 mt-2">
              <div className="relative w-[83px] h-[52px]">
                <img className="" src="src/assets/StudentImg/Rectangle 9.png" />
                <img
                  className="absolute top-3 right-6"
                  src="src/assets/StudentImg/Rectangle.png"
                />
              </div>
              <div className="f7">دوره فیگما</div>
              <div className="f8">محمدحسین خلیل‌پور</div>
              <div className="f8">29 اردیبهشت 1403</div>
              <div className="">
                {" "}
                <img className="" src="src/assets/StudentImg/Frame 17.png" />
              </div>
              <div className="">
                {" "}
                <img className="" src="src/assets/StudentImg/view.png" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-evenly gap-2 mt-2">
                <div className="relative w-[83px] h-[52px] mr-3">
                  <img
                    className=""
                    src="src/assets/StudentImg/Rectangle 49.png"
                  />
                  <img
                    className="absolute top-3 right-6"
                    src="src/assets/StudentImg/Rectangle.png"
                  />
                </div>
                <div className="text-indent f7">دوره جاوااس...</div>
                <div className="f8">محمدحسین بحرالعلومی</div>
                <div className="f8">29 اردیبهشت 1403</div>
                <div className="">
                  {" "}
                  <img
                    className="ml-4"
                    src="src/assets/StudentImg/Frame 17.png"
                  />
                </div>
                <div className="ml-4">
                  {" "}
                  <img className="" src="src/assets/StudentImg/view.png" />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[253px] rounded-3xl flex flex-col justify-evenly p-2">
            <div className="flex justify-between ">
              <p className="w-[173px] h-[20px] text-nowrap f8">
                وضعیت اطلاعات حساب کاربری
              </p>
              <img
                src="src/assets/StudentImg/pencil-edit-01-stroke-rounded 2.png"
                className=""
              />
            </div>
            <div className="relative w-[136px] h-[136px] m-auto">
              <img
                src="src/assets/StudentImg/Ellipse 30.png"
                className="absolute m-auto"
              />
              <img
                src="src/assets/StudentImg/Ellipse 31.png"
                className="absolute m-auto"
              />
              <p className="absolute mr-12 mt-12 f9">۷۰</p>
              <p className="absolute mr-10 mt-16 f10">٪</p>
            </div>
            <p className="f8 text-centre">اطلاعات حساب کاربری شما کامل نیست</p>
          </div>
        </div>
        <div className="flex justify-evenly mt-3 h-[733px]">
          <div className=" ">
            <div className=" mr-2  rounded-3xl bg-slate-100 p-3 w-[662px] h-[487px] ">
              <div className="flex justify-between p-2 ">
                <div className="">رزومه من</div>
                <div className="flex gap-1 cursor-pointer">
                  <p className="text-blue-400 ">مشاهده بیشتر</p>
                  <img
                    src="src/assets/StudentImg/arrow-left-01.png"
                    className=""
                  />
                </div>
              </div>
              <div className="mx-auto w-[650px] h-[60px]  rounded-3xl flex justify-around  bg-slate-200">
                <p className="m-auto">#</p>
                <p className="m-auto">نام</p>
                <p className="m-auto">مدرس</p>
                <p className="m-auto">وضعیت</p>
              </div>
              <div className="flex justify-evenly gap-2 mt-2">
                <div className="relative w-[83px] h-[52px]">
                  <img
                    className=""
                    src="src/assets/StudentImg/Rectangle 9.png"
                  />
                  <img
                    className="absolute top-3 right-6"
                    src="src/assets/StudentImg/Rectangle.png"
                  />
                </div>
                <div className="f7">دوره فیگما</div>
                <div className="f8">محمدحسین خلیل‌پور</div>
                <div className="f8">
                  <img className="" src="src/assets/StudentImg/Frame 123.png" />
                </div>
                <div className="">
                  {" "}
                  <img className="" src="src/assets/StudentImg/view.png" />
                </div>
                <div className="">
                  {" "}
                  <img className="" src="src/assets/StudentImg/cancel-01.png" />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[392px] h-[487px]  rounded-3xl bg-slate-100">
            <div className="">
              <div className="flex justify-between p-2 ">
                <div className="">رزومه من</div>
                <div className="flex gap-1 cursor-pointer">
                  <p className="text-blue-400 ">مشاهده بیشتر</p>
                  <img
                    src="src/assets/StudentImg/arrow-left-01.png"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <p className="border-b text- "> ---------------------- </p>
              <p className="">دوره ها و بلاگ ها</p>
              <p className="border-b ">---------------------</p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
