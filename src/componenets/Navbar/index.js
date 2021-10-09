import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import './style.scss'
import searchImg from './../../assets/images/Navbar/search.png'
import settingImg from './../../assets/images/Navbar/setting.png'

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen) }
    return (
        <Navbar color="default" light expand="md nav-default">
            <NavbarBrand href="/"><b>STARZ</b>PLAY</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>

                <Nav className="mr-auto" navbar>
                    <NavItem>  <NavLink href="/" className='active'>MOVIES</NavLink>  </NavItem>
                    <NavItem>  <NavLink href="/">TV SHOW</NavLink>  </NavItem>
                    <NavItem>  <NavLink href="/">ARABIC</NavLink>  </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret> KIDS CHANNELS </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>  Option 1 </DropdownItem>
                            <DropdownItem>  Option 2 </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>

                <Nav className="ml-auto navbar-nav" >
                    <NavItem> <NavLink className='navbar__img' href="/"><img src={searchImg} alt=''/></NavLink>  </NavItem>
                    <NavItem> <NavLink className='navbar__img' href="/"><img src={settingImg} alt=''/></NavLink> </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default NavbarComponent