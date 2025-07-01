import { useState, useEffect } from 'react';
import menuBar from './Images/menu-bars.png';
import closeMenu from './Images/close_menu.png';
import keyboardClickSound from './Images/single-keyboard-click.wav';
import { set } from 'react-ga';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const roleTitle = document.querySelector('.role-title');
    const eachButton = document.querySelectorAll('.key');
    let roleTitleArr = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    let keyboardButtons = [];
    let finalIndices = [];


    eachButton.forEach((button, index) => {
      keyboardButtons.push({
        key: button.textContent,
        index: index
      });

      button.addEventListener('click', () => {
        const audio = new Audio(keyboardClickSound);
        audio.play();
        audio.volume = 0.3;
        button.classList.add('active');

        setTimeout(() => {
          button.classList.remove('active');
          button.classList.remove('backsapce-active');
        }, 200);
        
        if(index === 13) {
          button.classList.add('backsapce-active');
        }
      });
    });

    roleTitleArr.forEach((char) => {
      keyboardButtons.forEach((button) => {
        if (button.key.toLowerCase() === char.toLowerCase()) {
          finalIndices.push(button.index);
        }
      });

    });

   let typingSpeed = 500;
   let backTypingSpeed = 50;
   let contentBuffer = [];

 

finalIndices.forEach((index, i) => {
  const typingAnimation = () => {
    setTimeout(() => {
      eachButton[index].classList.add('active');

      contentBuffer.push(roleTitleArr[i]); 

      roleTitle.style.setProperty('--content', `'${contentBuffer.join('')}'`);

      setTimeout(() => {
        eachButton[index].classList.remove('active');
      }, typingSpeed);

      
       


    }, i * typingSpeed + 1000);


    
  };

  typingAnimation();

  function backTypingAnimation() {
    setTimeout(() => {
       eachButton[13].classList.add('backsapce-active');
        contentBuffer.pop(); 
        roleTitle.style.setProperty('--content', `'${contentBuffer.join('')}'`);

        setTimeout(() => {
          eachButton[13].classList.remove('backsapce-active');
        }, backTypingSpeed * roleTitleArr.length);

      }, i * backTypingSpeed + roleTitleArr.length * typingSpeed + 2000);
      
    }
 
backTypingAnimation();

  setInterval(() => {
    contentBuffer = []; 
    roleTitle.style.setProperty('--content', "''"); 
    typingAnimation();
    backTypingAnimation();
  }, typingSpeed * roleTitleArr.length + 7000);
});






  }, [])

  return (
    <>
      <header>
        <nav id="nav-bar">
          <h1 className="logo">Atril</h1>
          <ul className="nav-list">
            <li className="nav-item"><a href="#portfolio" className="a-link">portfolio</a></li>
            <li className="nav-item"><a href="#about" className="a-link">about</a></li>
            <li className="nav-item"><a href="#contact" className="a-link">contact</a></li>
            <li className="nav-item resume-button"><a href="https://docs.google.com/document/d/1fZZCECSqm6X3dd4_IPmgsvxgArtmKxxtvHjQ2kIWi28/edit?usp=sharing" className="resume-link">my resume <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg></a></li>
          </ul>
          {isOpen && (
            <ul className="nav-list-mobile">
              <img src={closeMenu} alt="Close Icon" className="close-menu" onClick={toggleMenu} />
              <li className="nav-item-mobile"><a href="#portfolio" className="a-link" onClick={toggleMenu}>portfolio</a></li>
              <li className="nav-item-mobile"><a href="#about" className="a-link" onClick={toggleMenu}>about</a></li>
              <li className="nav-item-mobile"><a href="#contact" className="a-link" onClick={toggleMenu}>contact</a></li>
              <li className="nav-item-mobile resume-button"><a href="https://docs.google.com/document/d/1fZZCECSqm6X3dd4_IPmgsvxgArtmKxxtvHjQ2kIWi28/edit?usp=sharing" className="resume-link">my resume <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg></a></li>
            </ul>
          )}
          <img src={menuBar} alt="Menu Icon" className="menu-icons" onClick={toggleMenu} />
        </nav>
        <div className="header-container">
          <div className="header-info">
            <h2 className="info-title">
              Hi I'm <span>Syed Atril</span><br />
              a <span
                className="role-title"
                style={{
                  '--content': "''"
                }}
              >
                Frontend Developer
              </span>
            </h2>


           
          </div>

        </div>





        <div className="keyboard-container">
          <div className="keyboard-row">
            <div className="key">~ <span>`</span></div>
            <div className="key">! <span>1</span></div>
            <div className="key">@ <span>2</span></div>
            <div className="key"># <span>3</span></div>
            <div className="key">$ <span>4</span></div>
            <div className="key">% <span>5</span></div>
            <div className="key">^ <span>6</span></div>
            <div className="key">& <span>7</span></div>
            <div className="key">* <span>8</span></div>
            <div className="key">( <span>9</span></div>
            <div className="key">) <span>0</span></div>
            <div className="key">_ <span>-</span></div>
            <div className="key">+ <span>=</span></div>
            <div className="key backspace">Backspace</div>
          </div>

          <div className="keyboard-row">
            <div className="key tab">Tab</div>
            <div className="key">Q</div>
            <div className="key">W</div>
            <div className="key">E</div>
            <div className="key">R</div>
            <div className="key">T</div>
            <div className="key">Y</div>
            <div className="key">U</div>
            <div className="key">I</div>
            <div className="key">O</div>
            <div className="key">P</div>
            <div className="key"> {'{'}<span>{'['}</span></div>
            <div className="key"> {'}'}<span>{']'}</span></div>
          </div>

          <div className="keyboard-row">
            <div className="key">Caps Lock</div>
            <div className="key">A</div>
            <div className="key">S</div>
            <div className="key">D</div>
            <div className="key">F</div>
            <div className="key">G</div>
            <div className="key">J</div>
            <div className="key">K</div>
            <div className="key">L</div>
            <div className="key">: <spna>;</spna></div>
            <div className="key">"<span>'</span></div>
            <div className="key"> |<span>\</span></div>
            <div className="key">Enter</div>
          </div>

          <div className="keyboard-row">
            <div className="key">Shift</div>
            <div className="key">Z</div>
            <div className="key">X</div>
            <div className="key">C</div>
            <div className="key">V</div>
            <div className="key">B</div>
            <div className="key">N</div>
            <div className="key">M</div>
            <div className="key">{'<'} <span>,</span></div>
            <div className="key">{'>'} <spna>.</spna></div>
            <div className="key">?<span>/</span></div>
            <div className="key">Shift</div>
          </div>

          <div className="keyboard-row">
            <div className="key">Ctr</div>
            <div className="key">&#x1FA9F;</div>
            <div className="key">Alt</div>
            <div className="key space"> </div>
            <div className="key">Alt</div>
            <div className="key">&#x1FA9F;</div>
            <div className="key">Ctr</div>

          </div>


        </div>

      </header>
    </>
  );
};

export default Header;
