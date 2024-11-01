import React from "react";

const index = () => {
  return (
    <>
      <section>
        <div className=" flex flex-col gap-2 items-end mt-4">
          <div className="font-bold text-xs text-right text-black">تلگرام </div>
          <input
            type="text"
            placeholder="لینک تلگرام خود را وارد کنید "
            className="w-[500px] h-[48px] border border-gray-300 rounded-3xl align-text-top text-right text-xs"
          />
        </div>
        <div className=" flex flex-col gap-2 items-end mt-4">
          <div className="font-bold text-xs text-right text-black">
            لینکدین{" "}
          </div>
          <input
            type="text"
            placeholder="لینک لینکدین خود را وارد کنید "
            className="w-[500px] h-[48px] border border-gray-300 rounded-3xl align-text-top text-right text-xs"
          />
        </div>
      </section>
    </>
  );
};

export default index;
