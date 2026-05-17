import type {Movie, MovieData} from "../models/movieModels.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation,Autoplay, Pagination} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import {useState} from "react";
import {Link} from "react-router";
const Slider = ({data, movies}: {data?:MovieData, movies?: Movie[]}) => {
    const [opacity, setOpacity] = useState(false);

    if(!data && movies){
        return (
            <>
                <div className="slider pt-10">
                    <Swiper className="z-0 text-neutral-50"
                            modules={[Navigation, Autoplay, Pagination]}
                            slidesPerView={1}
                            navigation={true}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                    >


                        {movies.map((movie: Movie) => (
                            <SwiperSlide key={movie.id} onMouseLeave={()=>setOpacity(false)} className=" bg-black ">
                                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className={opacity?"opacity-50 transition-opacity duration-500" :"transition-opacity duration-500"} onMouseEnter={()=> setOpacity(true)} alt="" />
                                <div className="grid md:grid-cols-3 ml-5 z-2 bottom-5 absolute text-neutral-50 ">
                                    <h2 className=" text-2xl sm:text-4xl font-bold col-span-2">
                                        {movie.title || movie.original_name}
                                    </h2>

                                    <p className="row-start-2 col-span-2 font-semibold text-gray-100 hidden lg:block ">
                                        {movie.overview}
                                    </p>

                                    <div className="buttons mt-2 md:mt-8  row-start-3 w-full flex">
                                <Link to={movie.title? '/movie/' + movie.id.toString() : '/tv/' + movie.id.toString() } className="bg-red-600 w-40 rounded-tl-2xl rounded-br-2xl text-center hover:bg-red-700 transition-colors duration-300 font-bold p-1  md:p-3">
                                            Ver mas
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </>
        )
    }
    if(!data) return <div>No data</div>
    const limitedMovies:Movie[] = data?.results.slice(8 ,11);
    return(
        <div className="slider pt-10">
            <Swiper className="z-0 text-neutral-50"
                    modules={[Navigation, Autoplay, Pagination]}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
            >


                {limitedMovies.map((movie: Movie) => (
                    <SwiperSlide key={movie.id} onMouseLeave={()=>setOpacity(false)} className=" bg-black ">
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className={opacity?"opacity-50 transition-opacity duration-500" :"transition-opacity duration-500"} onMouseEnter={()=> setOpacity(true)} alt="" />
                        <div className="grid md:grid-cols-3 ml-5 z-2 bottom-5 absolute text-neutral-50 ">
                            <h2 className=" text-2xl sm:text-4xl font-bold col-span-2">
                                {movie.title || movie.original_name}
                            </h2>

                            <p className="row-start-2 col-span-2 font-semibold text-gray-100 hidden lg:block ">
                                {movie.overview}
                            </p>

                            <div className="buttons mt-2 md:mt-8  row-start-3 w-full flex">
                                <Link to={movie.title? '/movie/' + movie.id.toString() : '/tv/' + movie.id.toString() } className="bg-red-600 w-40 rounded-tl-2xl rounded-br-2xl text-center hover:bg-red-700 transition-colors duration-300 font-bold p-1  md:p-3">
                                    Ver mas
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Slider