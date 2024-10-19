import React from "react";

const index = () => {
  return (
    <>
      <section className=" mobile:w-[1200px] w-[393px] mx-auto">
        <div className=" flex flex-col justify-between items-center  laptop:gap-5 gap-3">
          <h1 className="font-bold font-serif mobile:text-3xl text-xl">
            شروع ماجراجویی جدید
          </h1>
          <p className="mobile:text-sm text-xs text-gray-500 font-serif text-center">
            یک شروع قوی برای یادگیری یک مسئله <br></br>جدید می تونه تو پیشرفت
            کمک کنه
          </p>
        </div>
        <div className=" flex justify-center  gap-8 mt-4">
          <div className=" w-3/4 ">
            <div className=" hidden mobile:block mobile:flex flex-row justify-end mr-10 mt-4 font-serif text-center font-semibold">
              <ul className="py-2">
                <li className="inline border border-gray-600 rounded-3xl mx-2 py-1 px-2 font-serif text-center font-semibold">
                  ارزان ترین
                </li>
                <li className="inline border border-gray-600 rounded-3xl mx-2 py-1 px-2 font-serif text-center font-semibold">
                  گران ترین
                </li>
                <li className="inline border border-gray-600 rounded-3xl mx-3 py-1 px-2 font-serif text-center font-semibold">
                  محبوب ترین
                </li>
                <li className="inline border border-red-600 rounded-3xl mr-4 py-1 px-3 text-red-600 font-serif text-center font-semibold">
                  جدید ترین
                </li>
                <li className="inline  text-black font-serif text-center font-bold text-xl">
                  ترتیب{" "}
                </li>
              </ul>
            </div>
            <div className=" flex flex-row justify-between my-3 mobile:hidden">
              <div className="w-[60px]">
                <img src="\imgLand\Frame 24.png"></img>
              </div>
              <div className="w-[60px]">
                <img src="\imgLand\Frame 23.png"></img>
              </div>
            </div>
            <div className="  flex flex-col items-center gap-5">
              <div className="  ml-5 flex flex-wrap justify-around gap-1">
                <div className=" flex flex-col items-start  w-1/4 p-0 gap-2">
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
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
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
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
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
                    <div className=" flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
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
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
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
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
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
                    <div className=" flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
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
                    <div className="  flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
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
                    <div className=" flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-start w-1/4 p-0 gap-2">
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
                    <div className=" flex flex-row justify-between">
                      <div className="flex flex-row gap-1">
                        <span className="font-serif font-semibold text-sm text-black">
                          تومان
                        </span>
                        <span className="text-sm"> 500000</span>
                      </div>
                      <span className="font-serif font-normal text-sm text-gray-700">
                        محمدحسین بحرالعلومی
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ********************* pagition  */}
              <div className=" my-10 mobile:w-[350px] w-[250px]">
                <div className="bg-gray-200 p-4 rounded-2xl flex flex-row justify-between gap-6">
                  <img src="\imgLand\arrow-left-01.png"></img>
                  <i>1</i>
                  <i>2</i>
                  <i>3</i>
                  <i>4</i>
                  <img src="\imgLand\arrow-left.png"></img>
                </div>
                {/* <Swiper
                  className=" border border-blue-600 w-96 flex flex-row justify-center gap-1"
                  modules={[Navigation]}
                  navigation
                  pagination
                >
                  <SwiperSlide>
                    <img src="\imgLand\Frame 9(1).png" />
                    <noscript>
                      <img decoding="async" src="/img/sample1.png" />
                    </noscript>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      decoding="async"
                      src="\imgLand\Frame 10.png"
                      data-lazy-src="/img/sample2.png"
                    />
                    <noscript>
                      <img decoding="async" src="/img/sample2.png" />
                    </noscript>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      decoding="async"
                      src="\imgLand\Frame 11.png"
                      data-lazy-src="/img/sample3.png"
                    />
                  </SwiperSlide>
                </Swiper> */}
              </div>
            </div>
          </div>
          {/* ***************************************filter */}
          <div className="hidden mobile:block border border-gray-400 w-1/4 h-2/4 rounded-3xl mt-20 flex flex-col items-end gap-6 mr-5">
            <h1 className="font-serif font-bold text-3xl mr-7 mt-4">فیلتر</h1>
            {/* جست جو */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-xl font-serif">جستجو</span>
                <img src="\imgLand\search-01-stroke-rounded 1.png"></img>
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-200 w-full p-3 rounded-xl"
                  type="text"
                ></input>
                <img
                  className="bg-blue-600 rounded-xl -mt-10 ml-1 p-2"
                  src="\imgLand\search-01-stroke-rounded 2.png"
                ></img>
              </div>
            </div>
            {/* دسته یندی */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-xl font-serif">دسته بندی</span>
                <img src="public\imgLand\cells-stroke-rounded 1.png"></img>
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-200 w-full p-3 rounded-xl"
                  type="text"
                ></input>
                <img
                  className="-mt-10 ml-1 p-2"
                  src="\imgLand\arrow-down-01.png"
                ></img>
              </div>
            </div>
            {/* سطح آموزشی */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-xl font-serif">سطح آموزشی</span>
                <img src="\imgLand\layers-01-stroke-rounded 2.png"></img>
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-200 w-full p-3 rounded-xl"
                  type="text"
                ></input>
                <img
                  className="-mt-10 ml-1 p-2"
                  src="\imgLand\arrow-down-01.png"
                ></img>
              </div>
            </div>
            {/* اساتید */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-2xl font-serif">اساتید</span>
                <img src="\imgLand\teacher-stroke-rounded 1.png"></img>
              </div>
              <div className="mt-2">
                <input
                  className="bg-gray-200 w-full p-3 rounded-xl"
                  type="text"
                ></input>
                <img
                  className="-mt-10 ml-1 p-2"
                  src="\imgLand\arrow-down-01.png"
                ></img>
              </div>
            </div>
            {/* قیمتها */}
            <div className="w-11/12 mr-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-2xl font-serif">قیمت</span>
                <img src="\imgLand\money-04-stroke-rounded 2.png"></img>
              </div>
              <div className="flex flex-row justify-between mt-2">
                <div>
                  <span className="ml-2">تا</span>
                  <span>1000000</span>
                </div>
                <div>
                  <span className="ml-2">از</span>
                  <span>1000</span>
                </div>
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <input className="w-1/3" type="range"></input>
                <input className="w-1/3" type="range"></input>
              </div>
            </div>
            {/* تاریخ */}
            <div className="w-11/12 mr-3 mb-3">
              <div className="flex flex-row justify-end gap-2">
                <span className="text-xl font-serif">تاریخ برگزاری-اتمام</span>
                <img
                  className="text-xl font-serif"
                  src="public\imgLand\calendar-02-stroke-rounded 2.png"
                ></img>
              </div>
              <input
                className="bg-gray-200 w-full p-3 rounded-xl text-center mt-2"
                type=""
                placeholder="خرداد 1403- اردیبهشت1403"
              ></input>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
