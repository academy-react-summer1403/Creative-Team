import React from "react";

const index = () => {
  return (
    <>
      <section className="flex flex-col justify-start items-end gap-6">
        <div className="bg-blue-500 rounded-3xl w-[200px] py-2 flex flex-row-reverse justify-center gap-2">
          <img src="\pannel\image-add-02-stroke-rounded 2.png"></img>
          <botton className="text-sm font-bold">اضافه کردن عکس</botton>
        </div>
        <div className="flex flex-row justify-start gap-4 mb-8">
          <img src="\pannel\Froge – 3.png"></img>
          <img src="\pannel\Froge – 3.png"></img>
          <img src="\pannel\Froge – 3.png"></img>
        </div>
      </section>
    </>
  );
};

export default index;
