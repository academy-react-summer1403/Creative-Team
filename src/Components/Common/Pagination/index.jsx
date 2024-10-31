import React from "react";

const index = () => {
  return (
    <>
      <div className=" my-10 mobile:w-[350px] w-[230px] mx-auto ">
        <div className="bg-gray-200 dark:bg-gray-400 text-black p-4 rounded-2xl flex flex-row justify-between gap-6">
          <img src="\imgLand\arrow-left-01.png"></img>
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
          <img src="\imgLand\arrow-left.png"></img>
        </div>
        {/* <Swiper
                  className=" border border-blue-600 w-96 flex flex-row justify-center gap-1"
                  modules={[Navigation]}
                  navigation
                  pagination
                >
                  <SwiperSlide>
                    <img src="\imgLand\Frame 9(1).png" />
                    <noscript>
                      <img decoding="async" src="/img/sample1.png" />
                    </noscript>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      decoding="async"
                      src="\imgLand\Frame 10.png"
                      data-lazy-src="/img/sample2.png"
                    />
                    <noscript>
                      <img decoding="async" src="/img/sample2.png" />
                    </noscript>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      decoding="async"
                      src="\imgLand\Frame 11.png"
                      data-lazy-src="/img/sample3.png"
                    />
                  </SwiperSlide>
                </Swiper> */}
      </div>
    </>
  );
};

export default index;
