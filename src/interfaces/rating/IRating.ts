export interface IRating {
    Ratings: Array<IRatingItem>
    imdbVotes: string
    imdbRating: string
}

export interface IRatingItem {
    Source: string
    Value: string
}