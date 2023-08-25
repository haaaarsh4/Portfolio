import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import "../Styles/Skills.css"

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <div className="skills" id="skills">
            <div className="skill-bx">
                <h2 className="header2">
                    Skills
                </h2>
                <p className="skills-p">
                I possess a diverse skill set encompassing web development <strong>(HTML, CSS, JavaScript, React.js, Tailwind CSS)</strong>, object-oriented programming <strong>(Python, C)</strong>, functional programming <strong>(Haskell, Elm)</strong>, and a proficiency in <strong>machine learning</strong>. This versatile expertise equips me to tackle a wide range of projects with creativity and precision.
                </p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>C / C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Haskell</h5>
                            </div>
                </Carousel>
            </div>
        </div>
    )
}