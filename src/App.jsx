import { Route, Routes } from 'react-router-dom';
import './Components/Style/style.css';
import ProjectInfo from './Components/ProjectInfo';
import ReactGA from "react-ga";
import Home from './Components/Home';


const TRACKING_ID = "UA-292664246-1";
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:name" element={<ProjectInfo />} />
      </Routes>
    </>
  );
}

export default App;
