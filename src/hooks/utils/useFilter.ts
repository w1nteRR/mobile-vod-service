import { IEpisode } from "../../interfaces/film/IEpisode"

export const useFilter = (data: Array<any>) => {
    
    function episodes (episodeNumber: number) {
        const seasons = Array.from(new Set(data.map((i: IEpisode) => i.season)))

        const filtredEpisodes: Array<IEpisode> = data.filter(episode => episode.season === episodeNumber)

        return {
            seasons,
            filtredEpisodes
        }
    }

    function films (filter: string | number) {
        return data.filter(film => film.genr.includes(filter))
    }


    return {
        episodes,
        films
    }
}