import React from "react";

const index = () => {
  return (
    <>
      <section className=" w-full my-8 flex flex-col gap-3 items-center">
        <div className="font-bold mobile:text-3xl text-2xl text-black leading-10 mobile:w-96 mobile:h-38 w-[280px] h-[80px] text-center dark:text-white">
          خدماتی که ما در طی دوره ها به شما ارائه میدهیم
        </div>
        <div className=" w-full flex flex-wrap items-center">
          <div className="border border-gray-300 bg-gray-100 mobile:w-[500px] mobile:h-[110px] w-[361px] h-[235px] rounded-2xl my-3 mx-auto relative">
            <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mobile:mt-10 mobile:mr-24 mt-24 mr-6">
              آزمون ها
            </h2>
            <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mobile:mr-24 mr-6">
              با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید
            </p>
            <div className="boxIcon boxIcon1 dark:bg-gray-950"></div>
          </div>
          <div className="border border-gray-300 bg-gray-100 mobile:w-[500px] mobile:h-[110px] w-[361px] h-[235px] rounded-2xl my-3 mx-auto relative">
            <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mobile:mt-10 mobile:mr-24 mt-24 mr-6">
              مدرک معتبر
            </h2>
            <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mobile:mr-24 mr-6">
              با مدرک ما میتوانید به راحتی در همه جا استخدام بشید
            </p>
            <div className="boxIcon boxIcon2 dark:bg-gray-950"></div>
          </div>
          <div className="border border-gray-300 bg-gray-100 mobile:w-[500px] mobile:h-[110px] w-[361px] h-[235px] rounded-2xl my-3 mx-auto relative">
            <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mobile:mt-10 mobile:mr-24 mt-24 mr-6">
              فرصت های شغلی
            </h2>
            <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mobile:mr-24 mr-6">
              با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه
            </p>
            <div className="boxIcon boxIcon3 dark:bg-gray-950"></div>
          </div>
          <div className="border border-gray-300 bg-gray-100 mobile:w-[500px] mobile:h-[110px] w-[361px] h-[235px] rounded-2xl my-3 mx-auto relative">
            <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mobile:mt-10 mobile:mr-24 mt-24 mr-6">
              مشاوره 24ساعته
            </h2>
            <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mobile:mr-24 mr-6">
              مشاورین ما 24 ساعته جوابگو سوال های شما هستند
            </p>
            <div className="boxIcon boxIcon4 dark:bg-gray-950"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
