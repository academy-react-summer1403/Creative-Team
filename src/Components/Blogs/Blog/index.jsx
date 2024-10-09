import React from "react";

const blog = () => {
  return (
    <>
      <div className="sourcePage ">
        {" "}
        <div className="flex flex-col ">
          <div className="blogHeader flex justify-between">
            <div className="right flex flex-row">
              <div className="">
                1
                <img src="" />
              </div>
              <div className="">
                2
                <img src="" />
              </div>
            </div>
            <div className="centre flex">
              <div className="">خانه</div>
              <div className="">دوره ها</div>
              <div className="">بلاگ ها</div>
              <div className="">درباره ما</div>
              <div className="">آیکون</div>
            </div>
            <div className="left flex">
              <div className="">
                NotifImg
                <img />
              </div>
              <div className="">
                DarkImg
                <img />
              </div>
            </div>
          </div>
          <div className="">
            <div className="topheader">
              <h2 className="text-nowrap font-medium mt-8	text-4xl	 pb-2">
                اطلاعات بیشتر ، درک بهتر
              </h2>
            </div>
            <div className="bottomHeader	flex flex-col justify-center mt-2">
              <p className="text-wrap font-medium	text-lg pb-2 text-gray-400">
                ما در بلاگ ها اطلاعات شما رو نسبت به تکنولوژی ای که یاد میگیرید
                بیشتر میکنیم{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="blogMain flex place-self-start gap-8 justify-start ">
          <div className="right flex flex-col text-right border-2  rounded-3xl p-4 gap-1 w-72 h-96 justify-between">
            <h2 className="font-bold text-2xl	">فیلتر</h2>
            <div className="flex gap-1">
              <img
                src="./src/assets/BlogImg/search-01-stroke-rounded 1.png"
                className=""
              />
              <h2 className="font-medium text-black	text-base"> جستجو</h2>
            </div>
            <div className="bg-gray-200 rounded-2xl  w-56	h-12	flex">
              <input
                className="bg-gray-200 rounded-2xl w-44 h-12 pr-1	text-xs outline-none	border-gray-200 font-medium"
                type="text"
                placeholder="بلاگ مورد نظر را جستجو کنید..."
              />
              <div className="bg-blue-400 w-12 rounded-2xl">
                <img
                  src="./src/assets/BlogImg/search-01-stroke-rounded 2.png"
                  className="mt-3 mr-3 "
                />
              </div>
            </div>
            <div className="">
              <div className="flex gap-1 mb-1">
                <img
                  src="./src/assets/BlogImg/cells-stroke-rounded 1.png"
                  className=""
                />
                <h2 className="font-medium text-black	text-base"> دسته بندی</h2>
              </div>
              <div className="">
                <div className="bg-gray-200 rounded-2xl  w-56	h-12	flex">
                  <input
                    className="bg-gray-200 rounded-2xl w-44 h-12 pr-1	text-xs outline-none	border-gray-200 font-medium"
                    type="text"
                    placeholder="دسته موردنظر را انتخاب کنید"
                  />
                  <div className=" w-12 rounded-2xl">
                    <img
                      src="./src/assets/BlogImg/arrow-down-01.png"
                      className="mt-3 mr-3 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="flex gap-1 mb-1">
                  <img
                    src="./src/assets/BlogImg/calendar-02-stroke-rounded 2.png"
                    className=""
                  />
                  <h2 className="font-medium text-black	text-base">
                    {" "}
                    تاریخ انتشار
                  </h2>
                </div>
              </div>
              <div className="">
                <div className="bg-gray-200 rounded-2xl  w-56	h-12	flex">
                  <input
                    className="bg-gray-200 rounded-2xl w-44 h-12 pr-1	text-xs outline-none	border-gray-200 font-medium"
                    type="text"
                    placeholder="۲۹اردیبهشت ۱۴۰۳ - ۵خرداد ۱۴۰۳"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="left flex flex-col ">
            <div className="flex mb-1">
              <h2 className="mr-1 mt-2 text-xl	font-bold	leading-7	">ترتیب</h2>
              <span className="border-2 w-28	h-10	pt-1 rounded-3xl	 font-medium	text-lg	 flex gap-1 mr-2 p-2 text-red-500 border-red-500">
                جدیدترین
                <img
                  className="size-5 pt-2"
                  src="./src/assets/BlogImg/cancel-01.png"
                />
              </span>
              <span className="border-2 w-28	h-10 pt-1 rounded-3xl	 font-medium	text-lg	 p-2 mr-2">
                محبوب ترین
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="1">
                <img
                  src="./src/assets/image/Group 14.png"
                  className="w-96 h-72"
                />
                <div className="desc flex flex-col mt-5 ">
                  <div className="up ">
                    <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                      زبان جاوا اسکریپت در چه حوزه ای به کار میره؟
                    </p>
                  </div>
                  <div className="down flex ml-5 mt-5 w-98 h-5">
                    <div className="ostadName">
                      <p className="text-sm font-medium text-nowrap	text-right">
                        محمدحسین بحرالعلومی
                      </p>
                    </div>
                    <div className="descDate flex text-nowrap mr-10">
                      <div className="date flex justify-between flex-row-reverse mr-5">
                        <img
                          className="calender size-5 "
                          src="./src/assets/image/calendar-03.png"
                        />
                        <p className="text-sm font-medium	text-right">
                          ۲۰اردیبهشت ۱۴۰۳
                        </p>
                      </div>
                      <div className="view  flex justify-between flex-row-reverse mr-5">
                        <img
                          className="size-5"
                          src="./src/assets/image/view.png"
                        />
                        <p className="size-5 text-sm font-medium	text-right">
                          ۲۰۰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2">
                <img
                  src="./src/assets/image/Group 8.png"
                  className="w-96 h-72"
                />
                <div className="desc flex flex-col mt-5 ">
                  <div className="up ">
                    <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                      فیگما یا ادوبی ایکس‌دی؟
                    </p>
                  </div>
                  <div className="down flex ml-5 mt-5 w-98 h-5">
                    <div className="ostadName">
                      <p className="text-sm font-medium	text-nowrap text-right">
                        محمدحسین بحرالعلومی
                      </p>
                    </div>
                    <div className="descDate flex text-nowrap mr-10">
                      <div className="date flex justify-between flex-row-reverse mr-5">
                        <img
                          className="calender size-5 "
                          src="./src/assets/image/calendar-03.png"
                        />
                        <p className="text-sm font-medium	text-right">
                          ۲۰اردیبهشت ۱۴۰۳
                        </p>
                      </div>
                      <div className="view  flex justify-between flex-row-reverse mr-5">
                        <img
                          className="size-5"
                          src="./src/assets/image/view.png"
                        />
                        <p className="size-5 text-sm font-medium	text-right">
                          ۲۰۰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="3">
                <img
                  src="./src/assets/image/Group 13.png"
                  className="w-96 h-72"
                />
                <div className="desc flex flex-col mt-5 ">
                  <div className="up ">
                    <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                      فیگما یا ادوبی ایکس‌دی؟
                    </p>
                  </div>
                  <div className="down flex ml-5 mt-5 w-98 h-5">
                    <div className="ostadName">
                      <p className="text-sm font-medium text-nowrap	text-right">
                        محمدحسین بحرالعلومی
                      </p>
                    </div>
                    <div className="descDate flex text-nowrap mr-10">
                      <div className="date flex justify-between flex-row-reverse mr-5">
                        <img
                          className="calender size-5 "
                          src="./src/assets/image/calendar-03.png"
                        />
                        <p className="text-sm font-medium	text-right">
                          ۲۰اردیبهشت ۱۴۰۳
                        </p>
                      </div>
                      <div className="view  flex justify-between flex-row-reverse mr-5">
                        <img
                          className="size-5"
                          src="./src/assets/image/view.png"
                        />
                        <p className="size-5 text-sm font-medium	text-right">
                          ۲۰۰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="1">
                <img
                  src="./src/assets/image/Group 14.png"
                  className="w-96 h-72"
                />
                <div className="desc flex flex-col mt-5 ">
                  <div className="up ">
                    <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                      زبان جاوا اسکریپت در چه حوزه ای به کار میره؟
                    </p>
                  </div>
                  <div className="down flex ml-5 mt-5 w-98 h-5">
                    <div className="ostadName">
                      <p className="text-sm font-medium text-nowrap	text-right">
                        محمدحسین بحرالعلومی
                      </p>
                    </div>
                    <div className="descDate flex text-nowrap mr-10">
                      <div className="date flex justify-between flex-row-reverse mr-5">
                        <img
                          className="calender size-5 "
                          src="./src/assets/image/calendar-03.png"
                        />
                        <p className="text-sm font-medium	text-right">
                          ۲۰اردیبهشت ۱۴۰۳
                        </p>
                      </div>
                      <div className="view  flex justify-between flex-row-reverse mr-5">
                        <img
                          className="size-5"
                          src="./src/assets/image/view.png"
                        />
                        <p className="size-5 text-sm font-medium	text-right">
                          ۲۰۰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2">
                <img
                  src="./src/assets/image/Group 8.png"
                  className="w-96 h-72"
                />
                <div className="desc flex flex-col mt-5 ">
                  <div className="up ">
                    <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                      فیگما یا ادوبی ایکس‌دی؟
                    </p>
                  </div>
                  <div className="down flex ml-5 mt-5 w-98 h-5">
                    <div className="ostadName">
                      <p className="text-sm font-medium	text-nowrap text-right">
                        محمدحسین بحرالعلومی
                      </p>
                    </div>
                    <div className="descDate flex text-nowrap mr-10">
                      <div className="date flex justify-between flex-row-reverse mr-5">
                        <img
                          className="calender size-5 "
                          src="./src/assets/image/calendar-03.png"
                        />
                        <p className="text-sm font-medium	text-right">
                          ۲۰اردیبهشت ۱۴۰۳
                        </p>
                      </div>
                      <div className="view  flex justify-between flex-row-reverse mr-5">
                        <img
                          className="size-5"
                          src="./src/assets/image/view.png"
                        />
                        <p className="size-5 text-sm font-medium	text-right">
                          ۲۰۰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="3">
                <img
                  src="./src/assets/image/Group 13.png"
                  className="w-96 h-72"
                />
                <div className="desc flex flex-col mt-5 ">
                  <div className="up ">
                    <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                      فیگما یا ادوبی ایکس‌دی؟
                    </p>
                  </div>
                  <div className="down flex ml-5 mt-5 w-98 h-5">
                    <div className="ostadName">
                      <p className="text-sm font-medium text-nowrap	text-right">
                        محمدحسین بحرالعلومی
                      </p>
                    </div>
                    <div className="descDate flex text-nowrap mr-10">
                      <div className="date flex justify-between flex-row-reverse mr-5">
                        <img
                          className="calender size-5 "
                          src="./src/assets/image/calendar-03.png"
                        />
                        <p className="text-sm font-medium	text-right">
                          ۲۰اردیبهشت ۱۴۰۳
                        </p>
                      </div>
                      <div className="view  flex justify-between flex-row-reverse mr-5">
                        <img
                          className="size-5"
                          src="./src/assets/image/view.png"
                        />
                        <p className="size-5 text-sm font-medium	text-right">
                          ۲۰۰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="3">
                <img
                  src="./src/assets/image/Group 13.png"
                  className="w-96 h-72"
                />
                <div className="desc flex flex-col mt-5 ">
                  <div className="up ">
                    <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                      فیگما یا ادوبی ایکس‌دی؟
                    </p>
                  </div>
                  <div className="down flex ml-5 mt-5 w-98 h-5">
                    <div className="ostadName">
                      <p className="text-sm font-medium text-nowrap	text-right">
                        محمدحسین بحرالعلومی
                      </p>
                    </div>
                    <div className="descDate flex text-nowrap mr-10">
                      <div className="date flex justify-between flex-row-reverse mr-5">
                        <img
                          className="calender size-5 "
                          src="./src/assets/image/calendar-03.png"
                        />
                        <p className="text-sm font-medium	text-right">
                          ۲۰اردیبهشت ۱۴۰۳
                        </p>
                      </div>
                      <div className="view  flex justify-between flex-row-reverse mr-5">
                        <img
                          className="size-5"
                          src="./src/assets/image/view.png"
                        />
                        <p className="size-5 text-sm font-medium	text-right">
                          ۲۰۰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="3">
                <img
                  src="./src/assets/image/Group 13.png"
                  className="w-96 h-72"
                />
                <div className="desc flex flex-col mt-5 ">
                  <div className="up ">
                    <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                      فیگما یا ادوبی ایکس‌دی؟
                    </p>
                  </div>
                  <div className="down flex ml-5 mt-5 w-98 h-5">
                    <div className="ostadName">
                      <p className="text-sm font-medium text-nowrap	text-right">
                        محمدحسین بحرالعلومی
                      </p>
                    </div>
                    <div className="descDate flex text-nowrap mr-10">
                      <div className="date flex justify-between flex-row-reverse mr-5">
                        <img
                          className="calender size-5 "
                          src="./src/assets/image/calendar-03.png"
                        />
                        <p className="text-sm font-medium	text-right">
                          ۲۰اردیبهشت ۱۴۰۳
                        </p>
                      </div>
                      <div className="view  flex justify-between flex-row-reverse mr-5">
                        <img
                          className="size-5"
                          src="./src/assets/image/view.png"
                        />
                        <p className="size-5 text-sm font-medium	text-right">
                          ۲۰۰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mr-48 gap-1 w-80 justify-self-center	 bg-gray-200 rounded-lg border-2 mt-8 cursor-pointer  ">
              <div className="mt-4 bg-gray-200 rounded-lg border-2">
                <img src="./src/assets/BlogImg/arrow-right.png" className="" />
              </div>
              <div className="mt-4 w-11 h-12">5</div>
              <div className="mt-4 w-11 h-12">4</div>
              <div className="mt-4 w-11 h-12">3</div>
              <div className="mt-4 w-11 h-12">2</div>

              <h4 className=" w-11 h-12	bg-blue-500  font-bold rounded-lg mt-2 text-white	text-base	">
                1
              </h4>

              <div className="mt-4">
                <img src="./src/assets/BlogImg/arrow-left.png" className="" />
              </div>
            </div>
          </div>
        </div>
        <div className="blogFooter flex flex-row justify-around">
          <div className="">right</div>
          <div className="">centre</div>
          <div className="">left</div>
        </div>
      </div>
    </>
  );
};

export default blog;
