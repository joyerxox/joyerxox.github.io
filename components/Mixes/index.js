import React from 'react'
import Logo from '../../images/hyperdrivelogo.png';
import Podcast from '../../images/podcast.png';
import Spreaker from '../../images/spreaker.png';
import AudioMack from '../../images/audiomack.png';
import {MixesContainer, MixesWrapper, MixesRow, MixesColumn1, MixesImgWrap, MixesImg, MixesColumn2, MixesTopLine, MixesHeading, MixesLink, MixesLinkImg} from './MixesElements';


const Mixes = () => {
  return (
    <>
        <MixesContainer>
            <MixesWrapper>
                <MixesRow>
                    <MixesColumn1>
                    <MixesImgWrap>
                            <MixesImg src={Logo} alt={"logo"}/>
                    </MixesImgWrap>
                    </MixesColumn1>
                    <MixesColumn2>
                    <MixesTopLine>NEVER MISS OUT</MixesTopLine>
                    <MixesHeading>Listen to Our Mixes & Live Audios</MixesHeading>
                        <MixesLink href="https://apple.co/3Banj1F">
                            <MixesLinkImg src={Podcast} alt={"podcast"}/>
                            {/* Apple Podcast */}
                        </MixesLink>
                        <MixesLink href="https://apple.co/3Banj1F">
                            <MixesLinkImg src={Spreaker} alt={"spreaker"}/>
                            {/* Spreaker */}
                        </MixesLink>
                        <MixesLink href="https://apple.co/3Banj1F">
                            <MixesLinkImg src={AudioMack} alt={"audiomack"}/>
                            {/* AudioMack */}
                        </MixesLink>
                    </MixesColumn2>
                </MixesRow>
            </MixesWrapper>
        </MixesContainer>
    </>
  )
}

export default Mixes