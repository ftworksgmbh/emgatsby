import styled from '@emotion/styled'

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const SectionWrapper = styled.div`
  text-align: center;
  padding: 25px 0;
  width: 100%;
  margin-bottom: 35px;
  background: linear-gradient(180deg, #ffffff 50%, #f2cfb7 50%);
`
export const SectionHeadingPrimary = styled.h1`
  font-family: Trirong;
  font-size: 36px;
  font-weight: 400;
  color: #01565b;
`

export const SectionHeadingSecondary = styled.h4`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #01565b;
`
export const BlockWrapper = styled.div`
  text-align: center;
`
export const Block = styled.div`
  display: inline-block;
  background: #e59f71;
  width: 22%;
  text-align: left;
  margin: 1%;
  padding: 0 25px;
  ${mq[1]} {
    width: 90%;
  }
`
export const BlockHeading = styled.h5`
  font-size: 17px;
  width: 30%;
  color: #01565b;
`
export const BlockText = styled.p`
  font-size: 14px;
  color: #01656b;
  font-weight: 400;
`
