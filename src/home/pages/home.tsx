import Navbar from "../../shared/components/navbar.tsx";
import Slider from "../../shared/components/slider.tsx";
import useHomeFetcher from "../hooks/useHomeFetcher.ts";
import MovieSection from "../../shared/components/MovieSection.tsx";
import LoaderPrincipal from "../../shared/components/loaderPrincipal.tsx";

const Home = () => {
    const { data, isFetching, error } = useHomeFetcher();

    if (isFetching) return <LoaderPrincipal />;
    if (error) return <div className="text-white p-10">Error: {error.message}</div>;
    if (!data) return null;

    return (
        <div className="bg-neutral-950 min-h-screen pb-10 overflow-hidden">
            <Navbar active="home" />
            
            {/* Hero Slider */}
            <Slider movies={data.trending} />

            <div className="mt-8 space-y-12">
                {/* Tendencias - Tarjetas Grandes (Backdrop) */}
                <MovieSection 
                    title="Tendencias de Marvel" 
                    movies={data.trending} 
                    variant="backdrop" 
                />

                <div className="bg-neutral-900/30 py-4">
                    {/* Películas - Tarjetas Verticales (Poster) */}
                    <MovieSection 
                        title="Películas del MCU" 
                        movies={data.popularMovies} 
                        variant="poster" 
                    />
                </div>

                {/* Series - Tarjetas Verticales (Poster) */}
                <MovieSection 
                    title="Series de Televisión" 
                    movies={data.popularSeries} 
                    variant="poster" 
                />
            </div>
        </div>
    );
};

export default Home;