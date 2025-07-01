import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projectsData = useSelector((state) => state.project.projectsData);

  return (

<section className="portfolio-section">
        <h2 className="portfolio-heading" id="portfolio">Portfolio</h2>
      <div className="portfolio-cont">
        {projectsData.map((project) => (
          <div className="project" key={project.name}>
            <img src={project.image} alt={project.name} className="preview-image" />
            <div className="project-info-overlay-container">
            {/* 
           <ul className="project-language">
              {project.languages.map((language) => (
                <li className="language-list" key={language.name}>{language}</li>
              ))}
            </ul> */}
            <h2 className="project-title">{project.name}</h2>
           <Link to={`project/${project.name}`} className="project-button">See More</Link>
           </div>
          </div>
        ))}

      </div>
      </section>

  );
};

export default Portfolio;
