import { Route, Routes } from 'react-router-dom';
import './Components/Style/style.css';
import ProjectInfo from './Components/ProjectInfo';
import Home from './Components/Home';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:name" element={<ProjectInfo />} />
      </Routes>
      <Analytics />
      </>
  );
}

export default App;
