export interface IRating {
    Ratings: Array<IRatingItem>
    imdbVotes: string
    imdbRating: string
}

interface IRatingItem {
    Source: string
    Value: string
}