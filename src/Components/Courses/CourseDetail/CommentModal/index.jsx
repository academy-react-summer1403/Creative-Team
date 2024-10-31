import React from "react";

const index = () => {
  return (
    <>
      <section className="mobile:w-[851px] w-[393px] border border-gray-400 rounded-2xl my-4 mx-auto ">
        <div className="  flex flex-col items-end">
          <div className="  w-full mt-4 mobile:mx-6 mx-0 flex flex-row mobile:justify-center mobile:gap-80 justify-center gap-12 items-center">
            <img
              className=" cursor-pointer mobile:w-[80px] w-[50px]"
              src="\imgLand\Frame 73.png"
            ></img>
            <div className="flex flex-row justify-center gap-2">
              <h2 className="text-gray-400 mobile:font-bold mobile:text-xl text-sm">
                ( دوره جاوااسکریپت )
              </h2>
              <h1 className="mobile:font-extrabold mobile:text-xl  font-bold text-sm">
                نظرات دانشجو ها و اساتید
              </h1>
            </div>
          </div>
          <div className="hidden mobile:block mr-8 mt-6 cursor-pointer">
            <img src="\imgLand\Frame 105.png"></img>
          </div>
          <div className="mobile:mr-8 my-3 mx-auto">
            <div className="text-right">
              <div className="  flex gap-1 justify-end">
                <div className="flex flex-col mt-5">
                  <h2 className="text-base">امیرحسین سهرابی</h2>
                  <h4 className="text-gray-400 text-base">29 اردیبهشت 1403</h4>
                </div>
                <img
                  src="\imgLand\Bling.png"
                  className="w-[40px] h-[40px] mt-5"
                  alt=""
                />
              </div>
              <div className="font-bold	text-lg leading-6	">
                <h2> دوره خیلی خوبی بود واقعا لذت بردم</h2>
              </div>
              <div className="pt-2">
                <p>
                  {" "}
                  واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا
                  از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی
                  کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو
                  گذاشتن😍{" "}
                </p>
              </div>
              <div className="my-3 flex flex-row justify-end gap-7 items-center">
                <div className="border border-blue-500 rounded-3xl p-2 mt-6 text-center text-blue-500 cursor-pointer">
                  جواب دادن
                </div>
                <div className=" flex gap-3 mt-8">
                  <span className="">۱</span>
                  <img
                    src="\imgLand\thumbs-down.png"
                    className="w-[24px] h-[24px]"
                  />
                  <span>29</span>
                  <img
                    src="\imgLand\thumbs-up(1).png"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="  flex gap-1 justify-end">
                <div className="flex flex-col mt-5">
                  <h2 className="text-base"> مهرداد انصاری</h2>
                  <h4 className="text-gray-400 text-base">29 اردیبهشت 1403</h4>
                </div>
                <img
                  src="\imgLand\Flynn.png"
                  className="w-[40px] h-[40px] mt-5"
                  alt=""
                />
              </div>
              <div className="font-bold	text-lg leading-6	">
                <h2>دوره نسبتا خوبی بود بیشتر ازین انتظار داشتم</h2>
              </div>
              <div className="pt-2">
                <p>
                  {" "}
                  واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا
                  از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی
                  کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو
                  گذاشتن😍{" "}
                </p>
              </div>
              <div className="my-3 flex flex-row justify-end gap-7 items-center">
                <div className="border border-blue-500 rounded-3xl p-2 mt-6 text-center text-blue-500 cursor-pointer">
                  جواب دادن
                </div>
                <div className=" flex gap-3 mt-8">
                  <span className="">۱</span>
                  <img
                    src="\imgLand\thumbs-down.png"
                    className="w-[24px] h-[24px]"
                  />
                  <span>29</span>
                  <img
                    src="\imgLand\thumbs-up(1).png"
                    className="w-[24px] h-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile:block border-2 border-gray-300 mx-auto w-[800px] hidden"></div>
        <div className="mobile:w-[500px] mobile:h-[100px] w-[370px] h-[88px] border-2 border-blue-500 rounded-3xl mx-auto my-4 flex flex-row justify-center gap-4">
          <div className="  w-3/4 flex flex-col justify-center gap-1">
            <input
              className="ml-44"
              type="text"
              placeholder="عنوان نظر خود را بنویسید"
            ></input>
            <div className="border border-gray-300 mx-auto w-11/12"></div>
            <input
              className="ml-44"
              type="text"
              placeholder="متن نظر خود را بنویسید"
            ></input>
          </div>
          <div className="flex flex-row justify-center gap-1 items-center">
            <img
              className="w-[35px] h-[35px]"
              src="\imgLand\Group 105.png"
            ></img>
            <img
              className="w-[35px] h-[35px]"
              src="\imgLand\Group 104.png"
            ></img>
          </div>
        </div>
        {/* responsive */}
        <div className="bg-blue-500 my-6 cursor-pointer rounded-3xl mobile:hidden">
          <img className=" mx-auto" src="\imgLand\Frame 105.png"></img>
        </div>
      </section>
    </>
  );
};

export default index;
