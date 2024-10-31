import React from "react";
import { useNavigate } from "react-router-dom";

const index = ({ image, title, desc, date, onHandleDetail, id }) => {
  const navigate = useNavigate();
  return (
    <>
      {/*
    <div className=" flex flex-col items-start  mobile:w-1/4 w-fullmobile:w-1/4 w-full p-0 gap-2" onClick={onHandleDetail}>
                <img
                  onClick={() => navigate("/detail/" + id)}
                  src={image}
                  className="w-full h-3/4 rounded-lg flex flex-row"
                  src="\imgLand\Group 12.png"
                ></img>
                <span className="catOfCourse catOfCourse01">پیشرفته</span> 
                <span className="catOfCourse">برنامه نویسی</span> 

                <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                  <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                    دوره طراحی سایت{title}
                  </h3>
                  <div className="  flex flex-row justify-between">
                    <div className="flex flex-row gap-1">
                      <span className="font-serif font-semibold text-sm text-black">
                        تومان
                      </span>
                      <span className="text-sm"> 500000</span>
                    </div>
                    <span className="font-serif font-normal text-sm text-gray-700">
                      محمدحسین بحرالعلومی{desc}
                    </span>
                  </div>
                </div>
              </div>
     */}
      <div className="ProductItem" onClick={onHandleDetail}>
        <div className="imagesbox">
          <img
            className="images"
            onClick={() => navigate("/detail/" + id)}
            src={image}
          />
        </div>

        <h2 className="ProductItem2">{title}</h2>
        <h3 className="ProductItem2 ProductItem3">{desc}</h3>
        <div className="moreButton">
          <span className="date">{date}</span>
        </div>
      </div>
    </>
  );
};

export default index;
