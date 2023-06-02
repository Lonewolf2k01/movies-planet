import './Footer.scss'

import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { motion as m } from 'framer-motion'


const Footer = () => {
    return (
        <m.footer
            
            className="footer"
        >
            <ContentWrapper>
                <m.ul
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </m.ul>
                <m.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="infoText">
                    Hi!! I am Adarsh Teeparthi. 
                    I am a highly motivated developer with a strong passion for my craft. Over the course of my career, I have successfully created various websites using a range of technologies, including HTML, CSS, JavaScript, ReactJS, and other relevant tools. My proficiency in these technologies has enabled me to deliver impactful and functional web solutions. I am continually seeking to enhance my skills and stay abreast of the latest advancements in the field to consistently deliver high-quality results.
                </m.div>
                <div className="socialIcons">
                    <m.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="icon" >
                        <a href="https://www.facebook.com/profile.php?id=100007010536274" target='_blank'>
                            <FaFacebookF />
                        </a>
                    </m.span>
                    <m.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="icon">
                        <a href='https://www.instagram.com/_awsom_adarsh/' target='_blank'>
                            <FaInstagram />
                        </a>
                    </m.span>
                    <m.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="icon">
                        <a href="https://twitter.com/" target='_blank'>
                            <FaTwitter />
                        </a>
                    </m.span>
                    <m.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="icon">
                        <a href="https://www.linkedin.com/in/adarsh-teeparthi-380980233/" target='_blank'>
                            <FaLinkedin />
                        </a>
                    </m.span>
                </div>
            </ContentWrapper>
        </m.footer>
    );
};

export default Footer;