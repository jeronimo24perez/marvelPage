import { useState } from "react";
import Navbar from "../../shared/components/navbar.tsx";
import useCharacters from "../hooks/useCharacters.tsx";
import CardCharacters from "../components/cardCharacters.tsx";
import Skeleton from "../../shared/components/Skeleton.tsx";

const Characters = () =>{
    const {data, isFetching, error} = useCharacters()
    const [searchTerm, setSearchTerm] = useState("");


    if(isFetching){
        return (
            <div className="flex gap-4 px-4 pt-5">
                {[1, 2, 3].map(i => <Skeleton key={i} className="w-full h-80"/>)                }
            </div>
        )
    }
    if(error) return <div>Error: {error.message}</div>

    const filteredData = data?.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <>
            <Navbar active={'characters'} />
            <div className="pt-25 px-15">
                <input
                    type="text"
                    placeholder="Buscar actor de Marvel..."
                    className="w-full p-3 rounded-xl bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-red-500 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {filteredData && <CardCharacters data={filteredData} />}

        </>
    )
}

export default Characters