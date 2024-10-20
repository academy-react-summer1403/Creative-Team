import React from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";
// import "./input.css";
import "./App.css";
import Header from "../Components/Common/Header";
import Content from "../Components/LandingHolder/Content";
import Footer from "../Components/Common/Footer";
import RegisterForm from "../Components/RegisterForm";
import Course from "../Components/Courses/Course";
import CourseDetail from "../Components/Courses/CourseDetail";
import LoginForm from "../Components/LoginForm";
// import { authRoutes } from "../Config/Router/Auth.router";
import index from "./../Screen/Register/index";
import { NavLink } from "react-router-dom";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import FilterModal from "../Components/Courses/Course/FilterModal";
import SortModal from "../Components/Courses/Course/SortModal";
import Menu from "../Components/LandingHolder/Menu";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      <Header />

      {/* <Content /> */}
      {/* <Course /> */}
      {/* <FilterModal /> */}
      {/* <SortModal /> */}
      {/* <Menu /> */}
      {/* <CourseDetail />  */}
      <Footer />

      {/* Routers */}
    </>
  );

  // {
  //   isLoggedIn ? <Auth /> : <Public />;
  // }

  // {
  //   <RouterProvider routes={isLoggedIn ? authRoutes : PublicRoute} />;
  // }
  // <Routes>
  //   <Route />
  // </Routes>;
}
export default App;
