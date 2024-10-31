import React from "react";
import { useNavigate } from "react-router-dom";
import CardCourse from "../../../Common/CardCourse";

const TopCourseData = [
  {
    id: "1",
    title: "دوره طراحی سایت",
    icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    author: "محمدحسین بحرالعلومی",
    catType: "پیشرفته",
    catName: "برنامه نویسی",
    price: "500,000 ",
    color: "bg-yellow-300",
  },
  {
    id: "2",
    title: " دوره جاوااسکریپت  ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    catType: "مقدماتی",
    catName: "برنامه نویسی",
    price: "700,000  ",
    color: "bg-red-400",
  },
  {
    id: "3",
    title: " دوره فیگما   ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    catType: "پیشرفته",
    catName: "طراحی ",
    price: "400,000  ",
    color: "bg-blue-400",
  },
  {
    id: "4",
    title: " دوره ریکت  ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "مهدی اصغری  ",
    catType: "پیشرفته",
    catName: "برنامه نویسی",
    price: "900,000  ",
    color: "bg-blue-700",
  },
];
const index = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className=" mobile:w-[1330px] w-[393px] my-8  flex flex-col gap-8 items-center">
        <div className=" font-bold mobile:text-3xl text-xl text-black leading-10 text-center dark:text-white">
          دوره های برتر هفته
        </div>
        <div className=" mobile:w-[1330px]  w-[393px] flex flex-row justify-start gap-2 my-0">
          {TopCourseData.map((course, index) => {
            return (
              <CardCourse
                key={index}
                title={course.title}
                color={course.color}
                icon={course.icon}
                author={course.author}
                catType={course.catType}
                catName={course.catName}
                price={course.price}
                id={course.id}
              />
            );
          })}
        </div>
        <botton
          onClick={() => navigate("/courses")}
          className="w-32 h-10 bg-black dark:bg-gray-700 rounded-3xl my-0 cursor-pointer text-white text-center text-ms leading-9 font-light laptop:mx-auto mx-72"
        >
          مشاهده بیشتر
        </botton>
      </section>
    </>
  );
};

export default index;
