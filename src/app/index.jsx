import React from "react";
import "./App.css";
import "../index.css";
import "./App.css";
import MyCourse from "../Components/Student/Student-panelAll/MyCourse";
import Landing from "../Screen/Landing";
import ReserveCourse from "../Components/Student/Student-panelAll/ReserveCourse";
import CourseFav from "../Components/Student/Student-panelAll/CourseFav";
import BlogFav from "../Components/Student/Student-panelAll/BlogFav";
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
import Forgot from "../screen/Forgot";
import BlogDetail from "../Components/Blogs/BlogDetail";
import CourseDetail from "../Components/Courses/CourseDetail";

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
          path: "/coursedetail",
          element: <CourseDetail />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/blogs/detail",
          element: <BlogDetail />,
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
        {
          path: "/forgot",
          element: <Forgot />,
        },
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
