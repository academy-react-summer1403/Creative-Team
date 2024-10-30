import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";

const index = () => {
  return (
    <>
      <section className="w-[1320px]">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default index;
