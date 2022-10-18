import React from 'react';
import Img1 from '../../images/dj1.png';
import Img2 from '../../images/dj2.png';
import Img3 from '../../images/dj3.png';
import Img4 from '../../images/dj4.png';
import Img5 from '../../images/dj5.png';
import Img6 from '../../images/dj6.png';
import Img7 from '../../images/dj7.png';
import Img8 from '../../images/dj8.png';
import { GalleryContainer, GalleryWrapper, GalleryHeader, GalleryImage} from './GalleryElements';

const Gallery = () => {
  return (
    <>
        <GalleryContainer>
        <GalleryHeader>A Day in the Life of Hyperdrive</GalleryHeader>

            <GalleryWrapper>

           
                <GalleryImage src={Img1} alt={"deejays"}/>
                <GalleryImage src={Img2} alt={"deejays"}/>
                <GalleryImage src={Img3} alt={"deejays"}/>
                <GalleryImage src={Img4} alt={"deejays"}/>
                <GalleryImage src={Img5} alt={"deejays"}/>
                <GalleryImage src={Img6} alt={"deejays"}/>
                <GalleryImage src={Img7} alt={"deejays"}/>
                <GalleryImage src={Img8} alt={"deejays"}/>
           
            </GalleryWrapper>
        </GalleryContainer>
    </>
  )
}

export default Gallery