import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import userReviews from "../data/userReviews";

function StarRating({ rating }) {
  return (
    <div className="flex justify-center gap-1 mt-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`text-xl ${
            index < rating ? "text-yellow-400" : "text-gray-400"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function UserReviewsSection() {
  return (
    <section className="relative overflow-hidden text-white text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="z-0 absolute inset-0 w-full h-full object-center object-cover"
      >
        <source src="/assets/videoMusicLoop.mp4" type="video/mp4" />
      </video>

      <div className="z-10 absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="z-20 relative px-4 py-16 min-h-screen">
        <h2 className="mb-10 font-bold text-3xl md:text-4xl">
          Reseñas de Usuarios
        </h2>
        <div className="mx-auto px-4 max-w-6xl">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Pagination]}
          >
            {userReviews.map((user) => (
              <SwiperSlide key={user.id} className="flex h-full">
                <div className="flex flex-col justify-between items-center bg-secondary shadow-lg p-6 rounded-xl w-full min-h-[350px] text-left">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="shadow-md mb-4 rounded-full ring-2 ring-white ring-offset-2 w-28 sm:w-24 md:w-28 h-28 sm:h-24 md:h-28 object-cover"
                  />
                  <h3 className="mb-2 font-semibold sm:text-lg md:text-xl text-2xl">
                    {user.name}
                  </h3>
                  <p className="mb-4 text-gray-300 sm:text-base text-lg text-center">
                    {user.review}
                  </p>
                  <StarRating rating={user.rating} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default UserReviewsSection;
