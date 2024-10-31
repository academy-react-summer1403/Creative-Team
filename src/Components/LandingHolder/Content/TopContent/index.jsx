import React from "react";

const index = () => {
  return (
    <>
      <section className="w-full  mobile:flex mobile:flex-row justify-between gap-10 my-20 mx-auto flex flex-col items-center">
        <div className="  flex flex-col gap-5 items-center my-5 mobile:w-72 mobile:mx-auto ">
          <h4 className="font-serif text-black dark:text-white leading-8 text-lg font-medium not-italic mobile:text-right text-center">
            همین حالا
            <br />
            !شروع کن به یادگیری
          </h4>
          <div className="w-40 h-12 bg-gray-950 dark:bg-gray-700 rounded-3xl font-serif text-center text-white leading-10 text-lg font-medium not-italic">
            جدیدترین دوره ها
          </div>
        </div>
        <div className="  flex flex-col gap-3 mobile:w-72 mx-auto">
          <div className="font-serif text-center text-black dark:text-white leading-10 text-3xl font-bold not-italic ">
            آموزش مدرن
            <br />
            پیشرفت سریع
          </div>
          <div className="font-serif text-center text-gray-800 dark:text-white leading-8 text-lg font-medium not-italic">
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
    </>
  );
};

export default index;
