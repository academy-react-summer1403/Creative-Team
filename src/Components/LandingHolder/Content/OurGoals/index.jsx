import React from "react";

const index = () => {
  return (
    <>
      <section className="  w-full my-8 flex flex-col gap-5">
        <div className="font-semibold mobile:text-3xl text-2xl font-serif not-italic text-center text-black dark:text-white">
          اهداف ما در آکادمی
        </div>
        <div className=" mobile:flex mobile:flex-row justify-center mobile:gap-3  items-center flex-col text-black">
          <div className=" bg-white mobile:w-1/4 w-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
            <h3 className="mr-3 text-right  text-xl font-bold font-serif not-italic leading-7">
              آماده سازی برای بازار کار
            </h3>
            <p className=" mr-3 text-right text-sm text-gray-600 font-serif not-italic leading-7">
              جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین
              المللی کاریابی و آماده سازی برای شرکت ها
            </p>
            <img
              className=" w-52 h-48 mx-auto"
              src="imgLand/3d-hygge-open-window-with-active-sprints 1.png"
            />
          </div>
          <div className=" bg-white mobile:w-1/4 w-full  border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
            <h3 className="mr-3 text-right text-xl font-bold font-serif not-italic leading-7">
              آموزش های تخصصی
            </h3>
            <p className=" mr-3 text-right text-sm text-gray-600 font-serif not-italic leading-7">
              کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال
              و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...
            </p>
            <img
              className=" w-52 h-40 mx-auto"
              src="imgLand/3d-hygge-colleagues-discussing-the-project-in-vr 1.png"
            />
          </div>
          <div className=" bg-white mobile:w-1/4 w-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
            <h3 className="mr-3 text-right text-xl font-bold font-serif not-italic leading-7">
              راهنمایی و ایجاد انگیزه
            </h3>
            <p className=" mr-3 text-right text-sm text-gray-600 font-serif not-italic leading-7">
              آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور
              برای تحریک ذهنیت خلاق در طول فرآیند آموزش
            </p>
            <img
              className=" w-52 h-48 mx-auto"
              src="imgLand/3d-hygge-isometric-view-of-man-leaning-on-chair-and-talking-to-young-woman 1.png"
            />
          </div>
          <div className=" bg-white mobile:w-1/4 w-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
            <h3 className="mr-3 text-right text-xl font-bold font-serif not-italic leading-7">
              استعدادیابی
            </h3>
            <p className=" mr-3 text-right text-sm text-gray-600 font-serif not-italic leading-7">
              یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف
              نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...
            </p>
            <img
              className=" w-52 h-48 mx-auto"
              src="imgLand/3d-hygge-isometric-view-of-young-woman-and-man-discussing-the-project 1.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
