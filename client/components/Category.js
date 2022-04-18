import CategoryCard from "./CategoryCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Autoplay, EffectCoverflow } from "swiper";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await publicRequest.get("/categories");
        setCategory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategory();
  }, [setCategory]);

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
            <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
              <h2
                className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Simple Solution for all your
                <span className="text-blue-500">Application</span>
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap">
            <div className="relative w-full">
              {/* <!-- Slider --> */}
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                className="mySwiper1"
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                effect={"coverflow"}
                coverflowEffect={{
                  rotate: 40,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow]}
              >
                {category?.map(({ title, img, desc, categories, _id }) => (
                  <SwiperSlide key={_id}>
                    <CategoryCard
                      title={title}
                      img={img}
                      desc={desc}
                      categories={categories}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
