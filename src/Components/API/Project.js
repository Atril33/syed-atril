import QrCodeImg from '../Images/QR-Code-Generator.png';
import WordTopImg from '../Images/programming-language.png';
import AweBookImg from '../Images/awesome-book.png';
import LeaderboardImg from '../Images/leaderboard.png';
import MathMegImg from '../Images/Math-megician.png';
import CountryDtImg from '../Images/country_project.png';

const data = [
  {
    name: 'World Top Languages',
    image: `${WordTopImg}`,
    description: 'World Top Languages is a website that shows you information about the most popular computer programming languages in the world and the best developers who use them. The website was made using HTML and CSS, which are computer languages used to create websites.',
    languages: ['html', 'css', 'js'],
    liveLink: 'https://atril33.github.io/World_top_languages/index.html',
    sourceCode: 'https://github.com/Atril33/World_top_languages',
  },
  {
    name: 'Country Info App',
    image: `${CountryDtImg}`,
    description: 'The Country Info App is a fantastic application built using React, Redux, and CSS. It allows users to explore information about different countries around the world. By connecting to the Rest Countries API, the app retrieves accurate and up-to-date data, providing users with a comprehensive resource to learn about various nations.',
    languages: ['react', 'redux', 'css', 'api'],
    liveLink: 'https://country-details-2638nyvyi-atril33.vercel.app/',
    sourceCode: 'https://github.com/Atril33/country-details',
  },
  {
    name: 'Awesome Books',
    image: `${AweBookImg}`,
    description: 'In this Awesome Book Project, I utilized my HTML, CSS, and JS skills with advanced syntax (ES6) to create a dynamic website where users can store their book and author names',
    languages: ['html', 'css', 'js'],
    liveLink: 'https://atril33.github.io/Awesome_books/',
    sourceCode: 'https://github.com/Atril33/Awesome_books',
  },
  {
    name: 'Leaderboard',
    image: `${LeaderboardImg}`,
    description: "The Leaderboard is a web app developed using HTML, CSS & JS, utilizing an API for saving user game scores with names and comparing them with others' scores on the internet. It offers a platform for permanent score storage and comparison.",
    languages: ['html', 'css', 'js', 'api'],
    liveLink: 'https://atril33.github.io/Leaderboard/dist/',
    sourceCode: 'https://github.com/Atril33/leaderboard',
  },
  {
    name: 'Math Megican',
    image: `${MathMegImg}`,
    description: 'Math Megican is a simple app that uses React.js to help with basic math problems. It also has educational quotes that make it fun and engaging for users.',
    languages: ['react', 'css', 'api'],
    liveLink: 'https://math-magicians-1hc0hih6a-atril33.vercel.app/',
    sourceCode: 'https://github.com/Atril33/math-magicians',
  },
  {
    name: 'QR Code Generator',
    image: `${QrCodeImg}`,
    description: 'QR Code Generator is a website that allows users to generate custom QR codes by entering text or links. Developed using HTML, CSS, and JS, it uses an API for code generation. This project makes it easy for users to create QR codes for their websites, social media profiles, and other links.',
    languages: ['html', 'css', 'js', 'api'],
    liveLink: 'https://atril33.github.io/QR_Code_Generator/',
    sourceCode: 'https://github.com/Atril33/QR_Code_Generator',
  },

];

export default data;
