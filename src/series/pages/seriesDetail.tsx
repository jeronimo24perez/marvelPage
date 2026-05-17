import Navbar from "../../shared/components/navbar.tsx";
import { useParams} from "react-router";
import useSeriesDetail from "../hooks/useSeriesDetail.tsx";

import HeaderDetails from "../../shared/components/headerDetails.tsx";
import LoaderDetails from "../../shared/components/loaderDetails.tsx";

const SeriesDetail = () => {
    const {id} = useParams()
    const {data, isFetching, error} = useSeriesDetail(id!)

    if(isFetching) return <LoaderDetails />
    if(error) return <div>Error: {error.message}</div>
    return(
        <>
            <Navbar active={'series'} />
            <HeaderDetails data={data} />

        </>
    )
}

export default SeriesDetail