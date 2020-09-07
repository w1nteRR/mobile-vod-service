export interface IActor {
    actorName: string,
    _id?: string,
    films:  IActorFilm
}

interface IActorFilm {
    actorRole: string,
    img: string,
    _id: string
}