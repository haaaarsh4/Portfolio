import Typed from "react-typed"
import arrow from "../assets/img/arrow-right-circle (1).svg"
import "../Styles/Banner.css"

export default function Banner() {
    const scrollToConnect = () => {
        const connectSection = document.getElementById('connect');
        
        if (connectSection) {
            connectSection.scrollIntoView({ behavior: 'smooth' });
        }
    };    

    return (
        <div className="banner-body" id="home">
        <div className="banner">
            <span className="tagline">
                Welcome to my portfolio
            </span>
            <h1 className="header">
                Hi I'm{" "}
                <Typed
                    strings={["Harsh Upadhyay"]}
                    typeSpeed={100}
                    showCursor={true}
                />
            </h1>
            <p>
                I'm a dedicated computer science student with a passion for coding and problem-solving. Exploring the intersections of technology and innovation fuels my curiosity and drive.
                <br />
                Let's dive into the digital world together and make amazing things happen!
            </p>
            <button className="banner-button" onClick={scrollToConnect}>
                Let's connects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </button>
        </div>
        </div>
    )
}