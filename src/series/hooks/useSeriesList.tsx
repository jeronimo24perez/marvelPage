import {useInfiniteQuery} from "@tanstack/react-query";

function useSeriesList() {
    async function fetchSeries({ pageParam = 1 }) {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=d24c8e7a07c2be146e340a5d6ce70f3c&with_companies=420&page=${pageParam}`)
        if(!response.ok) throw new Error("Failed to fetch data")
        return response.json()
    }

    const {data, isFetching, error, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ["series"],
        queryFn: fetchSeries,
        getNextPageParam: (lastPage) => {
            if (lastPage.page < lastPage.total_pages) {
                return lastPage.page + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
        staleTime: 1000 * 60 * 5,
    })

    return {data, isFetching, error, fetchNextPage, hasNextPage, isFetchingNextPage}
}

export default useSeriesList