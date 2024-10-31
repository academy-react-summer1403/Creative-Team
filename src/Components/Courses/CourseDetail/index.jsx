import React from "react";
import CardCourse from "../../Common/CardCourse";
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
  // const [course, setCourse] = useState(TopCourseData);
  // const { id } = useParams();
  // console.log("params", id);

  // async function getproducts() {
  //   const res1 = await axios.get(
  //     "https://66e4467dd2405277ed13c1e6.mockapi.io/listproductCo/" + id
  //   );
  //   console.log("res", res1);
  //   setProduct(res1.data);
  // }

  return (
    <>
      <section>
        <section className=" mobile:w-[1330px] w-[393px] flex flex-col items-center dark:bg-gray-950 ">
          <div className=" flex w-full flex-col justify-items-center text-center my-12">
            <div className=" mobile:flex mobile:flex-row mobile:justify-between mobile:gap-1 flex-col justify-center gap-3">
              <div className=" mb-3">
                <div className="mobile:text-4xl font-bold mb-10 mt-5 text-right text-nowrap pr-8 text-2xl">
                  <h2 className="text-black dark:text-white">
                    {" "}
                    دوره جاوااسکریپت{" "}
                  </h2>
                </div>
                <div className=" flex p-2 m-2 ">
                  <div className="border rounded-l-2xl w-40 h-20  flex flex-col gap-6">
                    <h2 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                      استاددوره
                    </h2>
                    <span className="text-black dark:text-white mobile:text-sm text-xs text-right mr-3 text-nowrap">
                      محمدحسین بحرالعلومی
                    </span>
                  </div>
                  <div className="border w-40 h-20 flex flex-col items-end gap-5">
                    <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xsmobile:text-sm text-xs text-gray-500">
                      سطح آموزشی
                    </h3>
                    <lable className=" bg-pink-400 rounded-xl w-[70px] h-[25px] mr-2">
                      <span className=" text-white mobile:text-sm text-xs text-center">
                        پیشرفته
                      </span>
                    </lable>
                  </div>
                  <div className="border w-40 h-20	flex flex-col items-end gap-5">
                    <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                      دسته بندی{" "}
                    </h3>
                    <lable className=" bg-blue-400 rounded-xl w-[100px] h-[25px] mr-3">
                      <span className=" text-white mobile:text-sm text-xs text-center">
                        برنامه نویسی
                      </span>
                    </lable>
                  </div>
                  <div className="border rounded-r-2xl w-40 h-20 flex flex-col items-end gap-5">
                    <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                      وضعیت
                    </h3>
                    <lable className=" bg-orange-700 rounded-xl w-[90px] h-[25px] mr-3">
                      <span className=" text-white mobile:text-sm text-xs text-center">
                        درحال برگزاری
                      </span>
                    </lable>
                  </div>
                </div>
                <div className=" flex p-2 m-2 ">
                  <div className="border rounded-l-2xl w-40 h-20  flex flex-col gap-6">
                    <h2 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                      تعداد دیس لایک
                    </h2>
                    <span className="text-black dark:text-white text-xs text-right mr-3">
                      20نفر
                    </span>
                  </div>
                  <div className="border w-40 h-20 flex flex-col items-end gap-5">
                    <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                      تعدادلایک
                    </h3>
                    <span className="text-black dark:text-white text-xs text-right mr-3">
                      220 نفر
                    </span>
                  </div>
                  <div className="border w-40 h-20	flex flex-col items-end gap-5">
                    <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                      تاریخ اتمام
                    </h3>
                    <span className="text-black dark:text-white text-xs text-right mr-3">
                      خرداد1403
                    </span>
                  </div>
                  <div className="border rounded-r-2xl w-40 h-20 flex flex-col items-end gap-5">
                    <h3 className="text-right mt-2 mr-2 mobile:text-sm text-xs text-gray-500">
                      تاریخ برگزاری
                    </h3>
                    <span className="text-black dark:text-white text-xs text-right mr-3">
                      فروردین 1403
                    </span>
                  </div>
                </div>
                <div className=" flex flex-row justify-between my-8  mx-16 py-2 text-xs">
                  <div className="hidden laptop:flex flex-row justify-center gap-2 text-black dark:text-white">
                    <span className="inline">تومان</span>
                    <span className="inline font-bold text-sm">2500000</span>
                  </div>
                  <div className="flex flex-row justify-center gap-1 text-black dark:text-white">
                    <span>نظرات</span>
                    <span>
                      (<span>120</span>)
                    </span>
                    <span>+</span>
                    <div className="flex flex-row cursor-pointer">
                      <img src="public\imgLand\Star 8.png"></img>
                      <img src="public\imgLand\Star 8.png"></img>
                      <img src="public\imgLand\Star 8.png"></img>
                      <img src="public\imgLand\Star 8.png"></img>
                      <img src="public\imgLand\Star 7.png"></img>
                    </div>
                    <span>
                      (<span>4</span>)
                    </span>
                  </div>
                </div>
                <div className=" flex flex-row justify-center gap-2 cursor-pointer">
                  <div className="">
                    <img src="\imgLand\Group 109.png" className="" />
                  </div>
                  <div className="">
                    <img src="\imgLand\Group 110.png" className="" />
                  </div>
                  <div className="">
                    <img src="\imgLand\Frame 85.png"></img>
                  </div>
                  <div className="hidden laptop:block">
                    <img src="\imgLand\Frame 84.png" className="" />
                  </div>
                </div>
              </div>
              <div className="  mobile:w-1/2 w-full m-auto">
                <img
                  src="\imgLand\Group 14.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="  text-base my-14 flex flex-col gap-9 ">
              <h2 className="text-gray-400 text-right font-extrabold text-2xl">
                توضیحات دوره
              </h2>
              <p className="text-sm text-gray-900 dark:text-white text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <p className="text-sm text-gray-900 dark:text-white text-right">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <div className="mobile:flex mobile:flex-row justify-end gap-8 text-sm flex flex-col-reverse ml-36">
                <div className="border border-blue-500 rounded-2xl w-[200px] flex flex-row justify-center gap-4 py-1">
                  <div className="text-blue-500 font-bold">
                    کپی کردن لینک صفحه
                  </div>
                  <img
                    className="w-[20px] h-[20px] mt-1"
                    src="\imgLand\Vector.png"
                  ></img>
                </div>

                <div className="flex flex-row">
                  <div className="flex flex-row gap-2">
                    <img
                      className="w-[28px] h-[28px]"
                      src="\imgLand\Star 7.png"
                      alt=""
                    />
                    <img
                      className="w-[28px] h-[28px]"
                      src="\imgLand\Star 7.png"
                      alt=""
                    />
                    <img
                      className="w-[28px] h-[28px]"
                      src="\imgLand\Star 7.png"
                      alt=""
                    />
                    <img
                      className="w-[28px] h-[28px]"
                      src="\imgLand\Star 7.png"
                      alt=""
                    />
                    <img
                      className="w-[28px] h-[28px]"
                      src="\imgLand\Star 7.png"
                      alt=""
                    />
                  </div>
                  <h3 className=" text-blue-500 text-sm font-bold mt-1">
                    امتیاز بدید
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="  w-full flex flex-col justify-items-center gap-1 my-8">
            <div className=" my-0 font-extrabold text-2xl text-gray-400 leading-10 text-right">
              نظرات دانشجوهاواساتید
            </div>
            <div className="mobile:flex gap-2 mobile:flex-row flex flex-col-reverse ">
              <div className="  mobile:flex mobile:flex-row gap-2 flex flex-col-reverse ">
                <div className=" bg-slate-100 dark:bg-slate-400 rounded-xl p-2 mx-3 text-black dark:text-white">
                  <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                    <h2 className="text-right "> خوب بود بد نبود</h2>
                  </div>
                  <div className=" w-[292px] h-[115px] pt-2">
                    <p>
                      {" "}
                      واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                      اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت
                      کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این
                      دوره رو گذاشتن😍{" "}
                    </p>
                  </div>
                  <div className="flex gap-8 mt-9">
                    <div className=" flex gap-3 mt-8">
                      <span className="">۱</span>
                      <img
                        src="\imgLand\thumbs-down.png"
                        className="w-[24px] h-[24px]"
                      />
                      <span>29</span>
                      <img
                        src="\imgLand\thumbs-up(1).png"
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                    <div className="r flex gap-1">
                      <div className="flex flex-col mt-5">
                        <h2 className="text-sm text-right">امیرحسین سهرابی</h2>
                        <h4 className="text-gray-400 text-base">
                          29 اردیبهشت 1403
                        </h4>
                      </div>
                      <img
                        src="\imgLand\Bling.png"
                        className="w-[40px] h-[40px] mt-5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-100 dark:bg-slate-400 rounded-xl p-2 mx-3 text-black dark:text-white">
                  <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                    <h2 className="text-right"> خوب بود بد نبود</h2>
                  </div>
                  <div className=" w-[292px] h-[115px] pt-2">
                    <p>
                      {" "}
                      واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                      اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت
                      کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این
                      دوره رو گذاشتن😍{" "}
                    </p>
                  </div>
                  <div className="flex gap-8 mt-9">
                    <div className=" flex gap-3 mt-8">
                      <span className="">۱</span>
                      <img
                        src="\imgLand\thumbs-down.png"
                        className="w-[24px] h-[24px]"
                      />
                      <span>29</span>
                      <img
                        src="\imgLand\thumbs-up(1).png"
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                    <div className="flex gap-1">
                      <div className="flex flex-col mt-5">
                        <h2 className="text-sm text-right">امیرحسین سهرابی</h2>
                        <h4 className="text-gray-400 text-base">
                          29 اردیبهشت 1403
                        </h4>
                      </div>
                      <img
                        src="\imgLand\Graggle – 03.png"
                        className="w-[40px] h-[40px] mt-5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className=" bg-slate-100 dark:bg-slate-400 rounded-xl p-2 mx-3 text-black dark:text-white">
                  <div className="font-bold	text-lg	w-[292px] h-[26px] leading-6	">
                    <h2 className="text-right"> خوب بود بد نبود</h2>
                  </div>
                  <div className=" w-[292px] h-[115px] pt-2">
                    <p>
                      {" "}
                      واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و
                      اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت
                      کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این
                      دوره رو گذاشتن😍{" "}
                    </p>
                  </div>
                  <div className="flex gap-8 mt-9">
                    <div className=" flex gap-3 mt-8">
                      <span className="">۱</span>
                      <img
                        src="\imgLand\thumbs-down.png"
                        className="w-[24px] h-[24px]"
                      />
                      <span>29</span>
                      <img
                        src="\imgLand\thumbs-up(1).png"
                        className="w-[24px] h-[24px]"
                      />
                    </div>
                    <div className=" flex gap-1">
                      <div className="flex flex-col mt-5">
                        <h2 className="text-sm text-right">امیرحسین سهرابی</h2>
                        <h4 className="text-gray-400 text-base">
                          29 اردیبهشت 1403
                        </h4>
                      </div>
                      <img
                        src="\imgLand\Bling.png"
                        className="w-[40px] h-[40px] mt-5"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="m-auto">
                <img src="\imgLand\Group 111.png"></img>
              </div>
            </div>
            <div
              onClick={() => {}}
              className="border text-nowrap mx-auto mt-4 p-3 cursor-pointer w-[125px] text-center h-[39] rounded-3xl bg-black dark:bg-gray-800 text-white"
            >
              مشاهده بیشتر
            </div>
          </div>

          <div className=" w-full my-14  flex flex-col gap-3">
            <div className=" my-0 font-extrabold text-2xl text-gray-400 leading-10 text-right">
              دوره های مرتبط
            </div>
            <div className=" w-full h-3/4 my-0 flex flex-row gap-6">
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
          </div>

          <div className="border border-gray-400 mobile:w-[1330px] w-[393px]"></div>
          {/* responsive */}
          <div className="mobile:hidden  w-full flex flex-row justify-between items-center mt-4">
            <div className="flex flex-row justify-center gap-2 text-black dark:text-white">
              <span className="inline">تومان</span>
              <span className="inline font-bold text-sm mt-1">2500000</span>
            </div>
            <div className="">
              <img src="\imgLand\Frame 84.png" className="" />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default index;
