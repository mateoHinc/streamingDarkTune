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
      className="bg-primary py-12 min-h-screen text-white text-center"
    >
      <h2 className="mb-8 font-bold text-3xl md:text-4xl">
        Géneros Destacados
      </h2>
      <div className="mx-auto px-4 max-w-4xl">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
          // spaceBetween={30}
          // breakpoints={{
          //   640: { slidePerView: 2 },
          //   1024: { slidePerView: 3 },
          // }}
        >
          {genres.map((genre) => (
            <SwiperSlide key={genre.id}>
              <div className="flex flex-col items-center p-4 rounded-lg h-[400px] md:h-[400px]">
                <img
                  src={genre.image}
                  alt={genre.name}
                  className="mb-4 rounded-md w-full h-[350px] object-cover"
                />
                <h3 className="mb-2 font-semibold text-xl">{genre.name}</h3>
                <p className="px-2 text-gray-300 text-sm md:text-base">
                  {genre.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CarruselGenreSection;
