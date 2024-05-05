import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Components/Layout";
import Home from './Components/Home';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Team from './Components/Team';
import Contact from './Components/Contact';
import ModelType from './Components/ModelType';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Testimonials" element={<Testimonials />} />
              <Route exact path="/Team" element={<Team />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/ModelType" element={<ModelType />} />
              <Route exact path="/" element={<Home />}>
              <Route exact index element={<Layout />} />
            </Route>
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
