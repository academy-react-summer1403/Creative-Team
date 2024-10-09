import React from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";
// import FirstPageForgot from "../Components/Forgot/PageForgot01/index.jsx";
// import SecondPageForgot from "../Components/Forgot/PageForgot02/index.jsx";
// import BlogBartar from "../Components/LandingHolder/BlogBartar/index.jsx";

import "./App.css";
import "../index.css";
import Blog from "../Components/Blogs/Blog/index.jsx";
// import BlogDetail from "../Components/Blogs/BlogDetail/index.jsx";
// import { authRoutes } from "../Config/Router/Auth.router";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Blog />
      {/* <BlogDetail /> */}
      {/* <BlogBartar /> */}
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
