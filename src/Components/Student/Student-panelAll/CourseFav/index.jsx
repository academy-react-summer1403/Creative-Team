import React from "react";
import MenuPannel from "../MyCourse/MenuPannel";
import SidePannel from "../MyCourse/sidePannel";

const index = () => {
  return (
    <>
      <div className="w-[1345px]  bg-black flex flex-row justify-center gap-5">
        <div className="flex flex-col w-4/5 justify-items-center my-3">
          <div className=" w-11/12 h-[80px] mx-auto flex flex-row justify-evenly gap-36">
            <div className=" flex flex-row justify-evenly gap-2 items-center">
              <div className="bg-gray-800 rounded-full w-[40px] h-[40px] cursor-pointer">
                <img className="mt-2 ml-2" src="\pannel\moon-02(1).png"></img>
              </div>
              <div className="bg-gray-800 rounded-full w-[40px] h-[40px]">
                <img
                  className="mt-2 ml-2 cursor-pointer"
                  src="\pannel\notification-02(1).png"
                ></img>
                <div className="bg-red-700 rounded-full w-[20px] h-[20px] ml-6 -mt-2 text-center text-white text-xs">
                  <span className="">2</span>
                </div>
              </div>
            </div>
            <MenuPannel />
            <div className="flex flex-row justify-end gap-2 items-center">
              <div className="text-white flex flex-col justify-center items-end">
                <span className="inline">پارسا آقایی</span>
                <span className="inline">دانشجو</span>
              </div>
              <div>
                <img src="\imgLand\Peppe – 07.png"></img>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl w-11/12 mx-auto flex flex-col justify-center items-end text-right">
            <div className="w-[200px]  mr-10 mt-6 font-bold text-xl">
              دوره های مورد علاقه{" "}
            </div>
            <div className="  my-6 flex flex-row justify-around gap-20 mr-12">
              <div className="">
                <lable className="flex flex-row justify-end text-sm font-bold">
                  <span>تاریخ برگزاری-اتمام</span>
                  <img
                    className="ml-3"
                    src="\pannel\calendar-02-stroke-rounded 2.png"
                  ></img>
                </lable>
                <input
                  className="bg-gray-200 w-[258px] p-3 rounded-xl text-center mt-2 text-xs text-right"
                  type=""
                  placeholder="خرداد 1403- اردیبهشت1403"
                ></input>
              </div>
              <div className="mx-auto">
                <lable className="flex flex-row justify-end text-sm font-bold">
                  <span className="">جستجو</span>
                  <img
                    className="ml-3"
                    src="\pannel\search-01-stroke-rounded 1.png"
                  ></img>
                </lable>
                <div className="mt-2">
                  <input
                    className="bg-gray-200 w-[258px] p-3 rounded-r-xl text-xs text-right"
                    type="text"
                    placeholder="دوره مورد نظر خود را جستجو کنید"
                  ></input>
                  <div className="w-[108px] h-[39px] bg-blue-600 rounded-xl -mt-10 -ml-10"></div>
                  <img
                    className=" -mt-10 -ml-10 p-2"
                    src="\pannel\search-01-stroke-rounded 2.png"
                  ></img>
                </div>
              </div>
            </div>
            <div className="w-11/12 mx-auto bg-gray-100 rounded-2xl flex flex-col">
              <div className="border bg-gray-200 w-full  mx-auto rounded-xl my-4 p-2 flex flex-row justify-between gap-16">
                <span className="text-center text-xs ">دیدگاه </span>
                <span className="text-center text-xs ">سطح</span>
                <span className="text-center text-xs ">تاریخ اتمام</span>
                <span className="text-center text-xs ">تاریخ برگزاری</span>
                <span className="text-center text-xs ">مدرس</span>
                <span className="text-center text-xs ">نام دوره</span>
                <span className="text-center text-xs ">#</span>
              </div>

              <div className="border border-red-500 w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
                <div className="w-[45px] h-[45px] ">
                  <img className="w-full" src="\imgLand\p2.PNG"></img>
                </div>
                <div className="text-right text-xs font-bold">دوره فیگما</div>
                <div className="text-right text-xs font-bold">محمد خلیلی</div>
                <div className="text-right text-xs font-bold">
                  اردیبهشت 1403
                </div>
                <div className="text-right text-xs font-bold">مهر 1403</div>
                <div className="text-right text-xs font-bold">پیشرفته</div>
                <div className="cursor-pointer flex gap-1 size-4">
                  <img src="\imgLand\cancel-01.png"></img>
                  <img src="\imgLand\book-download-stroke-rounded 1.png"></img>
                  <img src="\pannel\view(1).png"></img>
                </div>
              </div>
              <div className="border border-red-500 w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
                <div className="w-[45px] h-[45px] ">
                  <img className="w-full" src="\imgLand\p2.PNG"></img>
                </div>
                <div className="text-right text-xs font-bold">دوره فیگما</div>
                <div className="text-right text-xs font-bold">محمد خلیلی</div>
                <div className="text-right text-xs font-bold">
                  اردیبهشت 1403
                </div>
                <div className="text-right text-xs font-bold">مهر 1403</div>
                <div className="text-right text-xs font-bold">پیشرفته</div>
                <div className="cursor-pointer flex gap-1 size-4">
                  <img src="\imgLand\cancel-01.png"></img>
                  <img src="\imgLand\book-download-stroke-rounded 1.png"></img>
                  <img src="\pannel\view(1).png"></img>
                </div>
              </div>
              <div className="border border-red-500 w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
                <div className="w-[45px] h-[45px] ">
                  <img className="w-full" src="\imgLand\p1.PNG"></img>
                </div>
                <div className="text-right text-xs font-bold">دوره فیگما</div>
                <div className="text-right text-xs font-bold">محمد خلیلی</div>
                <div className="text-right text-xs font-bold">
                  اردیبهشت 1403
                </div>
                <div className="text-right text-xs font-bold">مهر 1403</div>
                <div className="text-right text-xs font-bold">پیشرفته</div>
                <div className="cursor-pointer flex gap-1 size-4">
                  <img src="\imgLand\cancel-01.png"></img>
                  <img src="\imgLand\book-download-stroke-rounded 1.png"></img>
                  <img src="\pannel\view(1).png"></img>
                </div>
              </div>
              <div className="border border-red-500 w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
                <div className="w-[45px] h-[45px] ">
                  <img className="w-full" src="\imgLand\p2.PNG"></img>
                </div>
                <div className="text-right text-xs font-bold">دوره فیگما</div>
                <div className="text-right text-xs font-bold">محمد خلیلی</div>
                <div className="text-right text-xs font-bold">
                  اردیبهشت 1403
                </div>
                <div className="text-right text-xs font-bold">مهر 1403</div>
                <div className="text-right text-xs font-bold">پیشرفته</div>
                <div className="cursor-pointer flex gap-1 size-4">
                  <img src="\imgLand\cancel-01.png"></img>
                  <img src="\imgLand\book-download-stroke-rounded 1.png"></img>
                  <img src="\pannel\view(1).png"></img>
                </div>
              </div>
              <div className="border border-red-500 w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
                <div className="w-[45px] h-[45px] ">
                  <img className="w-full" src="\imgLand\p1.PNG"></img>
                </div>
                <div className="text-right text-xs font-bold">دوره فیگما</div>
                <div className="text-right text-xs font-bold">محمد خلیلی</div>
                <div className="text-right text-xs font-bold">
                  اردیبهشت 1403
                </div>
                <div className="text-right text-xs font-bold">مهر 1403</div>
                <div className="text-right text-xs font-bold">پیشرفته</div>
                <div className="cursor-pointer flex gap-1 size-4">
                  <img src="\imgLand\cancel-01.png"></img>
                  <img src="\imgLand\book-download-stroke-rounded 1.png"></img>
                  <img src="\pannel\view(1).png"></img>
                </div>
              </div>
              <div className="border border-red-500 w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
                <div className="w-[45px] h-[45px] ">
                  <img className="w-full" src="\imgLand\p2.PNG"></img>
                </div>
                <div className="text-right text-xs font-bold">دوره فیگما</div>
                <div className="text-right text-xs font-bold">محمد خلیلی</div>
                <div className="text-right text-xs font-bold">
                  اردیبهشت 1403
                </div>
                <div className="text-right text-xs font-bold">مهر 1403</div>
                <div className="text-right text-xs font-bold">پیشرفته</div>
                <div className="cursor-pointer flex gap-1 size-4">
                  <img src="\imgLand\cancel-01.png"></img>
                  <img src="\imgLand\book-download-stroke-rounded 1.png"></img>
                  <img src="\pannel\view(1).png"></img>
                </div>
              </div>
              <div className="border border-red-500 w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
                <div className="w-[45px] h-[45px] ">
                  <img className="w-full" src="\imgLand\p1.PNG"></img>
                </div>
                <div className="text-right text-xs font-bold">دوره فیگما</div>
                <div className="text-right text-xs font-bold">محمد خلیلی</div>
                <div className="text-right text-xs font-bold">
                  اردیبهشت 1403
                </div>
                <div className="text-right text-xs font-bold">مهر 1403</div>
                <div className="text-right text-xs font-bold">پیشرفته</div>
                <div className="cursor-pointer flex gap-1 size-4">
                  <img src="\imgLand\cancel-01.png"></img>
                  <img src="\imgLand\book-download-stroke-rounded 1.png"></img>
                  <img src="\pannel\view(1).png"></img>
                </div>
              </div>

              <div className=" my-10 mobile:w-[350px] mx-auto">
                <div className="bg-gray-200 p-4 rounded-2xl flex flex-row justify-between gap-6">
                  <img src="\imgLand\arrow-left-01.png"></img>
                  <i>1</i>
                  <i>2</i>
                  <i>3</i>
                  <i>4</i>
                  <img src="\imgLand\arrow-left.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SidePannel />
      </div>
    </>
  );
};

export default index;
