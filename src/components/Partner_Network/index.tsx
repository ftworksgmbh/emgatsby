import React from 'react'
import { BlockHeading, SectionWrapper, SectionHeadingPrimary, SectionHeadingSecondary, BlockWrapper, Block, BlockText } from './style'
import { data } from './data'

export const PartnerNetwork = () => {
  return (
    <SectionWrapper>
      <SectionHeadingPrimary>Weitere Informationen zum Thema</SectionHeadingPrimary>
      <SectionHeadingSecondary>Lesen Sie hier mehr.</SectionHeadingSecondary>
      <BlockWrapper>
        {data.map(item => {
          return (
            <Block key={item.content}>
              <BlockHeading>{item.heading}</BlockHeading>
              <BlockText>{item.content}</BlockText>
            </Block>
          )
        })}
      </BlockWrapper>
    </SectionWrapper>
  )
}
