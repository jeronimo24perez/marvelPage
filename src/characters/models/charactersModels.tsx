export interface CastMember {
    adult: boolean;
    gender: 0 | 1 | 2 | 3;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}
export interface TMDBCreditsResponse {
    id: number;
    cast: CastMember[];
    crew: CastMember[];
}
export interface TMDBKnownFor {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    media_type: "movie" | "tv";
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    softcore: boolean;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
 export interface TMDBPerson {
    adult: boolean;
    gender: 0 | 1 | 2 | 3;
    id: number;
    known_for: TMDBKnownFor[];
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}