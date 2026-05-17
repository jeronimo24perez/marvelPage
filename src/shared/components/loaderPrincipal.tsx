import Skeleton from "./Skeleton.tsx";
import Navbar from "./navbar.tsx";

const LoaderPrincipal = () => {
    return(
        <>
            <Navbar active="movies" />
            <section className="banner h-30">
                <Skeleton className=" w-full h-80 col-span-4 " />

                <div className="flex gap-4 px-4">
                    {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="mt-15 h-[200px] w-[300px] " />
                    ))}
                </div>
            </section>
        </>
    )
}

export default LoaderPrincipal