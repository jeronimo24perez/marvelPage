import type { Movie } from "../models/movieModels.tsx";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  variant?: "poster" | "backdrop";
}

const MovieSection = ({ title, movies, variant = "poster" }: MovieSectionProps) => {
  return (
    <section className="py-6 px-4 md:px-8">
      <h2 className="text-2xl font-bold text-white mb-8 ml-2 border-l-4 border-red-600 pl-3 ">
        {title}
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={16}
        slidesPerView="auto"
        className="movie-swiper"
      >
        {movies.map((movie) => {
          const type = movie.title ? "movie" : "tv";
          const imagePath = variant === "poster" ? movie.poster_path : movie.backdrop_path;
          const imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;

          if (!imagePath) return null;

          return (
            <SwiperSlide
              key={movie.id}
              className={variant === "poster" ? "!w-40 md:!w-52" : "!w-72 md:!w-96"}
            >
              <Link
                to={`/${type}/${movie.id}`}
                className="block transition-transform duration-300 hover:scale-105 group relative rounded-lg overflow-hidden h-full"
              >
                <img
                  src={imageUrl}
                  alt={movie.title || movie.original_name}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-sm md:text-base truncate">
                    {movie.title || movie.original_name}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MovieSection;
