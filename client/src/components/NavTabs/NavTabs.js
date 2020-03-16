import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./nav-tab.css";

const NavTabs = () => {
  return(
    <Navbar expand="lg">
     <Navbar.Brand href="/" style={{color: 'white'}}>
           Hero Finder</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
             <Nav.Link href="/">Home</Nav.Link>
             {/* <Nav.Link href="/savedHeroes">Liked Heroes</Nav.Link> */}
             <Nav.Link href="/search">Search Heroes</Nav.Link>
           </Nav>
       </Navbar.Collapse>
   </Navbar>
 )
}
       
export default NavTabs;