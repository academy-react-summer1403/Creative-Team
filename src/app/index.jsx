import React from "react";
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./vite.svg";
import "./App.css";
// import { authRoutes } from "../Config/Router/Auth.router";
import StudentDashboard from "../Components/Student/Student-dashBoard/StudentDashboard";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {" "}
      {/* Routers */}
      <StudentDashboard />
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
