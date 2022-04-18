import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Keyboard, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Slider = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const getSlider = async () => {
      try {
        const res = await publicRequest.get("/sliders");
        setSlider(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSlider();
  }, [setSlider]);
  return (
    <div>
      <section className="hero-3">
        <div className="container">
          <Swiper
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            keyboard={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Keyboard, Autoplay]}
            className="mySwiper"
          >
            {slider?.map(({ _id, title, desc, img }) => (
              <SwiperSlide key={_id}>
                <div className="flex flex-wrap items-center -mx-3">
                  <div className="w-full lg:w-2/5 px-3">
                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                      <h2
                        className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__ animate__fadeIn  animated"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        {title}
                      </h2>
                      <p
                        className="text-blueGray-400 leading-relaxed wow animate__ animate__fadeIn mt-3 text-sm  animated"
                        style={{
                          visibility: "visible",
                          animationName: "fadeIn",
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/5 px-3 mb-12 lg:mb-0">
                    <div className="lg:h-128 flex items-center justify-center">
                      <Image
                        width={500}
                        height={500}
                        objectFit="contain"
                        className="lg:max-w-lg"
                        src={img}
                        alt="NTTS"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Slider;
