import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SelectOption from './components/SelectOption'
import About from './components/About';
import Contact from './components/Contact'
import MtoP from './components/MtoP';
import PtoC from './components/PtoC'
import ResultPage from './components/ResultPage';
// import Counselling from './components/Counselling';
import Diary from "./components/Diary";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/prediction" element={<SelectOption />} />
        {/* <Route path="/counselling" element={<Counselling />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prediction/percentile" element={<MtoP/>}/>
        <Route path="/prediction/college" element={<PtoC/>}/>
        <Route path="/result" element={<ResultPage/>}/>
        <Route path="/diary" element={<Diary />} />
        
      </Routes>
    </Router>
  );
}

export default App;
