import React, { FC } from 'react'

import { Container } from '../../common/utils/layout'

import { ScrollContainer } from '../../Film/scrollviews/Scroll.container'

export const ContinueWatch: FC = () => {
  
  return (
    <>
    <ScrollContainer title='Continue watching' />
    <Container>
      <Container 
        w='350px' 
        h='180px' 
        bgColor='silver' 
        style={{ borderRadius: 10 }} 
      />
    </Container>
    </>
  )
}