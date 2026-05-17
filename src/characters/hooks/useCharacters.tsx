import { useQuery } from "@tanstack/react-query";
import type { CastMember } from "../models/charactersModels.tsx";
import type {Movie} from "../../shared/models/movieModels.tsx";


function useCharacters() {
    const fetcher = async () => {
        // Obtenemos películas de Marvel (compañía 420)
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d24c8e7a07c2be146e340a5d6ce70f3c&with_companies=420`)
        if(!response.ok) throw new Error("Failed to fetch data")
        const moviesData = await response.json();

        // Para cada película, obtenemos los créditos
        const castPromises = moviesData.results.map(async (movie: Movie) => {
            const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=d24c8e7a07c2be146e340a5d6ce70f3c`);
            if (!creditsResponse.ok) return [];
            const creditsData = await creditsResponse.json();
            return creditsData.cast;
        });

        const casts = await Promise.all(castPromises);
        const combinedCast: CastMember[] = casts.flat();

        // Filtrar duplicados, popularidad > 3 y que tengan foto
        const uniqueCast = Array.from(new Map(combinedCast.map(item => [item.id, item])).values())
            .filter(character => character.popularity > 3 && character.profile_path);

        return uniqueCast;
    }

    const {data, isFetching, error} = useQuery({
        queryKey: ["characters-marvel-static"],
        queryFn: fetcher,
        staleTime: 1000 * 60 * 5,
    })

    return {data, isFetching, error}
}
export default useCharacters;