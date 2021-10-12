import React, { Fragment } from "react";
import Button from '../../../componenets/Button'
import Data from '../../../homepage.json'
import NavbarMain from '../../../componenets/Navbar'
import Footer from '../../../componenets/Footer'
import HeroSlider from '../../../componenets/HeroSlider'
import styled from "styled-components";
import './style.scss'

const ExploreBtn = styled.div `margin-bottom: 50px;width: 100%;text-align: center;`;

const Home = () => {
    return (
        <Fragment>
            {/* Top Navbar  */}
            <NavbarMain />
            {
                Data.titles.map((item) => {
                    return (
                        item.title === 'Hero Banner' ?
                            //  Hero Banner
                            <HeroSlider data={item} autoplay={true} slidesToShow={1.65} speed={2500} arrows={false} autoplaySpeed={5000} pauseOnHover={true} customClass={'heroBanner'} thumbnailsSize={'thumb-613x1536'} slidesToScroll={1} />
                            :
                            // Generic Sliders
                            <div className='customContainer'>
                                <h3>{item.title}</h3>
                                <HeroSlider data={item} autoplay={false} slidesToShow={6} speed={500} arrows={true} autoplaySpeed={4000} pauseOnHover={true} customClass={'subBanner'} thumbnailsSize={'thumb-677x474'} slidesToScroll={6} />
                            </div>
                    )
                })
            }
            {/* Explore Button */}
            <ExploreBtn>  <Button>Explore More</Button>  </ExploreBtn>
            {/* Footer */}
            <Footer data={Data.footer} />
        </Fragment>
    )
}

export default Home;