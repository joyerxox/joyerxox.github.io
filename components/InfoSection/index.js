import React from 'react'
// import { Button } from 'react-scroll'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine,topLine1, topLine2, lightText, headline, darkText, description, description2, description3, img, alt}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <TopLine>{topLine1}</TopLine>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                            <TopLine>{topLine2}</TopLine>
                            <Subtitle darkText={darkText}>{description3}</Subtitle>

                            {/* <BtnWrap>
                                <Button to="home"></Button>
                            </BtnWrap> */}
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection