import React from "react";

const blogBartarLanding = () => {
  return (
    <>
      <div className="‌BodytopBlogLanding h-96  flex flex-col">
        <div className="topBlogLanding h-12 ">
          <h2 className="text-2xl font-bold text-center mb-20">
            {" "}
            بلاگهای برتر هفته
          </h2>
        </div>
        <div className="mainBlogLanding">
          <div className="itemTopBlog flex gap-5">
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
              <img src="./src/assets/image/Group 8.png" className="w-96 h-72" />
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
          </div>
        </div>
        <div className="moreTopBlogLanding">
          <div className=" ">
            <input
              className="mt-20 font-thin w-32 h-10 ml-40  text-centre  border-solid border-2 bg-slate-800 rounded-3xl"
              type="image"
              placeholder="مشاهده بیشتر"
              src="./src/assets/image/Frame 47.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default blogBartarLanding;
