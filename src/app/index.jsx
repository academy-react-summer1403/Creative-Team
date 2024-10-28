import React from "react";
import "./App.css";
import "../index.css";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";

// import { authRoutes } from "../Config/Router/Auth.router";

// import StudentDashboardWhiteSection from "../Components/Student/Student-dashBoard/CommonStructurePanel/studentDashboardWhiteSection.jsx";
// import CommonStructurePanel from "../Components/Student/Student-dashBoard/CommonStructurePanel/commonStructurePanel.jsx";
// import FirstPageForgot from "../Components/Forgot/PageForgot01/index.jsx";
// import SecondPageForgot from "../Components/Forgot/PageForgot02/index.jsx";
// import TopBlogs from "../Components/LandingHolder/BlogBartar/index.jsx";
// import StudentDashboard from "../Components/Student/Student-dashBoard/StudentDashboard.jsx";
import StudentDashboard from "../Screen/dashboard/index.jsx";
// import CommentModalBlog from "../Components/Blogs/BlogDetail/BlogDetail-CommentModal/index.jsx";
// import Blog from "../Components/Blogs/Blog/index.jsx";
// import BlogDetail from "../Components/Blogs/BlogDetail/index.jsx";

// import { authRoutes } from "../Config/Router/Auth.router";
// import Header from "../Components/Common/Header";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {" "}
      {/* Routers */}
      <StudentDashboard />
      {/* <StudentDashboardWhiteSection /> */}
      {/* <CommonStructurePanel /> */}
      {/* <FirstPageForgot /> */}
      {/* <StudentDashboard /> */}
      {/* <CommentModalBlog /> */}
      {/* <BlogDetail /> */}
      {/* <Blog /> */}
      {/* <BlogDetail /> */}
      {/* <TopBlogs /> */}
      {/* <FirstPageForgot /> */}
      {/* <SecondPageForgot /> */}
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
export { App };
