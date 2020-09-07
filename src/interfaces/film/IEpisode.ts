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