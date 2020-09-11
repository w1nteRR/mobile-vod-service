export interface IFilter {
    value: string | number,
    checked: boolean,
    id: number
}

export interface ISearchData {
    [key: string]: Array<string | number>
}