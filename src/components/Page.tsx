import * as React from 'react'
import styled from '@emotion/styled'

// import { dimensions } from '../styles/variables'

const StyledPage = styled.div``

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
