import { IEpisode } from './IEpisode'
import { IActor } from '../cast/IActor'

export interface IFilm {
    _id: string,
    name: string,
    year: number,
    writers: Array<string>,
    wallpaper: string,
    type: string,
    tags: Array<string>,
    subtitles: Array<string>,
    series: Array<IEpisode>,
    release: string,
    genr: Array<string>,
    duration: string,
    director: string,
    describe: string,
    country: string,
    company: string,
    img: string,
    cast: Array<IActor>,
    audio: Array<string>
}

export interface IFilmShort {
    img: string,
    _id: string,
    name?: string
}

export interface IFilmTrend {
    describe: string,
    wallpaper: string
    name: string,
    _id: string,
    img: string
}

export interface IFilmDetailed {
    _id: string
    img: string
    describe: string
    name: string
    genr: Array<string>
}

export interface IFilmFiltred extends IFilmShort {
    company: string,
    genr: Array<string>
}