import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLinkInfo,
	FooterLinkEmail,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink
} from './FooterElement';

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
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLinkInfo>246-235-7868</FooterLinkInfo>
							<FooterLinkInfo>246-239-7087</FooterLinkInfo>
							<FooterLinkEmail
								to="javascript:void(0)"
								onClick={() => (window.location = 'mailto:mhkentertainment@gmail.com')}
							>
								mhkentertainment@gmail.com
							</FooterLinkEmail>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Socials</FooterLinkTitle>
							<FooterLink
								href="https://www.instagram.com/hyperdriveteam/"
								target="_blank"
								rel="noreferrer noopener"
							>
								Instagram
							</FooterLink>
							<FooterLink
								href="https://twitter.com/hyperdriveteam"
								target="_blank"
								rel="noreferrer noopener"
							>
								Twitter
							</FooterLink>
							<FooterLink
								href="https://www.youtube.com/channel/UCoehXekQSSzx2YJmQLCk6nA"
								target="_blank"
								rel="noreferrer noopener"
							>
								Youtube
							</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Address</FooterLinkTitle>
							<FooterLinkInfo>Strong Hope, St. Thomas</FooterLinkInfo>
							<FooterLinkInfo>Barbados</FooterLinkInfo>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							Hyperdrive
						</SocialLogo>
						<WebsiteRights>Copyright © {new Date().getFullYear()} Hyperdrive Entertainment</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="https://www.instagram.com/hyperdriveteam/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="https://twitter.com/hyperdriveteam"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="https://www.youtube.com/channel/UCoehXekQSSzx2YJmQLCk6nA"
								target="_blank"
								aria-label="Youtube"
							>
								<FaYoutube />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
