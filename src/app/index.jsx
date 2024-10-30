import React from "react";
import "./App.css";
import "../index.css";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";
// import "./input.css";
import "./App.css";

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
import MyCourse from "../Components/Student/Student-panelAll/MyCourse";
import Landing from "../Screen/Landing";
import ReserveCourse from "../Components/Student/Student-panelAll/ReserveCourse";
import CourseFav from "../Components/Student/Student-panelAll/CourseFav";
import BlogFav from "../Components/Student/Student-panelAll/BlogFav";
import ProfilePannel from "../Components/Student/Student-panelAll/ProfilePannel";
import DarkMode from "../Components/Common/DarkMode";
import LoginForms from "../Screen/LoginForms";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Screen/Root";
import Courses from "../Screen/Courses";
import Blogs from "../Screen/Blogs";
import AboutUs from "../Screen/AboutUs";
import Register from "../Screen/Register";
import RootStuPannel from "../Screen/Panels/RootStuPannel";
import MyDashboard from "../Components/Student/Student-panelAll/MyDashboard";
import NotFound from "../Components/Common/NotFound";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          path: "/",
          element: <Landing />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/login",
          element: <LoginForms />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        // {
        //   path: "/forget",
        //   element: <Forget />,
        // },
      ],
    },
    {
      path: "/pannel",
      element: <RootStuPannel />,
      children: [
        {
          path: "/pannel/mydashboard",
          element: <MyDashboard />,
        },
        {
          path: "/pannel/mycourse",
          element: <MyCourse />,
        },
        {
          path: "/pannel/reservecourse",
          element: <ReserveCourse />,
        },
        {
          path: "/pannel/coursefav",
          element: <CourseFav />,
        },
        {
          path: "/pannel/blogfav",
          element: <BlogFav />,
        },
        // {
        //   path: "/pannel/profile",
        //   element: <Profile />,
        // },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
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
export { App };
