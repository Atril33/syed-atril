import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuBar from './assets/menu-bars.png';
import closeMenu from './assets/close_menu.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="nav-bar">
      <h1 className="logo">
        <Link to="/">Atril</Link>
      </h1>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/#portfolio" className="a-link">
            portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href="/#about" className="a-link">
            about
          </a>
        </li>
        <li className="nav-item">
          <a href="/#contact" className="a-link">
            contact
          </a>
        </li>
        <li className="nav-item resume-button">
          <a
            href="https://docs.google.com/document/d/1fZZCECSqm6X3dd4_IPmgsvxgArtmKxxtvHjQ2kIWi28/edit?usp=sharing"
            className="resume-link"
          >
            my resume{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </a>
        </li>
      </ul>
      {isOpen && (
        <ul className="nav-list-mobile">
          <img
            src={closeMenu}
            alt="Close Icon"
            className="close-menu"
            onClick={toggleMenu}
          />
          <li className="nav-item-mobile">
            <a href="/#portfolio" className="a-link" onClick={toggleMenu}>
              portfolio
            </a>
          </li>
          <li className="nav-item-mobile">
            <a href="/#about" className="a-link" onClick={toggleMenu}>
              about
            </a>
          </li>
          <li className="nav-item-mobile">
            <a href="/#contact" className="a-link" onClick={toggleMenu}>
              contact
            </a>
          </li>
          <li className="nav-item-mobile resume-button">
            <a
              href="https://docs.google.com/document/d/1fZZCECSqm6X3dd4_IPmgsvxgArtmKxxtvHjQ2kIWi28/edit?usp=sharing"
              className="resume-link"
            >
              my resume{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </a>
          </li>
        </ul>
      )}
      <img
        src={menuBar}
        alt="Menu Icon"
        className="menu-icons"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
