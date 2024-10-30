import SidePannel from "./sidePannel";
import MenuPannel from "./MenuPannel";
import DarkMode from "../../../Common/DarkMode";

const index = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-700 dark:text-white rounded-2xl w-11/12  mx-auto flex flex-col justify-center items-end text-right">
        <div className="w-[200px]  mr-10 mt-6 font-bold text-xl">دوره من</div>
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
              className="bg-gray-200 w-[258px] p-3 rounded-xl mt-2 text-xs text-right"
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
        <div className="w-11/12 mx-auto bg-gray-100 dark:bg-gray-300 dark:text-black rounded-2xl flex flex-col">
          <div className="border bg-gray-200 w-full  mx-auto rounded-xl my-4 p-2 flex flex-row justify-between gap-16">
            <span className="text-center text-xs ">دیدگاه ها</span>
            <span className="text-center text-xs ">سطح</span>
            <span className="text-center text-xs ">تاریخ اتمام</span>
            <span className="text-center text-xs ">تاریخ برگزاری</span>
            <span className="text-center text-xs ">مدرس</span>
            <span className="text-center text-xs ">نام دوره</span>
            <span className="text-center text-xs ">#</span>
          </div>

          <div className=" w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
            <div className="w-[45px] h-[45px] ">
              <img className="w-full" src="\imgLand\p2.PNG"></img>
            </div>
            <div className="text-right text-xs font-bold">دوره فیگما</div>
            <div className="text-right text-xs font-bold">محمد خلیلی</div>
            <div className="text-right text-xs font-bold">اردیبهشت 1403</div>
            <div className="text-right text-xs font-bold">مهر 1403</div>
            <div className="text-right text-xs font-bold">پیشرفته</div>
            <div className="cursor-pointer">
              <img src="\pannel\view(1).png"></img>
            </div>
          </div>
          <div className=" w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
            <div className="w-[45px] h-[45px] ">
              <img className="w-full" src="\imgLand\p2.PNG"></img>
            </div>
            <div className="text-right text-xs font-bold">دوره فیگما</div>
            <div className="text-right text-xs font-bold">محمد خلیلی</div>
            <div className="text-right text-xs font-bold">اردیبهشت 1403</div>
            <div className="text-right text-xs font-bold">مهر 1403</div>
            <div className="text-right text-xs font-bold">پیشرفته</div>
            <div className="cursor-pointer">
              <img src="\pannel\view(1).png"></img>
            </div>
          </div>
          <div className=" w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
            <div className="w-[45px] h-[45px] ">
              <img className="w-full" src="\imgLand\p1.PNG"></img>
            </div>
            <div className="text-right text-xs font-bold">دوره فیگما</div>
            <div className="text-right text-xs font-bold">محمد خلیلی</div>
            <div className="text-right text-xs font-bold">اردیبهشت 1403</div>
            <div className="text-right text-xs font-bold">مهر 1403</div>
            <div className="text-right text-xs font-bold">پیشرفته</div>
            <div className="cursor-pointer">
              <img src="\pannel\view(1).png"></img>
            </div>
          </div>
          <div className=" w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
            <div className="w-[45px] h-[45px] ">
              <img className="w-full" src="\imgLand\p2.PNG"></img>
            </div>
            <div className="text-right text-xs font-bold">دوره فیگما</div>
            <div className="text-right text-xs font-bold">محمد خلیلی</div>
            <div className="text-right text-xs font-bold">اردیبهشت 1403</div>
            <div className="text-right text-xs font-bold">مهر 1403</div>
            <div className="text-right text-xs font-bold">پیشرفته</div>
            <div className="cursor-pointer">
              <img src="\pannel\view(1).png"></img>
            </div>
          </div>
          <div className=" w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
            <div className="w-[45px] h-[45px] ">
              <img className="w-full" src="\imgLand\p1.PNG"></img>
            </div>
            <div className="text-right text-xs font-bold">دوره فیگما</div>
            <div className="text-right text-xs font-bold">محمد خلیلی</div>
            <div className="text-right text-xs font-bold">اردیبهشت 1403</div>
            <div className="text-right text-xs font-bold">مهر 1403</div>
            <div className="text-right text-xs font-bold">پیشرفته</div>
            <div className="cursor-pointer">
              <img src="\pannel\view(1).png"></img>
            </div>
          </div>
          <div className=" w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
            <div className="w-[45px] h-[45px] ">
              <img className="w-full" src="\imgLand\p2.PNG"></img>
            </div>
            <div className="text-right text-xs font-bold">دوره فیگما</div>
            <div className="text-right text-xs font-bold">محمد خلیلی</div>
            <div className="text-right text-xs font-bold">اردیبهشت 1403</div>
            <div className="text-right text-xs font-bold">مهر 1403</div>
            <div className="text-right text-xs font-bold">پیشرفته</div>
            <div className="cursor-pointer">
              <img src="\pannel\view(1).png"></img>
            </div>
          </div>
          <div className=" w-full h-1/5 my-4 p-2 flex flex-row-reverse justify-between gap-16 items-center ">
            <div className="w-[45px] h-[45px] ">
              <img className="w-full" src="\imgLand\p1.PNG"></img>
            </div>
            <div className="text-right text-xs font-bold">دوره فیگما</div>
            <div className="text-right text-xs font-bold">محمد خلیلی</div>
            <div className="text-right text-xs font-bold">اردیبهشت 1403</div>
            <div className="text-right text-xs font-bold">مهر 1403</div>
            <div className="text-right text-xs font-bold">پیشرفته</div>
            <div className="cursor-pointer">
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
    </>
  );
};

export default index;