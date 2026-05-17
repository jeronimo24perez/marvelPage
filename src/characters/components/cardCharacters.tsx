import type {CastMember} from "../models/charactersModels.tsx";
import {Link} from "react-router";

interface CardCharactersProps {
    data: CastMember[]
}
const CardCharacters = ({data}:CardCharactersProps) => {
    return(
        <>
            <main className="grid p-15 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {
                    data.map( (character: CastMember)=>
                            <Link to={'/actor/'+ character.id} className="text-neutral-50 font-bold text-center hover:opacity-70 transition-opacity cursor-pointer hover:text-red-500 transition-colors duration-300" key={character.id}>
                                <img className="rounded-3xl" src={`https://image.tmdb.org/t/p/original${character.profile_path}`} alt=""/>
                                <h2>{character.name}</h2>
                                <p className="text-sm font-normal text-neutral-400">{character.character}</p>
                            </Link>

                    )
                }
            </main>

        </>
    )
}

export default CardCharacters