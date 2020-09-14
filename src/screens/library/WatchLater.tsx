import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Background } from '../../components/common/utils/layout'
import { TextT } from '../../components/common/utils/typography'
import { ListImgCustom } from '../../components/lists/Flat.list'

import { IFilmShort } from '../../interfaces/film/IFilm'

import { useAuth } from '../../hooks/auth/useAuth'
import { useAxios } from '../../hooks/useAxios'

import { RootState } from '../../redux/rootReducer'

export const WatchLater: FC = () => {
    
    useAuth()

    const token = useSelector((state: RootState) => state.auth.token)

    const { res, loading } = useAxios(`/api/library/watch-later/list`, {
        method: 'POST',
        data: {
            token
        }
    })    

    if(loading) return (
        <Background>
            <TextT>loading...</TextT>
        </Background>
    )

    const wlFilms: Array<IFilmShort> = res?.data

    return (
        <Background>
            <ListImgCustom data={wlFilms} />
        </Background>
    )
}