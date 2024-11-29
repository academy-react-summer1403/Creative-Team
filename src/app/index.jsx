import React from "react";
import "./App.css";
import "../index.css";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";

// import { authRoutes } from "../Config/Router/Auth.router";

// import StudentDashboardWhiteSection from "../Components/Student/Student-dashBoard/CommonStructurePanel/studentDashboardWhiteSection.jsx";
// import CommonStructurePanel from "../Components/Student/Student-dashBoard/CommonStructurePanel/commonStructurePanel.jsx";
// import FirstPageForgot from "../Screen/Forgot/PageForgot01/index.jsx";
// import SecondPageForgot from "../Screen/Forgot/PageForgot02/index.jsx";
// import TopBlogs from "../Components/LandingHolder/BlogBartar/index.jsx";
// import StudentDashboard from "../Screen/dashboard/index.jsx";
import StudentDashboard from "../Screen/dashBoard/index.jsx";
// import CommentModalBlog from "../Screen/Blogs/BlogDetail/CommentModal/index.jsx";
// import Blog from "../Screen/Blogs/index.jsx";
// import BlogDetail from "../Screen/Blogs/BlogDetail/index.jsx";

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
