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

<<<<<<< HEAD
// import StudentDashboardWhiteSection from "../Components/Student/Student-dashBoard/CommonStructurePanel/studentDashboardWhiteSection.jsx";
// import CommonStructurePanel from "../Components/Student/Student-dashBoard/CommonStructurePanel/commonStructurePanel.jsx";
import FirstPageForgot from "../Screen/Forgot/PageForgot01/index.jsx";
// import SecondPageForgot from "../Screen/Forgot/PageForgot02/index.jsx";
// import TopBlogs from "../Components/LandingHolder/BlogBartar/index.jsx";
// import StudentDashboard from "../Components/Student/Student-dashBoard/StudentDashboard.jsx";
// import StudentDashboard from "../Screen/dashboard/index.jsx";
// import CommentModalBlog from "../Components/Blogs/BlogDetail/BlogDetail-CommentModal/index.jsx";
// import Blog from "../Components/Blogs/Blog/index.jsx";
// import BlogDetail from "../Components/Blogs/BlogDetail/index.jsx";

// import { authRoutes } from "../Config/Router/Auth.router";
// import Header from "../Components/Common/Header";
=======
>>>>>>> 21a3c43c648705339e1d470a91a0b7f12acfbefb
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
<<<<<<< HEAD
      {" "}
      {/* Routers */}
      {/* <StudentDashboard /> */}
      {/* <StudentDashboardWhiteSection /> */}
      {/* <CommonStructurePanel /> */}
      {/* <CommentModalBlog /> */}
      {/* <BlogDetail /> */}
      {/* <Blog /> */}
      {/* <BlogDetail /> */}
      {/* <TopBlogs /> */}
      <FirstPageForgot />
      {/* <SecondPageForgot /> */}
      {/* Routers */}
=======
      <RouterProvider router={router} />
>>>>>>> 21a3c43c648705339e1d470a91a0b7f12acfbefb
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
