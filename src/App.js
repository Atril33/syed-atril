import { Route, Routes } from 'react-router-dom';
import './Components/Style/style.css';
import { Analytics } from '@vercel/analytics/react';
import ProjectInfo from './Components/ProjectInfo';
import Home from './Components/Home';

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
