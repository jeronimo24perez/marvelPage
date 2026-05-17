import {CircleArrowLeft} from "lucide-react";
import type { MovieDetail} from "../models/movieModels.tsx";
import {useNavigate} from "react-router";
interface headerProps{
    data: MovieDetail
}
const HeaderDetails = ({data}: headerProps) => {

    const navigate = useNavigate()
    return (
        <header className="grid md:grid-cols-2 text-neutral-50 place-items-center  pt-15">
            <div className="back col-span-2 text-xl p-2  w-full bg-neutral-950 z-5 row-start-1 font-bold flex gap-5">
                <CircleArrowLeft className={"hover:text-gray-400 transition-colors cursor-pointer "} onClick={() => {
                    navigate(-1)
                }}/> Volver a peliculas
            </div>
            <h2 className="row-start-2 text-center z-1  w-full col-span-2 font-bold text-neutral-50 text-2xl mt-3 ">{data.title}</h2>

            {/*Poster*/}
            <img className="row-start-3 mt-3 col-span-2 md:col-span-1 w-10/12 md:w-6/12 ml-3 mr-3 z-3 box-border "
                 src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt=""/>
            {/*info*/}
            <div className="info grid  w-10/12 p-2 col-span-2 md:col-span-1 z-1">
                <p className="w-full"><b> Fecha de estreno:</b> {data.release_date || data.first_air_date}</p><br/>
                <p><b>Reseña:</b> {data.overview}</p><br/>

                <p><b>Generos: </b> {data.genres.map((gender) =>
                    <span>{gender.name}   </span>)} </p><br/>
                <p className="bg-gray-500 p-1 rounded-full w-20">⭐ {data.vote_average}   </p>
            </div>
            {/*Background*/}
            <img className="mt-5 blur-lg opacity-60 z-0 absolute"
                 src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt=""/>

        </header>
    )
}

export default HeaderDetails