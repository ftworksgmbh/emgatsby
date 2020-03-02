import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { PartnerNetwork } from '../components/Partner_Network'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <PartnerNetwork />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
