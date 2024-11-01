import React from "react";

const index = () => {
  return (
    <>
      <div className=" w-3/4 h-full">
        <div className="flex flex-row-reverse">
          <div className=" w-[300px]  flex flex-col gap-2 items-end">
            <div className="font-bold text-sm text-right text-gray-700">
              نام{" "}
            </div>
            <input
              type="text"
              placeholder="نام خود را وارد کنید "
              className="w-[200px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
            />
          </div>
          <div className=" w-[300px]  flex flex-col gap-2 items-end">
            <div className="font-bold text-sm text-right text-gray-700">
              نام خانوادگی{" "}
            </div>
            <input
              type="text"
              placeholder="نام خانوادگی خود را وارد کنید "
              className="w-[200px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2 items-end mt-4">
          <div className="font-bold text-xs text-right text-black">
            درباره من{" "}
          </div>
          <input
            type="text"
            placeholder="درباره خود متنی وارد کنید "
            className="w-[500px] h-[130px] border border-gray-300 rounded-3xl align-text-top text-right text-xs"
          />
        </div>
        <div className="flex flex-row-reverse mt-4">
          <div className=" w-[300px]  flex flex-col gap-2 items-end">
            <div className="font-bold text-sm text-right text-gray-700">
              شماره همراه{" "}
            </div>
            <input
              type="text"
              placeholder="شماره همراه خود را وارد کنید "
              className="w-[200px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
            />
          </div>
          <div className=" w-[300px]  flex flex-col gap-2 items-end">
            <div className="font-bold text-sm text-right text-gray-700">
              کدملی{" "}
            </div>
            <input
              type="text"
              placeholder=" کدملی خود را وارد کنید "
              className="w-[200px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-4">
          <div className=" w-[300px]  flex flex-col gap-2 items-end">
            <div className="font-bold text-sm text-right text-gray-700">
              تاریخ تولد{" "}
            </div>
            <input
              type="date"
              placeholder=" تاریخ تولد خود را وارد کنید "
              className="w-[200px] h-[48px] border border-gray-300 rounded-3xl text-right text-xs"
            />
          </div>
          <div className=" w-[300px]  flex flex-col gap-2 items-end">
            <div className="font-bold text-sm text-right text-gray-700">
              جنسیت{" "}
            </div>
            <div className=" w-[300px] flex flex-row-reverse justify-start gap-10">
              <div className="flex flex-row items-center gap-1">
                <div className="text-black text-sm">مرد</div>
                <input
                  type="radio"
                  className="w-[15px] h-[15px] border border-gray-300 rounded-3xl text-right text-xs"
                />
              </div>

              <div className="flex flex-row items-center gap-1">
                <div className="text-black text-sm">زن</div>
                <input
                  type="radio"
                  className="w-[15px] h-[15px] border border-gray-300 rounded-3xl text-right text-xs"
                />
              </div>
              <div className="text-blue-500 font-bold text-sm">انتخاب کنید</div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 items-end mt-4">
          <div className="font-bold text-xs text-right text-black">ایمیل </div>
          <input
            type="text"
            placeholder="ایمیل خود را وارد کنید "
            className="w-[500px] h-[48px] border border-gray-300 rounded-3xl align-text-top text-right text-xs"
          />
        </div>
        <div className=" flex flex-col gap-2 items-end mt-4">
          <div className="font-bold text-xs text-right text-black">
            آدرس سکونت{" "}
          </div>
          <input
            type="text"
            placeholder="آدرس محل سکونت خود را وارد کنید "
            className="w-[500px] h-[48px] border border-gray-300 rounded-3xl align-text-top text-right text-xs"
          />
        </div>
        <div className="my-8">
          <botton className="text-white bg-blue-500 rounded-3xl w-[100px] px-3 py-2 ">
            اعمال تغییرات
          </botton>
        </div>
      </div>
    </>
  );
};

export default index;
