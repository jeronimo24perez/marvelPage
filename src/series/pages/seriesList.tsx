import { useState, useEffect } from "react";
import Navbar from "../../shared/components/navbar.tsx";
import Slider from "../../shared/components/slider.tsx";
import useSeriesList from "../hooks/useSeriesList.tsx";
import Card from "../../shared/components/card.tsx";
import type {Movie} from "../../shared/models/movieModels.tsx";
import LoaderPrincipal from "../../shared/components/loaderPrincipal.tsx";
import { useInView } from "react-intersection-observer";
import Skeleton from "../../shared/components/Skeleton.tsx";

const SeriesList = () => {
    const {data, isFetching, error, fetchNextPage, hasNextPage, isFetchingNextPage} = useSeriesList()
    const [searchTerm, setSearchTerm] = useState("");
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    if(isFetching && !isFetchingNextPage) return <LoaderPrincipal />
    if(error) return <div>Error: {error.message}</div>

    const filteredData = data?.pages.flatMap(page => page.results).filter((serie: Movie) =>
        serie.original_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <>
            <Navbar active={'series'} />
            <Slider data={data?.pages[0]} />
            <div className="pt-8 px-4 max-w-7xl mx-auto">
                <input
                    type="text"
                    placeholder="Buscar serie de Marvel..."
                    className="w-full p-3 rounded-xl bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-red-500 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <main className="container mx-auto px-4 py-8">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {filteredData?.map((serie:Movie)=> <Card key={serie.id} type="tv" data={serie} />
                    )}
                </section>
                <div ref={ref} className="flex gap-4 px-4 py-8 justify-center">
                    {isFetchingNextPage && [1, 2, 3].map(i => <Skeleton key={i} className="w-full h-80"/>)}
                </div>
            </main>
        </>
    )
}

export default SeriesList