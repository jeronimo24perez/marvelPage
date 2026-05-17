import {useQuery} from "@tanstack/react-query";
import type { MovieDetail} from "../../shared/models/movieModels.tsx";
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export default function useMovieDetail(id: string) {
    const fetcher = async ():Promise <MovieDetail> => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d24c8e7a07c2be146e340a5d6ce70f3c&with_companies=420`)
        if(!response.ok) throw new Error("Failed to fetch data")
        return response.json()
    }

    const {data, isFetching, error} = useQuery({
        queryKey: ["movie", id],
        queryFn: fetcher,
        staleTime: 1000 * 60 * 5,
    })

    return {data, isFetching, error}
}