import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png";
import "../Styles/Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <h2>HARSH</h2>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harsh-upadhyay--/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/haaaarsh4" target="_blank"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://www.instagram.com/hhxrsh_/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <p>Copyright 2022. All Rights Reserved</p>
            </div>
        </div>
    )
}