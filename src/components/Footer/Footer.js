import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights
} from './Footer.elements';

function Footer() {
  return (
<FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
        En son haberleri ,güncellemeleri ve bilgileri almak için Üye olun.
        </FooterSubHeading>
        <FooterSubText>Hemen Üye olabilirsiniz.</FooterSubText>
        <Form>

          <Button to='/' fontBig>Üye Ol</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Hakkımızda</FooterLinkTitle>
            <FooterLink to='/'>Ders Programları</FooterLink>
            <FooterLink to='/'>Blog</FooterLink>
            <FooterLink to='/'>Sponsorlarımız</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Katıl</FooterLinkTitle>
            <FooterLink to='/'>Eğitmen Ol</FooterLink>
            <FooterLink to='/'>Kurumlar İçin Hippo </FooterLink>
            <FooterLink to='/'>Çocuklar İçin Hippo </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Sosyal Medyalarımız</FooterLinkTitle>
            <FooterLink to='/'><FaFacebook />Facebook</FooterLink>
            <FooterLink to='/'><FaInstagram />Instagram </FooterLink>
            <FooterLink to='/'><FaYoutube />Youtube</FooterLink>
            <FooterLink to='/'><FaTwitter />Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            Hippo Talk
          </SocialLogo>
          <WebsiteRights>Hippo Talk © 2022</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
