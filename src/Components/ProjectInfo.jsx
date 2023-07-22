import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../Components/Style/projectinfo.css';
import closeImage from '../Components/Images/close_menu.png';
import backImage from '../Components/Images/back_image.png';

const ProjectInfo = () => {
 const { name } = useParams();
 const project = useSelector(state => state.project.projectsData);
 const getProject = project.find((item) => item.name === name)
    return (

       <section className="projectinfo-container">
        <div className="mediuminfo-container">
        <Link to="/">
  <img src={backImage} alt="Close Icon" className="projectinfo-backimg" />
  <img src={closeImage} alt="Close Icon" className="projectinfo-closeimg" />
</Link>
            <h2 className="projectinfo-name">{getProject.name}</h2>
            <img src={getProject.image} alt={getProject.name} className="projectinfo-image"></img>
            <p className="projectinfo-description">{getProject.description}</p>
            <ul className="projectinfo-language">
    {getProject.languages.map((language, index) => (
      <li className="projectinfo-language-list">{language}</li>
    ))}
   </ul>
   <div className="buttons-holder">
   <div className="projectinfo-button"><a href={getProject.liveLink} className="projectinfo-a">View Live</a></div>
   <div className="projectinfo-button"><a href={getProject.sourceCode} className="projectinfo-a">View Code</a></div>
   </div>
        </div>
        </section>
        
    );
};

export default ProjectInfo;