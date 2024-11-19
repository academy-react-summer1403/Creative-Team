import React from "react";
import { useState } from "react";
const index = () => {
  const [activeCategoryTab, setActiveCategoryTab] = useState("جدیدترین");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryTab = (category) => {
    setActiveCategoryTab(category);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className=" hidden mobile:block mobile:flex flex-row-reverse justify-start gap-1 mr-10 mt-4 mb-4 font-serif text-center font-semibold text-black dark:text-white">
        <p className="  text-black text-center font-bold text-xl mt-2 ml-3 dark:text-white">
          ترتیب{" "}
        </p>

        <button
          onClick={() => handleCategoryTab("جدیدترین")}
          className={`px-4 py-2 h-10 rounded-full border border-gray-300 ${
            activeCategoryTab == "جدیدترین"
              ? "bg-red-600 text-white"
              : "bg-white border-gray-400 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          جدیدترین
        </button>

        <button
          onClick={() => handleCategoryTab("محبوب ترین")}
          className={`px-4 py-2 h-10 rounded-full border border-gray-300 ${
            activeCategoryTab == "محبوب ترین"
              ? "bg-red-600 text-white"
              : "bg-white border-gray-400 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          محبوب ترین
        </button>

        <button
          onClick={() => handleCategoryTab("گران‌ترین")}
          className={`px-4 py-2 h-10 rounded-full border border-gray-300 ${
            activeCategoryTab == "گران‌ترین"
              ? "bg-red-600 text-white"
              : "bg-white border-gray-400 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          گران‌ترین
        </button>

        <button
          onClick={() => handleCategoryTab("ارزان‌ترین")}
          className={`px-4 py-2 h-10 rounded-full border border-gray-300 ${
            activeCategoryTab == "ارزان‌ترین"
              ? "bg-red-600 text-white"
              : "bg-white border-gray-400 text-gray-800 hover:border-red-500 hover:text-red-500"
          }`}
        >
          ارزان‌ترین
        </button>

        {/* <li className="inline border border-gray-600 rounded-3xl mx-2 py-1 px-2 font-serif text-center font-semibold">
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
        </li> */}
      </div>
    </>
  );
};

export default index;
