import React from 'react'
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer_logo'>PROGRAMMER </a>
            <ul className='permalinks'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#services'>Services</a>
                </li>
                <li>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='#testmonials'>Testemonials</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
            <div className="footer_socials">
                <a href='www.facebook.com'><FaFacebookF /></a>
                <a href='www.instagram.com'><FaInstagram /></a>
                <a href='www.twitter.com'><FaTwitter /></a>
            </div>
            <div className='foter_copyright'>
                <small>&copy; Programmer . All right reserved</small>
            </div>
        </footer>
    )
}

export default Footer