import React from "react";

const index = () => {
  return (
    <>
      <section className="mobile:w-[1300px] w-[395px] bg-black rounded-3xl mobile:flex mobile:flex-row justify-center gap-3 flex flex-col-reverse my-4">
        <div className="hidden mobile:block  my-8 mx-6 mobile:w-[768px] w-[350px]">
          <img className="w-full" src="\imgLand\Frame 53(1).png"></img>
        </div>
        {/* responsive */}
        <div className="  my-8 mx-6 mobile:hidden">
          <img className="w-full" src="\imgLand\Rectangle 13.png"></img>
        </div>
        <div className="  mobile:w-[527px] w-[350px] my-12 mx-6 flex flex-col justify-between gap-4 items-end">
          <h1 className="text-white mobile:font-bold font-semibold mobile:text-lg text-sm mr-2">
            اساتید برتر هفته آکادمی
          </h1>
          <p className="text-white text-right  mobile:text-sm text-xs mr-4">
            در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود
            تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های
            مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک
            کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و
            انگیزشی را برای یادگیری فراهم آورده‌اند.
          </p>
          <div className="bg-blue-500 rounded-3xl w-[100px] text-white text-center cursor-pointer mobile:text-sm text-xs mr-9">
            صفحه اساتید
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
