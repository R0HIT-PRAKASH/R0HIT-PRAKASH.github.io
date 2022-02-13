import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Title Text</FooterLinkTitle>
              <FooterLink to="/signin">Text1</FooterLink>
              <FooterLink to="/signin">Text2</FooterLink>
              <FooterLink to="/signin">Text3</FooterLink>
              <FooterLink to="/signin">Text4</FooterLink>
              <FooterLink to="/signin">Text5</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Title Text</FooterLinkTitle>
              <FooterLink to="/signin">Text1</FooterLink>
              <FooterLink to="/signin">Text2</FooterLink>
              <FooterLink to="/signin">Text3</FooterLink>
              <FooterLink to="/signin">Text4</FooterLink>
              <FooterLink to="/signin">Text5</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Title Text</FooterLinkTitle>
              <FooterLink to="/signin">Text1</FooterLink>
              <FooterLink to="/signin">Text2</FooterLink>
              <FooterLink to="/signin">Text3</FooterLink>
              <FooterLink to="/signin">Text4</FooterLink>
              <FooterLink to="/signin">Text5</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Title Text</FooterLinkTitle>
              <FooterLink to="/signin">Text1</FooterLink>
              <FooterLink to="/signin">Text2</FooterLink>
              <FooterLink to="/signin">Text3</FooterLink>
              <FooterLink to="/signin">Text4</FooterLink>
              <FooterLink to="/signin">Text5</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              text
            </SocialLogo>
            <WebsiteRights>text text</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
