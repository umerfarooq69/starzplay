import React from "react";
import { Navbar, Nav, NavItem, NavLink, } from 'reactstrap';
import './style.scss'

const Footer = (props) => {
    const { data } = props
    return (
        <footer>
            {/* Footer Navigation */}
            <Navbar color="default" light expand="md footer-nav">
                <Nav className="mr-auto" navbar> {data.map((item) => { return (<NavItem> <NavLink href={item.url}>{item.label}</NavLink> </NavItem>) })} </Nav>
            </Navbar>

            {/* Copyright Line */}
            <p className='copyRight'>Copyright © 2021 STARZPLAY. All rights reserved.</p>

            {/* Footer Social Icons & Buttons */}
            <div className='social'>
                <span className='fa fa-facebook'></span>
                <span className='fa fa-twitter'></span>
                <span className='fa fa-instagram'></span>
                <span className='fa fa-youtube-play mr-3'></span>
                <img src='//starzplay-img-prod-ssl.akamaized.net/prd-peg-data/default/images/store-apple.svg' alt='' />
                <img src='//starzplay-img-prod-ssl.akamaized.net/prd-peg-data/default/images/store-googleplay.svg' alt='' />
            </div>
        </footer>
    )
}

export default Footer