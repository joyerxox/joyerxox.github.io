import React, {useState} from 'react';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Mixes from '../components/Mixes';
import Gallery from '../components/Gallery';
//import ImageSlider from '../components/ImageSlider';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        {/* <InfoSection {...homeObjTwo}/> */}
        <Mixes/>
        <Services/>
        <Gallery/>
        {/* <ImageSlider/> */}
        <Footer/>
        {/* <InfoSection {...homeObjThree}/> */}
    </>
  )
}

export default Home