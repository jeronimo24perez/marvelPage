import Navbar from "../../shared/components/navbar.tsx";
import { useParams} from "react-router";
import useMovieDetail from "../hooks/UseMovieDetail.tsx";
import HeaderDetails from "../../shared/components/headerDetails.tsx";
import LoaderDetails from "../../shared/components/loaderDetails.tsx";

const MovieDetail = () => {
    const {id} = useParams()
    const {data, isFetching, error} = useMovieDetail(id! )
    if(isFetching) return <LoaderDetails />
    if(error) return <div>Error: {error.message}</div>
    if(!data) return <div>No data</div>
    return(
        <>
            <Navbar active="none" />
            <HeaderDetails data={data} />
        </>
    )
}

export default MovieDetail