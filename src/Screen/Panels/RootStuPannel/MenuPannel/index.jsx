import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className=" flex flex-row justify-evenly gap-24 text-white text-center items-center font-medium cursor-pointer">
        <a>ارتباط باما</a>

        <a>گزارش</a>
        <NavLink to="/">صفحه اصلی</NavLink>
      </div>
    </>
  );
};

export default index;
