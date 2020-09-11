export interface IActor {
    actorName: string
    actorRole: string
    img: string
    _id?: string
    films:  IActorFilm
}

export interface IActorFilm {
    actorRole: string
    img: string
    _id: string
}