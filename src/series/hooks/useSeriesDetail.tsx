import {useQuery} from "@tanstack/react-query";

function useSeriesDetail(id:string) {
    const fetcher = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d24c8e7a07c2be146e340a5d6ce70f3c&with_companies=420`)

        if(!response.ok) throw new Error("Failed to fetch data")
        return response.json()
    }
    const {data, isFetching, error} = useQuery({
        queryKey: ["serie", id],
        queryFn: fetcher,
        staleTime: 1000 * 60 * 5,
    })
    return {data, isFetching, error}
}

export default useSeriesDetail
