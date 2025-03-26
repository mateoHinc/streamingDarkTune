import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import genres from "../data/musicalGenres";

function CarruselGenreSection() {
  return (
    <section
      id="genres"
      className="bg-primary py-16 min-h-screen text-white text-center"
    >
      <h2 className="drop-shadow-lg mb-12 font-heading text-3xl sm:text-4xl md:text-5xl">
        🎧 Géneros Destacados
      </h2>
      <div className="mx-auto px-4 sm:px-6 md:px-10 w-full max-w-7xl">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full"
          // spaceBetween={30}
          // breakpoints={{
          //   640: { slidePerView: 2 },
          //   1024: { slidePerView: 3 },
          // }}
        >
          {genres.map((genre) => (
            <SwiperSlide
              key={genre.id}
              className="w-[250px] xs:w-[270px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
            >
              <div className="group relative shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition duration-300">
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="w-full h-[300px] xs:h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px] object-cover"
                />
                {/* Add Overlay with Text */}
                <div className="right-0 bottom-0 left-0 absolute bg-black/60 group-hover:bg-black/70 p-4 text-left transition">
                  <h3 className="font-bold text-accent text-lg sm:text-xl md:text-2xl">
                    {genre.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                    {genre.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CarruselGenreSection;
