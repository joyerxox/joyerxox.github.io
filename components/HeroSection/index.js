import React from 'react';
import Video from '../../videos/deejay3.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Hyperdrive. All de time. Waz de Vibe.</HeroH1>
				<HeroP>
					Bringing your events to life with the Hyperdrive duo. Whether it be a wedding, a cruise, a land
					event, corporate functions etc.
				</HeroP>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
