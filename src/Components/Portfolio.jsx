import { Link } from 'react-router-dom';
import data from './API/Project';
const Portfolio = () => {
  const projectsData = data;

  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="portfolio-heading">
        Portfolio
      </h2>
      <div className="portfolio-cont">
        {projectsData.map((project) => (
          <div className="project" key={project.name}>
            <h2 className="project-title">{project.name.replace("-", " ")}</h2>
            <p className="project-description">{project.description}</p>
            <Link to={`project/${project.name.toLowerCase()}`} className="project-button">
              See More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
