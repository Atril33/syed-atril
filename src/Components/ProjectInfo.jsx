import { Link, useParams } from 'react-router-dom';
import './Style/projectinfo.css';
import Navbar from './navbar';
import data from './API/Project';
import backImage from './assets/back_image.png';

const ProjectInfo = () => {
  const { name } = useParams();
  const getProject = data.find((item) => item.name === name);
  const languages = getProject.languages || [];
  const moreDetails = getProject.moreDetail || [];
 
  return (
<>
    <Navbar />
      <div className="mediuminfo-container-header"></div>
   <section className="projectinfo-container">
    <div className="projectinfo-name-container">
      <h2 className="projectinfo-name">{getProject.name}</h2>
      <a href={getProject.liveLink} target="_blank" rel="noopener noreferrer" className="projectinfo-live-link">Link<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg></a>
      </div>
      <ul className="projectinfo-languages">
      {languages.map(language => (
        <li className="each-language" key={language}>
          {language}
        </li>
      ))}
      </ul>
       
       <ul className="projectinfo-detail">
       <li className="project-each-info">
  {moreDetails.map((detail, index) => {
    const isVideo = detail.moreDetail.match(/\.(mp4|webm|ogg)$/i);
    const isImage = detail.moreDetail.match(/\.(jpg|jpeg|png|gif|bmp|svg)$/i);

    return (
     
  <>
        
        {isImage && (
          <img
            src={detail.moreDetail}
            alt={detail.moreInfo || 'project image'}
            className="projectinfo-detail-image"
          />
        )}

        {isVideo && (
          <video
            src={detail.moreDetail}
            controls
            className="projectinfo-detail-video"
          />
        )}

              <p className="projectinfo-detail-text">{detail.moreInfo}</p>
 </>
    );
  })}
</li>

       </ul>
    </section>
</>
     
  );
};

export default ProjectInfo;
