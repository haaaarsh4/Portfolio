import "../Styles/ProjectCard.css"

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <a href={ link } target="_blank" >
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
    )
  }