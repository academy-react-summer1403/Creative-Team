import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import Footer from "../../Components/Common/Footer";

const index = () => {
  return (
    <>
      <section className="dark:bg-gray-900">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default index;
