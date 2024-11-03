import React from "react";
import { NavLink } from "react-router-dom";

const MainBlogContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2  gap-2">
        <div className="1 w-[600px] h-[365px]">
          <NavLink
            to="/blogs/detail"
            className={({ isActive }) =>
              `${isActive && "text-blue-600 font-extrabold"}`
            }
          >
            <img src="./src/assets/image/Group 14.png" className="w-96 h-72" />
            <div className="desc flex flex-col mt-5 ">
              <div className="up ">
                <p className="text-nowrap font-bold text-left text-2xl  truncate w-80">
                  زبان جاوا اسکریپت در چه حوزه ای به کار میره؟
                </p>
              </div>
              <div className="down flex ml-5 mt-5 w-98 h-5">
                <div className="ostadName">
                  <p className="text-sm font-medium text-nowrap	text-right">
                    محمدحسین بحرالعلومی
                  </p>
                </div>
                <div className="descDate flex text-nowrap mr-10">
                  <div className="date flex justify-between flex-row-reverse mr-5">
                    <img
                      className="calender size-5 "
                      src="./src/assets/image/calendar-03.png"
                    />
                    <p className="text-sm font-medium	text-right">
                      ۲۰اردیبهشت ۱۴۰۳
                    </p>
                  </div>
                  <div className="view  flex justify-between flex-row-reverse mr-5">
                    <img className="size-5" src="./src/assets/image/view.png" />
                    <p className="size-5 text-sm font-medium	text-right">۲۰۰</p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="2">
          <img src="./src/assets/image/Group 8.png" className="w-96 h-72" />
          <div className="desc flex flex-col mt-5 ">
            <div className="up ">
              <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                فیگما یا ادوبی ایکس‌دی؟
              </p>
            </div>
            <div className="down flex ml-5 mt-5 w-98 h-5">
              <div className="ostadName">
                <p className="text-sm font-medium	text-nowrap text-right">
                  محمدحسین بحرالعلومی
                </p>
              </div>
              <div className="descDate flex text-nowrap mr-10">
                <div className="date flex justify-between flex-row-reverse mr-5">
                  <img
                    className="calender size-5 "
                    src="./src/assets/image/calendar-03.png"
                  />
                  <p className="text-sm font-medium	text-right">
                    ۲۰اردیبهشت ۱۴۰۳
                  </p>
                </div>
                <div className="view  flex justify-between flex-row-reverse mr-5">
                  <img className="size-5" src="./src/assets/image/view.png" />
                  <p className="size-5 text-sm font-medium	text-right">۲۰۰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="3">
          <img src="./src/assets/image/Group 13.png" className="w-96 h-72" />
          <div className="desc flex flex-col mt-5 ">
            <div className="up ">
              <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                {/* فیگما یا ادوبی ایکس‌دی؟ */}
                <NavLink
                  to="/blogs/detail"
                  className={({ isActive }) =>
                    `${isActive && "text-blue-600 font-extrabold"}`
                  }
                >
                  فیگما یا ادوبی ایکس‌دی؟
                </NavLink>
              </p>
            </div>
            <div className="down flex ml-5 mt-5 w-98 h-5">
              <div className="ostadName">
                <p className="text-sm font-medium text-nowrap	text-right">
                  محمدحسین بحرالعلومی
                </p>
              </div>
              <div className="descDate flex text-nowrap mr-10">
                <div className="date flex justify-between flex-row-reverse mr-5">
                  <img
                    className="calender size-5 "
                    src="./src/assets/image/calendar-03.png"
                  />
                  <p className="text-sm font-medium	text-right">
                    ۲۰اردیبهشت ۱۴۰۳
                  </p>
                </div>
                <div className="view  flex justify-between flex-row-reverse mr-5">
                  <img className="size-5" src="./src/assets/image/view.png" />
                  <p className="size-5 text-sm font-medium	text-right">۲۰۰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="1">
          <img src="./src/assets/image/Group 14.png" className="w-96 h-72" />
          <div className="desc flex flex-col mt-5 ">
            <div className="up ">
              <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                زبان جاوا اسکریپت در چه حوزه ای به کار میره؟
              </p>
            </div>
            <div className="down flex ml-5 mt-5 w-98 h-5">
              <div className="ostadName">
                <p className="text-sm font-medium text-nowrap	text-right">
                  محمدحسین بحرالعلومی
                </p>
              </div>
              <div className="descDate flex text-nowrap mr-10">
                <div className="date flex justify-between flex-row-reverse mr-5">
                  <img
                    className="calender size-5 "
                    src="./src/assets/image/calendar-03.png"
                  />
                  <p className="text-sm font-medium	text-right">
                    ۲۰اردیبهشت ۱۴۰۳
                  </p>
                </div>
                <div className="view  flex justify-between flex-row-reverse mr-5">
                  <img className="size-5" src="./src/assets/image/view.png" />
                  <p className="size-5 text-sm font-medium	text-right">۲۰۰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="2">
          <img src="./src/assets/image/Group 8.png" className="w-96 h-72" />
          <div className="desc flex flex-col mt-5 ">
            <div className="up ">
              <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                فیگما یا ادوبی ایکس‌دی؟
              </p>
            </div>
            <div className="down flex ml-5 mt-5 w-98 h-5">
              <div className="ostadName">
                <p className="text-sm font-medium	text-nowrap text-right">
                  محمدحسین بحرالعلومی
                </p>
              </div>
              <div className="descDate flex text-nowrap mr-10">
                <div className="date flex justify-between flex-row-reverse mr-5">
                  <img
                    className="calender size-5 "
                    src="./src/assets/image/calendar-03.png"
                  />
                  <p className="text-sm font-medium	text-right">
                    ۲۰اردیبهشت ۱۴۰۳
                  </p>
                </div>
                <div className="view  flex justify-between flex-row-reverse mr-5">
                  <img className="size-5" src="./src/assets/image/view.png" />
                  <p className="size-5 text-sm font-medium	text-right">۲۰۰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="3">
          <img src="./src/assets/image/Group 13.png" className="w-96 h-72" />
          <div className="desc flex flex-col mt-5 ">
            <div className="up ">
              <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                فیگما یا ادوبی ایکس‌دی؟
              </p>
            </div>
            <div className="down flex ml-5 mt-5 w-98 h-5">
              <div className="ostadName">
                <p className="text-sm font-medium text-nowrap	text-right">
                  محمدحسین بحرالعلومی
                </p>
              </div>
              <div className="descDate flex text-nowrap mr-10">
                <div className="date flex justify-between flex-row-reverse mr-5">
                  <img
                    className="calender size-5 "
                    src="./src/assets/image/calendar-03.png"
                  />
                  <p className="text-sm font-medium	text-right">
                    ۲۰اردیبهشت ۱۴۰۳
                  </p>
                </div>
                <div className="view  flex justify-between flex-row-reverse mr-5">
                  <img className="size-5" src="./src/assets/image/view.png" />
                  <p className="size-5 text-sm font-medium	text-right">۲۰۰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="3">
          <img src="./src/assets/image/Group 13.png" className="w-96 h-72" />
          <div className="desc flex flex-col mt-5 ">
            <div className="up ">
              <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                فیگما یا ادوبی ایکس‌دی؟
              </p>
            </div>
            <div className="down flex ml-5 mt-5 w-98 h-5">
              <div className="ostadName">
                <p className="text-sm font-medium text-nowrap	text-right">
                  محمدحسین بحرالعلومی
                </p>
              </div>
              <div className="descDate flex text-nowrap mr-10">
                <div className="date flex justify-between flex-row-reverse mr-5">
                  <img
                    className="calender size-5 "
                    src="./src/assets/image/calendar-03.png"
                  />
                  <p className="text-sm font-medium	text-right">
                    ۲۰اردیبهشت ۱۴۰۳
                  </p>
                </div>
                <div className="view  flex justify-between flex-row-reverse mr-5">
                  <img className="size-5" src="./src/assets/image/view.png" />
                  <p className="size-5 text-sm font-medium	text-right">۲۰۰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="3">
          <img src="./src/assets/image/Group 13.png" className="w-96 h-72" />
          <div className="desc flex flex-col mt-5 ">
            <div className="up ">
              <p className="text-nowrap font-bold text-right text-2xl truncate w-80">
                فیگما یا ادوبی ایکس‌دی؟
              </p>
            </div>
            <div className="down flex ml-5 mt-5 w-98 h-5">
              <div className="ostadName">
                <p className="text-sm font-medium text-nowrap	text-right">
                  محمدحسین بحرالعلومی
                </p>
              </div>
              <div className="descDate flex text-nowrap mr-10">
                <div className="date flex justify-between flex-row-reverse mr-5">
                  <img
                    className="calender size-5 "
                    src="./src/assets/image/calendar-03.png"
                  />
                  <p className="text-sm font-medium	text-right">
                    ۲۰اردیبهشت ۱۴۰۳
                  </p>
                </div>
                <div className="view  flex justify-between flex-row-reverse mr-5">
                  <img className="size-5" src="./src/assets/image/view.png" />
                  <p className="size-5 text-sm font-medium	text-right">۲۰۰</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainBlogContent;
