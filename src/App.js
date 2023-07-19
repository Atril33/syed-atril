/* import { useDispatch } from 'react-redux';
import { useEffect } from 'react'; */
/* import { Route, Routes } from 'react-router-dom'; */
/* import { countryDataFetch } from './Redux/project/projectSlice'; */
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import './Components/Style/style.css';

function App() {
/*   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryDataFetch());
  }); */

  return (
    <>
      <Header />
      <Portfolio />
      <About />
      <Contact />
    </>
  /*  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<InfoPage />} />
    </Routes> */
  );
}

export default App;
