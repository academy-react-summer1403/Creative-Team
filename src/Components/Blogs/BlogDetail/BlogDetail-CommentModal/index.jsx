import React from "react";

const CommentModalBlog = () => {
  return (
    <>
      <div className="blogDetailCommentModal border-2 flex flex-col f justify-centre">
        <div className="flex">
          <div className="flex gap-3 m-3 text-nowrap">
            <h3 className=" w-[263] h-[34] f5">نظرات دانشجو ها و اساتید</h3>
            <h6 className="f6 text-gray-500 mt-1">
              ( فیگما یا ادوبی ایکس‌دی؟ )
            </h6>
          </div>
          <div className="close border mr-72 m-3  p-2 border-red-500 rounded-2xl flex justify-between w-[111px] h-[40px]">
            <img
              src="src/assets/modalcommentblogdetail/cancel-01.png "
              className="w-5 h-5 pt-1"
              alt=""
            />{" "}
            <h4 className="text-red-500 w-[41px] h-[26px] text-left">بستن</h4>
          </div>
        </div>
        <div className="mr-5">
          <img
            src="src/assets/modalcommentblogdetail/Frame 105.png"
            className=""
          />
        </div>
        <div className="flex gap-8 mt-2 mr-5">
          <div className="r flex gap-1">
            <img
              src="src/assets/BlogImg/Flynn.png"
              className="w-[40px] h-[40px] mt-5"
              alt=""
            />
            <div className="flex flex-col mt-5">
              <h2 className=" font-bold">امیرحسین سهرابی</h2>
              <h4 className="text-gray-400">29 اردیبهشت 1403</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-6 p-2 mt-1">
          <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
            خوب بود بد نبود
          </div>
          <div className="f2 w-[803px] h-[46px] pt-2 text-pretty">
            واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از
            مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا
            اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن😍 تونستم به مقدار
            ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که
            این دوره رو گذاشتن😍{" "}
          </div>
        </div>
        <div className="l flex gap-10 mt-2 p-2 mr-6">
          <div className="flex gap-1 pt-4">
            <img
              src="src/assets/BlogImg/thumbs-up.png"
              className="w-[24px] h-[24px]"
            />
            <h4 className="">۲۹</h4>
          </div>
          <div className="flex gap-1 pt-4">
            <img
              src="src/assets/BlogImg/thumbs-down.png"
              className="w-[24px] h-[24px]"
            />
            <h4 className="">۱</h4>
          </div>
          <div className="border f2 pt-2 border-blue-400 text-blue-400 w-[99px] h-[39px] rounded-3xl text-center">
            جواب دادن
          </div>
        </div>

        <div className="flex ">
          <div className="border-blue-500 rounded-3xl border-r-8 mr-3 w-[px] h-[195px] mt-6"></div>
          <div className="border-r-blue border-3">
            <div className="flex gap-8 mt-2 mr-5">
              <div className="r flex gap-1">
                <img
                  src="src/assets/BlogImg/Flynn.png"
                  className="w-[40px] h-[40px] mt-5"
                  alt=""
                />
                <div className="flex flex-col mt-2">
                  <h2 className=" font-bold">امیرحسین سهرابی</h2>
                  <h4 className="text-gray-400">29 اردیبهشت 1403</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col mr-6 p-2 mt-1">
              <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                خوب بود بد نبود
              </div>
              <div className="f2 w-[803px] h-[46px] pt-2 text-pretty">
                واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از
                مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی
                جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن😍 تونستم
                به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از
                آکادمی بحر که این دوره رو گذاشتن😍{" "}
              </div>
            </div>
            <div className="l flex gap-10 mt-2 p-2 mr-6">
              <div className="flex gap-1 pt-4">
                <img
                  src="src/assets/BlogImg/thumbs-up.png"
                  className="w-[24px] h-[24px]"
                />
                <h4 className="">۲۹</h4>
              </div>
              <div className="flex gap-1 pt-4">
                <img
                  src="src/assets/BlogImg/thumbs-down.png"
                  className="w-[24px] h-[24px]"
                />
                <h4 className="">۱</h4>
              </div>
              <div className="flex gap-14 border border-blue w-[490px] h-[72px] rounded-3xl border-blue-300">
                <div className="flex gap-3 w-[40px] h-[40px] mt-3 mr-2">
                  <img
                    src="src/assets/modalCommentBlogDetail/Group 104.png"
                    className=""
                  />
                  <img
                    src="src/assets/modalCommentBlogDetail/Group 105.png"
                    className=""
                  />
                </div>
                <div className="flex gap-1 flex-col w-[360px] h-[72px]">
                  <h3 className="  f1">عنوان نظر خود را بنویسید</h3>
                  <div className="border-b-2  "></div>
                  <h5 className="f1">متن نظر خود را بنویسید</h5>
                </div>
              </div>
            </div>
            <div className="border-b-2 w-[803px] mr-5 mt-4 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentModalBlog;
