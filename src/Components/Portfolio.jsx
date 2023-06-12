import project1 from './Images/QR-Code-Generator.png';
import project2 from './Images/awesome-book.png';
import project3 from './Images/programming-language.png';
import project4 from './Images/Math-megician.png';


const Portfolio = () => (
  <main>
    <h2 className="portfolio-heading" id="portfolio">Portfolio</h2>
    <section className="portfolio-cont">
      <div className="project">
        <img src={project1} alt="QR Code Generator" className="preview-image" />
      </div>
      <div className="project">
        <img src={project2} alt="QR Code Generator" className="preview-image" />
      </div>
      <div className="project">
        <img src={project3} alt="QR Code Generator" className="preview-image" />
      </div>
      <div className="project">
        <img src={project4} alt="QR Code Generator" className="preview-image" />
      </div>
      <div className="project">
        <img src={project4} alt="QR Code Generator" className="preview-image" />
      </div>
      <div className="project">
        <img src={project4} alt="QR Code Generator" className="preview-image" />
      </div>
      <div className="project">
        <img src={project4} alt="QR Code Generator" className="preview-image" />
      </div>
    </section>
  </main>
);

export default Portfolio;
