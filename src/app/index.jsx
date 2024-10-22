import React from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";
// import FirstPageForgot from "../Screen/Forgot/PageForgot01/index.jsx";
import "./App.css";
// import { authRoutes } from "../Config/Router/Auth.router";
import StudentDashboard from "../Components/Student/Student-dashBoard/StudentDashboard";
// import StudentDashboardWhiteSection from "../Components/Student/Student-dashBoard/CommonStructurePanel/studentDashboardWhiteSection.jsx";
// import CommonStructurePanel from "../Components/Student/Student-dashBoard/CommonStructurePanel/commonStructurePanel.jsx";
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
