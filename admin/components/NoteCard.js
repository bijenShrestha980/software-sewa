// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Keyboard, Autoplay, Navigation } from "swiper";
import { useRef } from "react";
// Icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const NoteCard = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3">
      <div className="intro-x flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-auto">
          Important Notes
        </h2>
      </div>
      <Swiper
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        keyboard={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Keyboard, Autoplay, Navigation]}
        className="mySwiper"
      >
        <div className="intro-x flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-auto"></h2>
          <button
            ref={navigationPrevRef}
            className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
          >
            <BiChevronLeft className="w-4 h-4" />
          </button>
          <button
            ref={navigationNextRef}
            className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
          >
            <BiChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-5 intro-x">
          <div className="box zoom-in">
            <SwiperSlide>
              <div className="tiny-slider">
                <div className="p-5">
                  <div className="text-base font-medium truncate">
                    Lorem Ipsum is simply dummy text
                  </div>
                  <div className="text-slate-400 mt-1">20 Hours ago</div>
                  <div className="text-slate-500 text-justify mt-1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div className="font-medium flex mt-5">
                    <button
                      type="button"
                      className="btn btn-secondary py-1 px-2"
                    >
                      View Notes
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary py-1 px-2 ml-auto"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default NoteCard;
