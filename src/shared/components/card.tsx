import type {Movie} from "../models/movieModels.tsx";
import {Link} from "react-router";

interface CardProps {
    data: Movie;
    type: string;
}

const Card = ({ data,type }: CardProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

    return (
        <Link to={'/' + type + '/' +  data.id.toString()} className="w-full hover:opacity-70  transition-opacity hover:text-red-600 transition-colors duration-300 cursor-pointer max-w-sm rounded overflow-hidden text-white h-full flex flex-col">
            <img className="w-full rounded-xl" src={imageUrl} alt={data.title} />
            <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">   {data.title || data.original_name}</div>

            </div>

        </Link>
    );
};

export default Card;