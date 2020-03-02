import React from 'react'
import { Link } from 'gatsby'
import { FooterWrapper, FooterHeading, FooterLinkList, FooterLinks } from './styles'
import { linksGroup2, linksGroup1, linksGroup3 } from './data'

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <FooterHeading>Wir sind jederzeit telefonisch für Sie erreichbar.</FooterHeading>
        <FooterLinkList>
          {linksGroup3.map(link => {
            return (
              <FooterLinks key={link.text}>
                <Link to={link.link}>{link.text}</Link>
              </FooterLinks>
            )
          })}
        </FooterLinkList>
        <FooterLinkList>
          {linksGroup1.map(link => {
            return (
              <FooterLinks key={link.text}>
                <Link to={link.link}>{link.text}</Link>
              </FooterLinks>
            )
          })}
        </FooterLinkList>
        <FooterLinkList>
          {linksGroup2.map(link => {
            return (
              <FooterLinks key={link.text}>
                <Link to={link.link}>{link.text}</Link>
              </FooterLinks>
            )
          })}
        </FooterLinkList>
      </FooterWrapper>
    </footer>
  )
}

export default Footer
