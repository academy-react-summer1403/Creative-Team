import React from "react";

const index = () => {
  return (
    <>
      <section className=" mobile:w-[1200px] mx-auto my-12 flex flex-col items-center w-[393px]">
        <div className=" flex w-full flex-col justify-items-center text-center my-12">
          <div className=" mobile:flex mobile:flex-row mobile:justify-between mobile:gap-1 flex-col justify-center gap-3">
            <div className=" mb-3">
              <div className="mobile:text-4xl font-bold mb-10 mt-5 text-right text-nowrap pr-8 text-2xl">
                <h2 className=""> دوره جاوااسکریپت </h2>
              </div>
              <div className=" flex p-2 m-2 ">
                <div className="border rounded-l-2xl w-40 h-20  flex flex-col gap-6">
                  <h2 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                    استاددوره
                  </h2>
                  <span className="text-black text-xs text-right mr-3">
                    محمدحسین بحرالعلومی
                  </span>
                </div>
                <div className="border w-40 h-20 flex flex-col items-end gap-5">
                  <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xsmobile:text-sm text-xs text-gray-500">
                    سطح آموزشی
                  </h3>
                  <lable className=" bg-pink-400 rounded-xl w-[70px] h-[25px] mr-2">
                    <span className=" text-white mobile:text-sm text-xs text-center">
                      پیشرفته
                    </span>
                  </lable>
                </div>
                <div className="border w-40 h-20	flex flex-col items-end gap-5">
                  <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                    دسته بندی{" "}
                  </h3>
                  <lable className=" bg-blue-400 rounded-xl w-[100px] h-[25px] mr-3">
                    <span className=" text-white mobile:text-sm text-xs text-center">
                      برنامه نویسی
                    </span>
                  </lable>
                </div>
                <div className="border rounded-r-2xl w-40 h-20 flex flex-col items-end gap-5">
                  <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                    وضعیت
                  </h3>
                  <lable className=" bg-orange-700 rounded-xl w-[90px] h-[25px] mr-3">
                    <span className=" text-white mobile:text-sm text-xs text-center">
                      درحال برگزاری
                    </span>
                  </lable>
                </div>
              </div>
              <div className=" flex p-2 m-2 ">
                <div className="border rounded-l-2xl w-40 h-20  flex flex-col gap-6">
                  <h2 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                    تعداد دیس لایک
                  </h2>
                  <span className="text-black text-xs text-right mr-3">
                    20نفر
                  </span>
                </div>
                <div className="border w-40 h-20 flex flex-col items-end gap-5">
                  <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                    تعدادلایک
                  </h3>
                  <span className="text-black text-xs text-right mr-3">
                    220 نفر
                  </span>
                </div>
                <div className="border w-40 h-20	flex flex-col items-end gap-5">
                  <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                    تاریخ اتمام
                  </h3>
                  <span className="text-black text-xs text-right mr-3">
                    خرداد1403
                  </span>
                </div>
                <div className="border rounded-r-2xl w-40 h-20 flex flex-col items-end gap-5">
                  <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                    تاریخ برگزاری
                  </h3>
                  <span className="text-black text-xs text-right mr-3">
                    فروردین 1403
                  </span>
                </div>
              </div>
              <div className=" flex flex-row justify-between my-8  mx-16 py-2 text-xs">
                <div className="hidden laptop:flex flex-row justify-center gap-2">
                  <span className="inline">تومان</span>
                  <span className="inline font-bold text-sm">2500000</span>
                </div>
                <div className="flex flex-row justify-center gap-1">
                  <span>نظرات</span>
                  <span>
                    (<span>120</span>)
                  </span>
                  <span>+</span>
                  <div className="flex flex-row cursor-pointer">
                    <img src="public\imgLand\Star 8.png"></img>
                    <img src="public\imgLand\Star 8.png"></img>
                    <img src="public\imgLand\Star 8.png"></img>
                    <img src="public\imgLand\Star 8.png"></img>
                    <img src="public\imgLand\Star 7.png"></img>
                  </div>
                  <span>
                    (<span>4</span>)
                  </span>
                </div>
              </div>
              <div className=" flex flex-row justify-center gap-2 cursor-pointer">
                <div className="">
                  <img src="\imgLand\Group 109.png" className="" />
                </div>
                <div className="">
                  <img src="\imgLand\Group 110.png" className="" />
                </div>
                <div className="">
                  <img src="\imgLand\Frame 85.png"></img>
                </div>
                <div className="hidden laptop:block">
                  <img src="\imgLand\Frame 84.png" className="" />
                </div>
              </div>
            </div>
            <div className="  mobile:w-1/2 w-full m-auto">
              <img
                src="\imgLand\Group 14.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="  text-base my-14 flex flex-col gap-9 ">
            <h2 className="text-gray-400 text-right font-extrabold text-2xl">
              توضیحات دوره
            </h2>
            <p className="text-sm text-gray-900 text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.
            </p>
            <p className="text-sm text-gray-900 text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="mobile:flex mobile:flex-row justify-end gap-8 text-sm flex flex-col-reverse ml-36">
              <div className="border border-blue-500 rounded-2xl w-[200px] flex flex-row justify-center gap-4 py-1">
                <div className="text-blue-500 font-bold">
                  کپی کردن لینک صفحه
                </div>
                <img
                  className="w-[20px] h-[20px] mt-1"
                  src="\imgLand\Vector.png"
                ></img>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-row gap-2">
                  <img
                    className="w-[28px] h-[28px]"
                    src="\imgLand\Star 7.png"
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px]"
                    src="\imgLand\Star 7.png"
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px]"
                    src="\imgLand\Star 7.png"
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px]"
                    src="\imgLand\Star 7.png"
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px]"
                    src="\imgLand\Star 7.png"
                    alt=""
                  />
                </div>
                <h3 className=" text-blue-500 text-sm font-bold mt-1">
                  امتیاز بدید
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="  w-full flex flex-col justify-items-center gap-1 my-8">
          <div className=" my-0 font-extrabold text-2xl text-gray-400 leading-10 text-right">
            نظرات دانشجوهاواساتید
          </div>
          <div className="mobile:flex gap-2 mobile:flex-row flex flex-col-reverse">
            <div className="  mobile:flex mobile:flex-row gap-2 flex flex-col-reverse">
              <div className=" bg-slate-100 rounded-xl p-2 mx-3">
                <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                  <h2 className="text-right"> خوب بود بد نبود</h2>
                </div>
                <div className=" w-[292px] h-[115px] pt-2">
                  <p>
                    {" "}
                    واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                    اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم
                    توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو
                    گذاشتن😍{" "}
                  </p>
                </div>
                <div className="flex gap-8 mt-9">
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
                  <div className="r flex gap-1">
                    <div className="flex flex-col mt-5">
                      <h2 className="text-sm text-right">امیرحسین سهرابی</h2>
                      <h4 className="text-gray-400 text-base">
                        29 اردیبهشت 1403
                      </h4>
                    </div>
                    <img
                      src="\imgLand\Bling.png"
                      className="w-[40px] h-[40px] mt-5"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" bg-slate-100 rounded-xl p-2 mx-3">
                <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                  <h2 className="text-right"> خوب بود بد نبود</h2>
                </div>
                <div className=" w-[292px] h-[115px] pt-2">
                  <p>
                    {" "}
                    واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                    اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم
                    توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو
                    گذاشتن😍{" "}
                  </p>
                </div>
                <div className="flex gap-8 mt-9">
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
                  <div className="flex gap-1">
                    <div className="flex flex-col mt-5">
                      <h2 className="text-sm text-right">امیرحسین سهرابی</h2>
                      <h4 className="text-gray-400 text-base">
                        29 اردیبهشت 1403
                      </h4>
                    </div>
                    <img
                      src="\imgLand\Graggle – 03.png"
                      className="w-[40px] h-[40px] mt-5"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" bg-slate-100 rounded-xl p-2 mx-3">
                <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                  <h2 className="text-right"> خوب بود بد نبود</h2>
                </div>
                <div className=" w-[292px] h-[115px] pt-2">
                  <p>
                    {" "}
                    واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                    اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم
                    توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو
                    گذاشتن😍{" "}
                  </p>
                </div>
                <div className="flex gap-8 mt-9">
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
                  <div className=" flex gap-1">
                    <div className="flex flex-col mt-5">
                      <h2 className="text-sm text-right">امیرحسین سهرابی</h2>
                      <h4 className="text-gray-400 text-base">
                        29 اردیبهشت 1403
                      </h4>
                    </div>
                    <img
                      src="\imgLand\Bling.png"
                      className="w-[40px] h-[40px] mt-5"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="m-auto">
              <img src="\imgLand\Group 111.png"></img>
            </div>
          </div>
          <div
            onClick={() => {}}
            className="border text-nowrap mx-auto mt-4 p-3 cursor-pointer w-[125px] text-center h-[39] rounded-3xl bg-black text-white"
          >
            مشاهده بیشتر
          </div>
        </div>

        <div className=" w-full my-14  flex flex-col gap-3">
          <div className=" my-0 font-extrabold text-2xl text-gray-400 leading-10 text-right">
            دوره های مرتبط
          </div>
          <div className=" w-full h-3/4 my-0 mx-auto mobile:flex mobile:flex-row gap-6 flex flex-col">
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
        </div>

        {/* responsive */}
        <div className="laptop:hidden  w-full flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center gap-2">
            <span className="inline">تومان</span>
            <span className="inline font-bold text-sm mt-1">2500000</span>
          </div>
          <div className="">
            <img src="\imgLand\Frame 84.png" className="" />
          </div>
        </div>
      </section>
      {/* ******************** Modals ******************* */}
      <section className="mobile:w-[430px] w-[393px] border border-gray-400 rounded-2xl mx-auto flex flex-col justify-items-center gap-6">
        {/* *****After Reserve */}
        <div className="text-center text-blue-500 font-bold mt-5">
          <h1>!دوره به لیست دوره های رزرو شده شما اضافه شد</h1>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <div className="w-[250px]">
            <p className="mt-20 text-center font-serif text-lg">
              بعد از تایید ادمین ، دوره مورد نظر به لیست "دوره من" شما اضافه
              خواهد شد
            </p>
          </div>
          <div className="flex flex-col justify-center items-end">
            <img className="mr-2" src="\imgLand\Line 13.png"></img>
            <div className="flex flex-row justify-center gap-4 items-center">
              <div className="font-serif font-bold text-sm">رزرو من</div>
              <div className="w-[17px] h-[17px] border-2 border-gray-400 rounded-full"></div>
            </div>
            <img className="mr-2" src="\imgLand\Line 14.png"></img>
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="font-serif font-bold text-sm">دوره من</div>
              <div className="w-[17px] h-[17px] border-2 border-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-9 mb-3">
          <botton className="bg-gray-300 rounded-3xl w-[130px] text-center font-serif font-bold py-2 px-3">
            باشه
          </botton>
          <botton className="rounded-3xl w-[180px] text-center font-serif font-bold py-2 px-3 bg-blue-500 text-white">
            رزرو من
          </botton>
        </div>
      </section>

      <section className="mobile:w-[851px] w-[393px] border border-gray-400 rounded-2xl my-4 mx-auto ">
        {/* Comment Modal */}
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
