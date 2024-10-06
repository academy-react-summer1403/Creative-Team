const firstPageForgot = () => {
  return (
    <>
      <div className=" body">
        <div className="rightSection">
          <div className="top">
            <div className="right ">
              <div className="rectangle101 ">
                <img src="./src/assets/image/Rectangle 101.png" />
              </div>
              <h5 className=" font-bold">واردکردن ایمیل</h5>
            </div>
            <div className="left">
              <div className="rectangle102">
                <img src="./src/assets/image/Rectangle 102.png" />
              </div>
              <h5>تایید کد ارسال شده دو مرحله‌ای</h5>
              <h5>( درصورت فعال بودن دو مرحله‌ای )</h5>
            </div>
          </div>
          <div className="bottom">
            <h3>فراموشی رمزعبور!</h3>
            <div>
              {" "}
              <h5>اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد</h5>
              <h5>کنید تا لینک صفحه تغییر رمزعبور برای شما ارسال شود</h5>
            </div>
            <h5>ایمیل</h5>
            <div>
              <input type="text" placeholder="ایمیل خود را وارد کنید" />
            </div>
            <button className="sendEmail">
              ارسال ایمیل
              {/* <input type="button" placeholder="ارسال لینک" /> */}
            </button>
            <button className="back">بازگشت</button>
          </div>
        </div>
        <div className="leftSection">
          <div className="logo">
            <img src="./src/assets/image/logo.png" />
            <img src="./src/assets/image/logoTitle.png" />
            <h3 className='"font-mono" "text-3xl" "font-bold" "leading-10" "text-center"'>
              شروع یک ماجراجویی
            </h3>
            <h5 className="text-red font-semibold">
              هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر
            </h5>
            <img src="./src/assets/image/coffee.png" />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default firstPageForgot;
