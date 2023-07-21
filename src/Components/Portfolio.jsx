import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


const Portfolio = () => {
  const projectsData = useSelector(state => state.project.projectsData);

  return (
    <main>
      <h2 className="portfolio-heading" id="portfolio">Portfolio</h2>
      <section className="portfolio-cont">
        {projectsData.map(project => (
   <div className="project">
   <img src={project.image} alt={project.name} className="preview-image" />
   <h2 className="project-title">{project.name}</h2>
   <ul className="project-language">
    {project.languages.map((language, index) => (
      <li className="language-list">{language}</li>
    ))}
   </ul>
   <Link to={`project/${project.name}`} className="project-button">See More</Link>
 </div>
        ))}
     
      </section>
    </main>
  );
};

export default Portfolio;
