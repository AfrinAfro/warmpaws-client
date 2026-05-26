import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Autoplay]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative w-full h-[80vh] bg-black">
          <img
            src="/assets/hero/hero1.jpg"
            alt="Hero 1"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-3xl">
              <h1 className="mb-5 text-5xl md:text-6xl font-bold">
                Keep Your Pets Warm This Winter
              </h1>
              <p className="mb-5 text-lg">
                Discover the best winter pet care services for your furry friends.
              </p>
              <button className="btn bg-cyan-500 border-none text-white hover:bg-cyan-600">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative w-full h-[80vh] bg-black">
          <img
            src="/assets/hero/hero2.jpg"
            alt="Hero 2"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-3xl">
              <h1 className="mb-5 text-5xl md:text-6xl font-bold">
                Cozy Care For Every Pet
              </h1>
              <p className="mb-5 text-lg">
                Winter grooming, health checkups, clothing, and more.
              </p>
              <button className="btn bg-cyan-500 border-none text-white hover:bg-cyan-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;