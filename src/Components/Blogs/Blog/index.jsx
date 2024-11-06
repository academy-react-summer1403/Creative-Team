import React from "react";
import Pagination from "../../../Components/Common/Pagination/index.jsx";
import FilterSortBlog from "./SortFilter/index.jsx";
import MainBlogContent from "./MainBlogContent/index.jsx";
import SearchFilterBlog from "./SearchFilterBlog/index.jsx";
import HeaderExplain from "./HeaderExplain";

const index = () => {
  return (
    <>
      <div className="yellow-400  w-[1300px] dark:bg-indigo-950">
        {" "}
        <div className="sourcePage flex flex-col justify-content-centre">
          <HeaderExplain />
        </div>
        <div className="blogMain flex flex-row-reverse justify-centre ">
          {/* جستجو وفیلترینگ */}
          <SearchFilterBlog />
          <div className="left flex flex-col w-[1030px] mt-16">
            {/* ترتیب جستجو جدیدترین */}
            <FilterSortBlog />
            {/* محتوای بلاگ  */}
            <MainBlogContent />
            {/* شمارنده صفحات */}
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
