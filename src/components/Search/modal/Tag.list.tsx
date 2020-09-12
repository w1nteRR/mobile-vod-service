import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { CheckboxCustom } from '../../common/styled/inputs/inputs.shared'
import { Container } from '../../common/utils/layout'
import { TextT } from '../../common/utils/typography'

import { RootState } from '../../../redux/rootReducer'
import { useSearch } from '../../../hooks/search/useSearch'

export const TagList: FC = () => {
    
    const tags = useSelector((state: RootState) => state.search.tags)
    const { handleTag } = useSearch()
     
    return <>
    {
        Object.entries(tags).map((item, index) =>
            <Container direction='column' key={index} m='0 0 100px'>
                <Container justify='flex-start' p='20px'>
                    <TextT>{item[0]}</TextT>
                </Container>
                <Container wrap='true'>
                    {
                        item[1].map(tag =>
                            <CheckboxCustom
                                key={tag.id}
                                text={tag.value}
                                isActive={tag.checked}
                                onPress={() => handleTag(item[0], tag.id)}
                            />
                        )
                    }
                </Container>
            </Container>
        )
    }
    </>
}