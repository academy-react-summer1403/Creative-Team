import React from "react";

const index = () => {
  return (
    <>
      <div className=" hidden mobile:block mobile:flex flex-row justify-end mr-10 mt-4 font-serif text-center font-semibold text-black dark:text-white">
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
          <li className="inline  text-black font-serif text-center font-bold text-xl dark:text-white">
            ترتیب{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
