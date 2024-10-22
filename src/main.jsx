import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Screen/Landing";
import Courses from "./Screen/Courses";
import AboutUs from "./Screen/AboutUs";
import LoginForms from "./Screen/LoginForms";
import NotFound from "./Components/Common/NotFound";
import Root from "./Screen/Root";
import Register from "./Screen/Register";
import RootStuPannel from "./Screen/Panels/RootStuPannel";
import MyCourse from "./Components/Student/Student-panelAll/MyCourse";
import ReserveCourse from "./Components/Student/Student-panelAll/ReserveCourse";
import CourseFav from "./Components/Student/Student-panelAll/CourseFav";
import BlogFav from "./Components/Student/Student-panelAll/BlogFav";
// import "./input.css";

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
    ],
  },
  {
    path: "/pannel",
    element: <RootStuPannel />,
    children: [
      // {
      //   path: "/mycourse",
      //   element: <MyCourse />,
      // },
    ],
  },
  // {
  //   path: "/pannel",
  //   element: <RootStuPannel />,
  //   children: [
  //     {
  //       path: "/mycourse",
  //       element: <MyCourse />,
  //     },
  //     {
  //       path: "/reservecourse",
  //       element: <ReserveCourse />,
  //     },
  //     {
  //       path: "/coursefav",
  //       element: <CourseFav />,
  //     },
  //     {
  //       path: "/blogfav",
  //       element: <BlogFav />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
