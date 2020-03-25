import React from 'react';
import './footer.css';
import github from './github.png';

const Footer = () => {
    return(
        <footer id="footer">
            <p>By Ashley Clarke <a href="https://github.com/crashley1992" target="_blank" rel="noopener noreferrer" ><img src={github} id='github' /></a></p>
        </footer>
    )
}

export default Footer;