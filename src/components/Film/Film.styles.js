import styled from 'styled-components'

export const FilmName = styled.Text`
    margin-left: 2%;
    font-size: 20px;
    color: #fff;
    width: 50%;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.7px;
`

export const HiddenContainer = styled.View`
    width: 100%;
    top: 265px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const RatingContainer = styled.View`
    width: 50%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`

export const RatingItem = styled.View`
    width: 50px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 10px 10px 10px red;
`

export const RatingText = styled.Text`
    font-size: 11px;
    font-weight: 700;
    color: ${props => props.textColor};
    opacity: .8;
`

export const ScrollViewContainer = styled.View`
    min-height: 100px;
    width: 100%;
    margin-bottom: 10%;
    padding: 10px;
`

export const TagContainer = styled.View`
    width: 90px;
    height: 30px;
    border: .8px #fff;
    border-radius: 10px;
    margin: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const DescribeText = styled.Text`
    font-size: 11px;
    color: silver;
    font-weight: 700;
    opacity: .8;
    margin-left: 15px;
    line-height: 20px;
`
export const ActorInfo = styled.View`
    width: 100%;
    height: 120px;
    position: absolute;
    bottom: 5px;
`

export const ActorRole = styled.Text`
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    bottom: 50px;
    margin: 0 auto;
`

export const ActorName = styled(ActorRole)`
    color: silver;
    font-size: 9px;
    font-weight: 700;
    bottom: 40px;
    margin: 0 auto;
`

export const FilmInfoWrapper = styled.View`
    width: 90%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`

export const FilmInfoContainer = styled.View`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: space-between;
`

export const FilmInfoRow = styled.View`
    width: 100%;
    height: 50px;

    display: flex;
`

export const SubInfoRow = styled.View`
    height: 50%;
    display: flex;
    align-items: ${props => props.textPosition};
    padding-left: ${props => props.paddingLeft || 0};
`

export const FilmInfoActiveText = styled.Text`
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
`
export const FilmInfoText = styled(FilmInfoActiveText)`
    color: silver;
    font-size: 9px;
    letter-spacing: 1px;
`
