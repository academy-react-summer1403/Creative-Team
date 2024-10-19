import React from "react";

const index = () => {
  return (
    <>
      <section className="  flex gap-8 mobile:w-[1300px] w-[393px] mx-auto mt-8  flex-col">
        <section className="w-full  mobile:flex mobile:flex-row justify-between gap-10 my-10 mx-auto flex flex-col items-center">
          <div className="  flex flex-col gap-5 items-center my-5 mobile:w-72 mobile:mx-auto ">
            <h4 className="font-serif text-black leading-8 text-lg font-medium not-italic mobile:text-right text-center">
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
        <section className="flex flex-row mobile:justify-between my-8 h-4/5  justify-start ">
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
        <section className=" w-full my-8 flex flex-col gap-5">
          <div className="font-semibold mobile:text-3xl text-2xl font-serif not-italic text-center">
            اهداف ما در آکادمی
          </div>
          <div className=" mobile:flex mobile:flex-row justify-center mobile:gap-3  items-center flex-col">
            <div className=" bg-white mobile:w-1/4 w-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
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
            <div className=" bg-white mobile:w-1/4 w-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
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
            <div className=" bg-white mobile:w-1/4 w-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
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
            <div className=" bg-white mobile:w-1/4 w-full border-2 border-gray-300 rounded-2xl flex flex-col gap-2 my-8">
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
        <section className=" w-full my-8 flex flex-col gap-3 items-center">
          <div className="font-bold mobile:text-3xl text-2xl text-black leading-10 mobile:w-96 mobile:h-38 w-[280px] h-[80px] text-center">
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
              <div className="boxIcon boxIcon1"></div>
            </div>
            <div className="border border-gray-300 bg-gray-100 mobile:w-[500px] mobile:h-[110px] w-[361px] h-[235px] rounded-2xl my-3 mx-auto relative">
              <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mobile:mt-10 mobile:mr-24 mt-24 mr-6">
                مدرک معتبر
              </h2>
              <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mobile:mr-24 mr-6">
                با مدرک ما میتوانید به راحتی در همه جا استخدام بشید
              </p>
              <div className="boxIcon boxIcon2"></div>
            </div>
            <div className="border border-gray-300 bg-gray-100 mobile:w-[500px] mobile:h-[110px] w-[361px] h-[235px] rounded-2xl my-3 mx-auto relative">
              <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mobile:mt-10 mobile:mr-24 mt-24 mr-6">
                فرصت های شغلی
              </h2>
              <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mobile:mr-24 mr-6">
                با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده
                میشه
              </p>
              <div className="boxIcon boxIcon3"></div>
            </div>
            <div className="border border-gray-300 bg-gray-100 mobile:w-[500px] mobile:h-[110px] w-[361px] h-[235px] rounded-2xl my-3 mx-auto relative">
              <h2 className="font-serif not-italic font-bold text-right text-xl text-black leading-7 mobile:mt-10 mobile:mr-24 mt-24 mr-6">
                مشاوره 24ساعته
              </h2>
              <p className=" font-serif not-italic font-normal text-sm leading-6 text-right text-gray-400 mobile:mr-24 mr-6">
                مشاورین ما 24 ساعته جوابگو سوال های شما هستند
              </p>
              <div className="boxIcon boxIcon4"></div>
            </div>
          </div>
        </section>
        {/* *************************** Top Course***********************  */}
        <section className=" w-full my-8  flex flex-col gap-3 items-center">
          <div className=" font-bold mobile:text-3xl text-2xl text-black leading-10 text-center">
            دوره های برتر هفته
          </div>
          <div className="w-full flex flex-row gap-4 my-0">
            <div className=" flex flex-col items-start p-0 gap-2 mobile:w-1/2 w-11/12">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 12.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" font-serif not-italic mobile:font-bold font-semibold mobile:text-2xl text-sm mobile:leading-9 leading-6 text-right text-black">
                  دوره طراحی سایت
                </h3>
                <div className=" flex flex-row justify-between gap-20">
                  <div className="  flex flex-row gap-1">
                    <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                      تومان
                    </span>
                    <span className="mobile:text-base text-xs"> 500000</span>
                  </div>
                  <span className="  w-[140px] font-serif font-normal text-sm text-gray-700 text-right">
                    رضا ساداتی
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start p-0 gap-2  mobile:w-1/2 w-11/12">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 11.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic mobile:font-bold font-semibold mobile:text-2xl text-sm mobile:leading-9 leading-6 text-right text-black">
                  دوره جاوا اسکریپت
                </h3>
                <div className="flex flex-row justify-between gap-32">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                      تومان
                    </span>
                    <span className="mobile:text-base text-xs"> 500000</span>
                  </div>
                  <span className=" w-[140px] font-serif font-normal text-sm text-gray-700 text-right">
                    رضا ساداتی
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start p-0 gap-2 mobile:w-1/2 w-11/12">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 10.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic mobile:font-bold font-semibold mobile:text-2xl text-sm mobile:leading-9 leading-6 text-right text-black">
                  دوره فیگما
                </h3>
                <div className="flex flex-row justify-between gap-32">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                      تومان
                    </span>
                    <span className="mobile:text-base text-xs"> 500000</span>
                  </div>
                  <span className=" w-[140px] font-serif font-normal text-sm text-gray-700 text-right">
                    رضا ساداتی
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start p-0 gap-2 mobile:w-1/2 w-11/12">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 9.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic mobile:font-bold font-semibold mobile:text-2xl text-sm mobile:leading-9 leading-6 text-right text-black">
                  دوره ریکت
                </h3>
                <div className="flex flex-row justify-between gap-32">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                      تومان
                    </span>
                    <span className="mobile:text-base text-xs"> 500000</span>
                  </div>
                  <span className=" border border-blue-500 w-[140px] font-serif font-normal text-sm text-gray-700 text-right">
                    رضا ساداتی
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
        <section className="w-full my-8  flex flex-col gap-3 items-center">
          <div className=" font-bold mobile:text-3xl text-2xl text-black leading-10 text-center">
            بلاگ های برتر هفته
          </div>
          <div className="  flex flex-row gap-4 my-0 mx-auto">
            <div className=" flex flex-col items-start p-0 gap-2 mobile:w-1/3 w-11/12">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 8.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" font-serif not-italic mobile:font-bold font-semibold mobile:text-2xl text-sm mobile:leading-9 leading-6 text-right text-black">
                  دوره طراحی سایت
                </h3>
                <div className=" flex flex-row justify-between gap-20">
                  <div className="  flex flex-row gap-1">
                    <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                      دیدگاه
                    </span>
                    <span className="mobile:text-base text-xs"> تاریخ</span>
                  </div>
                  <span className="  w-[140px] font-serif font-normal text-sm text-gray-700 text-right">
                    رضا ساداتی
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start p-0 gap-2  mobile:w-1/3 w-11/12">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 13.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic mobile:font-bold font-semibold mobile:text-2xl text-sm mobile:leading-9 leading-6 text-right text-black">
                  دوره جاوا اسکریپت
                </h3>
                <div className="flex flex-row justify-between gap-32">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                      دیدگاه
                    </span>
                    <span className="mobile:text-base text-xs"> تاریخ</span>
                  </div>
                  <span className=" w-[140px] font-serif font-normal text-sm text-gray-700 text-right">
                    رضا ساداتی
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-start p-0 gap-2 mobile:w-1/3 w-11/12">
              <img
                className="w-full h-3/4 rounded-lg flex flex-row"
                src="\imgLand\Group 14.png"
              ></img>
              {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
              {/* <span className="catOfCourse">برنامه نویسی</span> */}

              <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                <h3 className=" mt-0 h-34px font-serif not-italic mobile:font-bold font-semibold mobile:text-2xl text-sm mobile:leading-9 leading-6 text-right text-black">
                  دوره فیگما
                </h3>
                <div className="flex flex-row justify-between gap-32">
                  <div className="flex flex-row gap-1">
                    <span className="font-serif mobile:font-medium font-normal mobile:text-lg text-sm text-black">
                      دیدگاه
                    </span>
                    <span className="mobile:text-base text-xs"> تاریخ</span>
                  </div>
                  <span className=" w-[140px] font-serif font-normal text-sm text-gray-700 text-right">
                    رضا ساداتی
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-32 h-10 bg-black rounded-3xl my-0  text-white text-center text-ms leading-9 font-light laptop:mx-auto mx-72">
            مشاهده بیشتر
          </div>
        </section>
        {/* ********************************* */}
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
              در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر
              خود تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در
              زمینه‌های مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های
              دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره،
              فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.
            </p>
            <div className="bg-blue-500 rounded-3xl w-[100px] text-white text-center cursor-pointer mobile:text-sm text-xs mr-9">
              صفحه اساتید
            </div>
          </div>
        </section>
      </section>
      <div className="border-t border-gray-400 w-[1300px] mx-auto mb-7"></div>
    </>
  );
};

export default index;
