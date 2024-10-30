import React from "react";

const blogsData = [
  {
    title: "زبان جاوا اسکریپت در چه حوزه ای به کار میرود؟",
    icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    author: "محمدحسین بحرالعلومی",
    date: "۲۳ فروردین ۱۴۰۳",
    views: "۳۰۴",
    color: "bg-yellow-300",
  },
  {
    title: "فیگما یا ادوبی ایکس‌دی؟",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    date: "۳۰ اردیبهشت ۱۴۰۳",
    views: "۲۴۰",
    color: "bg-red-400",
  },
  {
    title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
    icon: "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__",
    author: "محسن اسفندیاری",
    date: "۲۷ اردیبهشت ۱۴۰۳",
    views: "۳۱۲",
    color: "bg-cyan-200",
  },
  {
    title: "فیگما یا ادوبی ایکس‌دی؟",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    date: "۳۰ اردیبهشت ۱۴۰۳",
    views: "۲۴۰",
    color: "bg-red-400",
  },
];

const index = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col h-[2133px] md:h-[4093]">
        <div className="w-[1440px]">header</div>
        <div className="">
          <div className="flex flex-col w-[1440px]  justify-items-center text-center">
            <div className="flex-row md:flex-col flex  justify-center pl-10 md:pr-10 ">
              <div className="right h-[424px] w-[642px] order-1 md:order-2  ">
                <img
                  src="src/assets/BlogImg/Rectangle 9.png"
                  alt=""
                  className="w-[642px] h-[424px] md:w-[361px]"
                />
              </div>
              <div className="left order-2 md:order-1">
                <div className="1 w-[331px] text-4xl font-bold mb-10 mt-5 text-right text-nowrap pr-8">
                  <h2 className="">فیگما یا ادوبی ایکس‌دی؟</h2>
                </div>
                <div className="flex flex-row md:flex-col">
                  <div className="2 flex  p-2 md:m-2 ">
                    <div className="border rounded-2xl w-40 h-20  flex flex-col gap-1">
                      <h2 className="f1">دسته بندی</h2>{" "}
                      <lable className="bg-blue-500 w-[99px] h-[27px] text-white rounded-2xl f2 mr-1">
                        برنامه نویسی
                      </lable>
                    </div>
                    <div className="border rounded-2xl w-40 h-20	">
                      <h3 className="f1 pb-2 pr-2">منتشرکننده</h3>
                    </div>
                  </div>
                  <div className=" flex flex-row md:flex-col md:mr-0  mt-2 ">
                    <div className="flex md:mr-4">
                      <div className="border rounded-2xl w-40 h-20	flex flex-col ">
                        <h3 className="f1">تاریخ انتشار</h3>
                        <lable className="f2">29 اردیبهشت 1403</lable>
                      </div>
                      <div className="border rounded-2xl w-40 h-20	flex flex-col">
                        <h3 className="f1">بازدیدکنندگان</h3>
                        <lable className="f2">264 نفر</lable>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="3 flex p-2 m-2">
                  <div className="border rounded-2xl w-40 h-20 f1">
                    <h3 className="f1">تعداد لایک</h3>
                    <lable className="f2">220 نفر</lable>
                  </div>
                  <div className="border rounded-2xl w-40 h-20 f1">
                    <h3 className="f1"> تعداد دیس‌لایک</h3>
                    <lable className="f2">20 نفر</lable>
                  </div>
                </div>
                <div className="4 flex p-2">
                  <div className="flex">
                    <div className="flex p-1">
                      <img
                        src="src/assets/BlogImg/Star 7.png"
                        className=""
                        alt=""
                      />
                      <img
                        src="src/assets/BlogImg/Star 11.png"
                        className=""
                        alt=""
                      />
                      <img
                        src="src/assets/BlogImg/Star 11.png"
                        className=""
                        alt=""
                      />
                      <img
                        src="src/assets/BlogImg/Star 11.png"
                        className=""
                        alt=""
                      />
                      <img
                        src="src/assets/BlogImg/Star 11.png"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="f2 ">( 4 )</div>
                  </div>
                  <div className="f2 ">+</div>
                  <div className="f2 ">( 120 ) نظرات</div>
                </div>
                <div className="5 flex gap-1 cursor-pointer">
                  <div className="border-blue-500 border rounded-3xl w-60	h-12	flex justify-center gap-2 m-2  pt-2 md:hidden">
                    <img
                      src="src/assets/BlogImg/attachment-01.png"
                      className="h-6 w-6 "
                    />
                    <h3 className="text-blue-600 f3">کپی کردن لینک صفحه</h3>
                  </div>
                  <div className="w-[270px] h-[56px] mt-1 md:w-[217px] md:mr-2">
                    <img src="src/assets/BlogImg/Frame 85.png" className="" />
                  </div>
                  <div className="p-2 h-14 w-14 ">
                    <img src="src/assets/BlogImg/Group 109.png" className="" />
                  </div>
                  <div className="p-2 h-14 w-14">
                    <img src="src/assets/BlogImg/Group 110.png" className="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="  text-base m-2 w-[1360px] h-[92px] md:w-[361px] md:h-[345px] md:gap-1 md:pr-8 flex flex-col gap-10 ">
              <p className="text-pretty text-right justify-items-center md:pt-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <p className="text-right text-pretty block md:hidden">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <p className="text-right text-pretty">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <div className="m-3 flex gap-1 md:pb-5">
                <h3 className="w-[71px] h-[23px] text-blue-500 font-medium text-base">
                  امتیاز بدید
                </h3>
                <div className="flex gap-1">
                  <img
                    className="w-[28px] h-[28px]"
                    src="src/assets/BlogImg/Star 7.png"
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px]"
                    src="src/assets/BlogImg/Star 7.png"
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px]"
                    src="src/assets/BlogImg/Star 7.png"
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px]"
                    src="src/assets/BlogImg/Star 7.png"
                    alt=""
                  />
                  <img
                    className="w-[28px] h-[28px]"
                    src="src/assets/BlogImg/Star 7.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-96 md:pr-8 md:mt-0">
            <div className="mb-10 mr-8 md:mt-96 ">
              <h2 className="f4 f40 md:mb-0 md:mt-32 ">
                نظرات دانشجو ها و اساتید
              </h2>
            </div>
            <div className="main flex gap-1 flex-col ">
              <div className="flex flex-row gap-1 md:flex-col md:mt-2">
                <div className="">
                  <img
                    src="src/assets/BlogImg/Group 111.png"
                    className="cursor-pointer"
                  />
                </div>
                <div className="w-[324px] h-[282] bg-slate-100 rounded-xl p-2 mx-3">
                  <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                    خوب بود بد نبود
                  </div>
                  <div className="f2 w-[292px] h-[115px] pt-2">
                    واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                    اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم
                    توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو
                    گذاشتن😍{" "}
                  </div>
                  <div className="flex gap-8 mt-9">
                    <div className="r flex gap-1">
                      <img
                        src="src/assets/BlogImg/Flynn.png"
                        className="w-[40px] h-[40px] mt-5"
                        alt=""
                      />
                      <div className="flex flex-col mt-5">
                        <h2 className="">امیرحسین سهرابی</h2>
                        <h4 className="">29 اردیبهشت 1403</h4>
                      </div>
                    </div>
                    <div className="l flex gap-3 mt-8">
                      <div className="flex gap-1">
                        <img
                          src="src/assets/BlogImg/thumbs-up.png"
                          className="w-[24px] h-[24px]"
                        />
                        <h4 className="">۲۹</h4>
                      </div>
                      <div className="flex gap-1">
                        <img
                          src="src/assets/BlogImg/thumbs-down.png"
                          className="w-[24px] h-[24px]"
                        />
                        <h4 className="">۱</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[324px] h-[282] bg-slate-100 rounded-xl p-2 mx-3">
                  <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                    خوب بود بد نبود
                  </div>
                  <div className="f2 w-[292px] h-[115px] pt-2">
                    واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                    اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم
                    توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو
                    گذاشتن😍{" "}
                  </div>
                  <div className="flex gap-8 mt-9">
                    <div className="r flex gap-1">
                      <img
                        src="src/assets/BlogImg/Flynn.png"
                        className="w-[40px] h-[40px] mt-5"
                        alt=""
                      />
                      <div className="flex flex-col mt-5">
                        <h2 className="">امیرحسین سهرابی</h2>
                        <h4 className="">29 اردیبهشت 1403</h4>
                      </div>
                    </div>
                    <div className="l flex gap-3 mt-8">
                      <div className="flex gap-1">
                        <img
                          src="src/assets/BlogImg/thumbs-up.png"
                          className="w-[24px] h-[24px]"
                        />
                        <h4 className="">۲۹</h4>
                      </div>
                      <div className="flex gap-1">
                        <img
                          src="src/assets/BlogImg/thumbs-down.png"
                          className="w-[24px] h-[24px]"
                        />
                        <h4 className="">۱</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[324px] h-[282] bg-slate-100 rounded-xl p-2 mx-3">
                  <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                    خوب بود بد نبود
                  </div>
                  <div className="f2 w-[292px] h-[115px] pt-2">
                    واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                    اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم
                    توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو
                    گذاشتن😍{" "}
                  </div>
                  <div className="flex gap-8 mt-9">
                    <div className="r flex gap-1">
                      <img
                        src="src/assets/BlogImg/Flynn.png"
                        className="w-[40px] h-[40px] mt-5"
                        alt=""
                      />
                      <div className="flex flex-col mt-5">
                        <h2 className="">امیرحسین سهرابی</h2>
                        <h4 className="">29 اردیبهشت 1403</h4>
                      </div>
                    </div>
                    <div className="l flex gap-3 mt-8">
                      <div className="flex gap-1">
                        <img
                          src="src/assets/BlogImg/thumbs-up.png"
                          className="w-[24px] h-[24px]"
                        />
                        <h4 className="">۲۹</h4>
                      </div>
                      <div className="flex gap-1">
                        <img
                          src="src/assets/BlogImg/thumbs-down.png"
                          className="w-[24px] h-[24px]"
                        />
                        <h4 className="">۱</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1"></div>
              <div
                onClick={() => {}}
                className="border text-nowrap mx-auto mt-4 md:text-right md:mx-24 p-3 cursor-pointer w-[125px] text-center h-[39] rounded-3xl bg-black text-white"
              >
                مشاهده بیشتر
              </div>
            </div>
          </div>
          <div className="bartarBlog w-[1440px] mt-70 md:overflow-hidden md:w-[361px]  flex md:pr-8 md:flex-row">
            {/* کامپوننت ؟آماده بلاگ برتر */}

            <section className="py-16 ">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl text-right mr-3 font-bold mb-8 dark:text-white">
                  بلاگ های مرتبط
                </h2>
                <div className="md:flex flex  md:flex-wrap justify-center gap-8 mx-2 md:overflow-x-hidden">
                  {blogsData.map((blog, index) => (
                    <div
                      key={index}
                      className=" bg-white dark:bg-indigo-900 rounded-lg  flex-1 "
                    >
                      <div
                        className={`h-72 mx-auto flex justify-center items-center mb-4 rounded-xl ${blog.color}`}
                      >
                        <img src={blog.icon} alt={""} className={`size-48 `} />
                      </div>
                      <h3 className="flex text-l font-bold mb-2 dark:text-white">
                        {blog.title}
                      </h3>
                      <div className="flex justify-between mt-4 text-gray-500 space-x-2 rtl:space-x-reverse mb-2">
                        <p className="flex text-gray-400 dark:text-white text-sm items-center ">
                          {blog.author}
                        </p>
                        <div>
                          <span
                            className={`inline-flex items-center dark:text-white text-xs gap-2 w-32 `}
                          >
                            <i /> {blog.date}
                            {/* <BsCalendar4Week /> */}
                          </span>
                          <span className="inline-flex items-center dark:text-white text-xs gap-2">
                            <i /> {blog.views}
                            {/* <BsEye /> */}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="bg-gray-900 md:items-left dark:bg-blue-500 text-white px-5 py-1.5 rounded-full mt-8">
                  مشاهده بیشتر
                </button>
                <div className="border-2 border-gray-200 mt-40"></div>
              </div>
            </section>
          </div>
        </div>
        <div className="w-[1440px] mt-96">footer</div>
      </div>
    </>
  );
};

export default index;
