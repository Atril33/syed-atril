import menuBar from './Images/menu-bars.png';
import backImage from './Images/code_image.jpg';
import backMobileHeader from './Images/3d-mobile-header.png';

const Header = () => (
  <>
    <header>
      <nav id="nav-bar">
        <h1 className="logo">Atril</h1>
        <ul className="nav-list">
          <li className="nav-item"><a href="#portfolio" className="a-link">portfolio</a></li>
          <li className="nav-item"><a href="#about" className="a-link">about</a></li>
          <li className="nav-item"><a href="#contact" className="a-link">contact</a></li>
          <li className="nav-item resume-button">my resume</li>
        </ul>
        <img src={menuBar} alt="Menu Icon" className="menu-icons"></img>
      </nav>
      <div className="header-container">
        <div className="header-info">
          <h2 className="info-title">
            Hi👋I’m Syed
          </h2>
          <p className="info-des">
            I’m a Front-End Web Developer!🚀 I can help you build a product,
            feature or website Look through some of my work and experience!
            If you like what you see and have a project you need coded,
            don’t hestiate to contact me.
          </p>
          <div className="connects" />
        </div>
        <div className="illustration">
          <img src={backImage} alt="Illustration" className="illut-image" />
          <div className="image-cover" />
        </div>
      </div>
    </header>
  </>
);

export default Header;
