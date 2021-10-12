import React from "react";
import { Navbar, Nav, NavItem, NavLink, } from 'reactstrap';
import './style.scss'
import { MainFooter, SocialIcons, SocialIconsSpan } from "../../styledComponents";

const Footer = (props) => {
    const { data } = props
    return (
        <MainFooter>
            {/* Footer Navigation */}
            <Navbar color="default" light expand="md footer-nav">
                <Nav className="mr-auto" navbar> {data.map((item) => { return (<NavItem> <NavLink href={item.url}>{item.label}</NavLink> </NavItem>) })} </Nav>
            </Navbar>

            {/* Copyright Line */}
            <p className='copyRight'>Copyright © 2021 STARZPLAY. All rights reserved.</p>

            {/* Footer Social Icons & Buttons */}
            <SocialIcons className='social'>
                <SocialIconsSpan className='fa fa-facebook'></SocialIconsSpan>
                <SocialIconsSpan className='fa fa-twitter'></SocialIconsSpan>
                <SocialIconsSpan className='fa fa-instagram'></SocialIconsSpan>
                <SocialIconsSpan className='fa fa-youtube-play mr-3'></SocialIconsSpan>
                <img src='//starzplay-img-prod-ssl.akamaized.net/prd-peg-data/default/images/store-apple.svg' alt='' />
                <img src='//starzplay-img-prod-ssl.akamaized.net/prd-peg-data/default/images/store-googleplay.svg' alt='' />
            </SocialIcons>
        </MainFooter>
    )
}

export default Footer