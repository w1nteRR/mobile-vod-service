import { IFilmShort } from '../film/IFilm'

export interface IPlaylist {
    _id: string
    films: Array<IFilmShort>
    name: string
}