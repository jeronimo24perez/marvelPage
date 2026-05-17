import Navbar from "../../shared/components/navbar.tsx";
import {useNavigate, useParams} from "react-router";
import useActorDetail from "../hooks/useActorDetail.tsx";
import LoaderDetails from "../../shared/components/loaderDetails.tsx";
import {ArrowLeftCircle} from "lucide-react";

const ActorDetail = () => {
    const {id} = useParams()
    const {data, isFetching, error} = useActorDetail(id!)
    const navigate = useNavigate()
    if(isFetching) return <div>Loading...</div>
    if(error) return <LoaderDetails />
    if(!data) return <div>No data</div>

    return(
        <>
            <Navbar active={''} />
            <div className={"grid place-items-center grid-cols-1 md:grid-cols-2 pt-16 text-neutral-50 bg-neutral-800/60 backdrop-blur-sm "}>
                <div className="col-span-2 bg-neutral-950 place-items-center w-full font-bold  flex gap-6 text-xl p-2"><ArrowLeftCircle className="hover:text-neutral-500 transition-colors duration-300 cursor-pointer " onClick={()=> navigate('/characters')} /> Volver a actores</div>
                <div className={"col-span-2 grid grid-cols-1 place-items-center md:grid-cols-2 bg-neutral-650 w-full  flex gap-6  p-6"}>
                    <img className="rounded-xl rounded-t-xl  w-auto h-[500px] md:h-[620px]" src={`https://image.tmdb.org/t/p/original${data.profile_path}`} alt="" />
                    <div className="info ">
                        <br/>
                        <h2 className="text-2xl font-bold">{data.name}</h2><br/>
                        <p><b>Birthday:</b> {data.birthday}</p><br/>
                        <p><b>Place of birth:</b> {data.place_of_birth}</p><br/>
                        <p><b>Popularity:</b> {data.popularity}</p><br/>
                        <p>{data.biography}</p>

                    </div>
                </div>

            </div>
        </>

    )
}

export default ActorDetail