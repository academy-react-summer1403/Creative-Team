import React from "react";
import CardCourse from "../../Common/CardCourse";
import TopCourselistTitle from "./TopCourselistTitle";
import CategoryTabs from "./CategoryTabs";
import CatTabsInMobile from "./CatTabsInMobile";
import Pagination from "../../Common/Pagination";
import FilterSide from "./FiterSide";

const TopCourseData = [
  {
    title: "دوره طراحی سایت",
    icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    author: "محمدحسین بحرالعلومی",
    catType: "پیشرفته",
    catName: "برنامه نویسی",
    price: "500,000 ",
    color: "bg-yellow-300",
  },
  {
    title: " دوره جاوااسکریپت  ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    catType: "مقدماتی",
    catName: "برنامه نویسی",
    price: "700,000  ",
    color: "bg-red-400",
  },
  {
    title: " دوره فیگما   ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    catType: "پیشرفته",
    catName: "طراحی ",
    price: "400,000  ",
    color: "bg-blue-400",
  },
  {
    title: " دوره ریکت  ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "مهدی اصغری  ",
    catType: "پیشرفته",
    catName: "برنامه نویسی",
    price: "900,000  ",
    color: "bg-blue-700",
  },
  {
    title: "دوره طراحی سایت",
    icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    author: "محمدحسین بحرالعلومی",
    catType: "پیشرفته",
    catName: "برنامه نویسی",
    price: "500,000 ",
    color: "bg-yellow-300",
  },
  {
    title: " دوره جاوااسکریپت  ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    catType: "مقدماتی",
    catName: "برنامه نویسی",
    price: "700,000  ",
    color: "bg-red-400",
  },
  {
    title: " دوره فیگما   ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    catType: "پیشرفته",
    catName: "طراحی ",
    price: "400,000  ",
    color: "bg-blue-400",
  },
  {
    title: "دوره طراحی سایت",
    icon: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    author: "محمدحسین بحرالعلومی",
    catType: "پیشرفته",
    catName: "برنامه نویسی",
    price: "500,000 ",
    color: "bg-yellow-300",
  },
  {
    title: " دوره جاوااسکریپت  ",
    icon: "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    author: "محمدحسین خلیل پور",
    catType: "مقدماتی",
    catName: "برنامه نویسی",
    price: "700,000  ",
    color: "bg-red-400",
  },
];
const index = () => {
  // function handleDetail(id) {}

  return (
    <>
      <section className=" mobile:w-[1330px] w-[393px] mx-auto dark:bg-gray-950">
        <TopCourselistTitle />
        <div className=" flex justify-center  gap-8 mt-4">
          <div className="  mobile:w-3/4 w-full">
            <CategoryTabs />
            <CatTabsInMobile />

            <div className="   mx-auto mobile:flex mobile:flex-wrap justify-center gap-16">
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
                  />
                );
              })}
              {/* map */}

              <div className="  flex flex-col items-start mobile:w-1/4 w-full p-0 gap-2">
                <img
                  className="w-full h-3/4 rounded-lg flex flex-row"
                  src="\imgLand\Group 12.png"
                ></img>
                {/* <span className="catOfCourse catOfCourse01">پیشرفته</span> */}
                {/* <span className="catOfCourse">برنامه نویسی</span> */}

                <div className=" flex flex-col gap-3 w-5/6 my-0 mx-auto">
                  <h3 className=" mt-0 h-34px font-serif not-italic font-bold text-2xl leading-9 text-right text-black">
                    دوره طراحی سایت
                  </h3>
                  <div className="  flex flex-row justify-between">
                    <div className="flex flex-row gap-1">
                      <span className="font-serif font-semibold text-sm text-black">
                        تومان
                      </span>
                      <span className="text-sm"> 500000</span>
                    </div>
                    <span className="font-serif font-normal text-sm text-gray-700">
                      محمدحسین بحرالعلومی
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Pagination />
          </div>
          {/* ***************************************filter */}
          <FilterSide />
        </div>
      </section>
    </>
  );
};

export default index;
