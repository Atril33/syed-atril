import backImage from './code_image.jpg';

const Header = () => (
  <>
    <header>
      <nav id="nav-bar">
        <h1 className="logo">Atril</h1>
        <ul className="nav-list">
          <li className="nav-item">portfolio</li>
          <li className="nav-item">about</li>
          <li className="nav-item">contact</li>
          <li className="nav-item resume-button">my resume</li>
        </ul>
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
