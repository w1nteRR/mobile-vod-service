export interface IEpisode {
    describe: string,
    duration: string,
    img: string,
    number: number,
    release: string,
    season: number,
    _id: string,
    name: string
}

export interface IEpisodeShort  {
    _id: string,
    name: string,
    duration: string,
    number: number,
    img: string
}

export interface EpisodeOmdbFull {
    Director: string
    Plot: string
    Poster: string
    Released: string
    Runtime: string
    Year: string
    Title: string
    Episode: string
    imdbVotes: string
    imdbRating: string
    Season: string
}