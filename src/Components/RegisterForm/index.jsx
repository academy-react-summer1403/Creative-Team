import React from "react";

const index = () => {
  return (
    <>
      {/*      Register Page01 */}
      <div className="register">
        <div className="leftSideRegister">
          <div className="logos">
            <img className="logo" src="imgRegister/Untitled-1 3.svg" />
            <img className="nameLogo" src="imgRegister/Untitled-1 4.svg" />
          </div>
          <div className="title">
            <h2>شروع یک ماجراجویی</h2>
            <p>هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر</p>
          </div>
          <div className="image"></div>
        </div>

        <div className="rightSideRegister">
          <div className="tabs">
            <div className="itemTabs itemTab1">
              <div className="rectangle"></div>
              <div className="titleTabRegister">وارد کردن اطلاعات شخصی</div>
            </div>
            <div className="itemTabs itemTab2">
              <div className="rectangle"></div>
              <div className="titleTabRegister">تایید کد ارسال شده</div>
            </div>
            <div className="itemTabs itemTab3">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab1">
                وارد کردن شماره همراه
              </div>
            </div>
          </div>

          <div className="titleRegister">
            <h2 className="titleRegister01">!خوش اومدی</h2>
            <p className="titleRegister02">
              لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود
            </p>
          </div>

          <div className="input">
            شماره همراه
            <input
              type="text"
              placeholder="شماره همراه خود را وارد کنید"
              className="phoneNumber"
            />
          </div>
          <div className="sendCode">ارسال کد تایید</div>
          <div className="accauntPart">
            <p className="accauntPartQuestion">
              حساب کاربری دارید؟<span>ورود به حساب کاربری</span>
            </p>
          </div>
          <div className="homeBottom">
            صفحه اصلی
            <div className="homeBottomIcon"></div>
          </div>
        </div>
      </div>
      {/*      Register Page02 */}
      <div className="register">
        <div className="leftSideRegister">
          <div className="logos">
            <img className="logo" src="imgRegister/Untitled-1 3.svg" />
            <img className="nameLogo" src="imgRegister/Untitled-1 4.svg" />
          </div>
          <div className="title">
            <h2>شروع یک ماجراجویی</h2>
            <p>هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر</p>
          </div>
          <div className="image"></div>
        </div>
        <div className="rightSideRegister">
          <div className="tabs">
            <div className="itemTabs itemTab1">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab3">
                وارد کردن اطلاعات شخصی
              </div>
            </div>
            <div className="itemTabs itemTab2">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab2">
                تایید کد ارسال شده
              </div>
            </div>
            <div className="itemTabs itemTab3">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab1">
                وارد کردن شماره همراه
              </div>
            </div>
          </div>
          <div className="titleRegister">
            <h2 className="titleRegister01">تایید کد ارسال شده</h2>
            <p className="titleRegister02">
              لطفا کد ارسال شده به شماره همراه 09381235486 را وارد کنید
            </p>
          </div>
          <div className="input">
            کد تایید
            <input
              type="text"
              placeholder="کد تایید خود را وارد کنید"
              className="acceptNumber"
            />
          </div>
          <div className="sendCode">تایید</div>

          <div className="backBottom">
            بازگشت
            <div className="backBottomIcon"></div>
          </div>
        </div>
      </div>
      {/*      Register Page03 */}
      <div className="register">
        <div className="leftSideRegister">
          <div className="logos">
            <img className="logo" src="imgRegister/Untitled-1 3.svg" />
            <img className="nameLogo" src="imgRegister/Untitled-1 4.svg" />
          </div>
          <div className="title">
            <h2>شروع یک ماجراجویی</h2>
            <p>هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر</p>
          </div>
          <div className="image"></div>
        </div>

        <div className="rightSideRegister">
          <div className="tabs">
            <div className="itemTabs itemTab1">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab3">
                وارد کردن اطلاعات شخصی
              </div>
            </div>
            <div className="itemTabs itemTab2">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab2">
                تایید کد ارسال شده
              </div>
            </div>
            <div className="itemTabs itemTab3">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab1">
                وارد کردن شماره همراه
              </div>
            </div>
          </div>
          <div className="titleRegister">
            <h2 className="titleRegister01">وارد کردن اطلاعات شخصی</h2>
            <p className="titleRegister02">
              لطفا اطلاعات اولیه خواسته شده را وارد کنید
            </p>
          </div>
          <div className="inputEmail">
            ایمیل
            <input
              type="text"
              placeholder="ایمیل خود را وارد کنید"
              className="acceptEmail"
            />
          </div>
          <div className="inputPassword">
            رمز عبور جدید
            <input
              type="password"
              placeholder="رمزعبور جدید خود را وارد کنید"
              className="acceptPassword"
            />
            <div className="passIcon"></div>
          </div>
          <div className="sendInfo">تایید</div>
        </div>
      </div>
    </>
  );
};

export default index;
