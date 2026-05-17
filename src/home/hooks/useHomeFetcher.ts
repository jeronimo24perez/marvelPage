import {useQuery} from "@tanstack/react-query";
import type {Movie} from "../../shared/models/movieModels.tsx";

const API_KEY = "d24c8e7a07c2be146e340a5d6ce70f3c";
const MARVEL_COMPANY_ID = 420;

function useHomeFetcher() {
    
    const fetcher = async () => {
        const fetchMovies = async (endpoint: string) => {
            const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&with_companies=${MARVEL_COMPANY_ID}`);
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            return data.results as Movie[];
        };

        const fetchTrendingMarvel = async () => {
            // Como el endpoint de trending no filtra por compañía, usamos discover ordenado por popularidad
            const [movies, series] = await Promise.all([
                fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=${MARVEL_COMPANY_ID}&sort_by=popularity.desc`).then(res => res.json()),
                fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_companies=${MARVEL_COMPANY_ID}&sort_by=popularity.desc`).then(res => res.json())
            ]);
            
            // Combinamos y mezclamos un poco para que parezca trending general de Marvel
            const combined = [...movies.results, ...series.results]
                .sort((a, b) => b.popularity - a.popularity)
                .slice(0, 10);
                
            return combined as Movie[];
        };

        const [trending, popularMovies, popularSeries] = await Promise.all([
            fetchTrendingMarvel(),
            fetchMovies("discover/movie"),
            fetchMovies("discover/tv")
        ]);

        return {
            trending,
            popularMovies,
            popularSeries
        };
    }

    const {data, isFetching, error} = useQuery({
        queryKey: ["homeData"],
        queryFn: fetcher,
        staleTime: 1000 * 60 * 5,
    });

    return {data, isFetching, error}
}

export default useHomeFetcher;