import Skeleton from "./Skeleton.tsx";
import Navbar from "./navbar.tsx";

const loaderDetails = () => {
    return(
        <>
        <Navbar active="movies" />
        <section className="banner h-60">
            <div className="flex gap-4 mt-15 px-4">

                <Skeleton  className=" w-full h-80 " />

            </div>
        </section>
        </>

    )
}

export default loaderDetails