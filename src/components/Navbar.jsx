import { useState, useEffect } from "react"
import { Link } from 'react-scroll';

import "../Styles/Navbar.css"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from "../assets/img/nav-icon4.png"

export default function Navbar() {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const scrollToConnect = () => {
        const connectSection = document.getElementById('connect');
        
        if (connectSection) {
            connectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };    

    return (
        <nav className={scrolled ? "scrolled" : ""}>
            <div className="container">
                <h2 className="logo">PORTFOLIO</h2>
                <div className="navbar-components">
                    <ul className={nav ? 'navbar-nav' : 'navbar-nav active'}>
                        <li className="nav-item">
                            <Link to="home" smooth={true} duration={300} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home') }>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="skills" smooth={true} duration={300} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills') }>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" smooth={true} duration={300} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects') }>Projects</Link>
                        </li>
                    </ul>
                    <span className="social">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/harsh-upadhyay--/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/haaaarsh4" target="_blank"><img src={navIcon4} alt="Icon" /></a>
                            <a href="https://www.instagram.com/hhxrsh_/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <button className="connect-button" onClick={scrollToConnect}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </div>
                <div id="mobile">
                    <i id="bar" onClick={handleNav}  className={!nav ? 'fas fa-times' : 'fas fa-bars'}>
                    </i>
                </div>
            </div>
        </nav>
    )
}