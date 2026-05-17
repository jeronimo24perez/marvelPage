export interface Movie {
    id:                 number;
    title?:             string;
    name?:              string;
    original_title?:    string;
    original_name?:     string;
    original_language: string;
    overview:          string;
    release_date?:      string;
    first_air_date?:    string;
    poster_path:       string;
    backdrop_path:     string;
    genre_ids:         number[];
    popularity:        number;
    vote_average:      number;
    vote_count:        number;
    adult:             boolean;
    video?:             boolean;
    media_type?:        string;
}
export interface MovieDetail {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: {
        id: number
        name: string
        poster_path: string
        backdrop_path: string
    } | null
    budget?: number
    genres: {
        id: number
        name: string
    }[]
    homepage: string
    id: number
    name?: string
    first_air_date?: string
    last_air_date?: string
    number_of_episodes?: number
    number_of_seasons?: number
    imdb_id?: string
    origin_country?: string[]
    original_language: string
    original_title?: string
    original_name?: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: {
        id: number
        logo_path: string
        name: string
        origin_country: string
    }[]
    production_countries: {
        iso_3166_1: string
        name: string
    }[]
    release_date?: string
    revenue?: number
    runtime?: number
    episode_run_time?: number[]
    status: string
    tagline: string
    title?: string
    video?: boolean
    vote_average: number
    vote_count: number
}
export interface MovieData {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}