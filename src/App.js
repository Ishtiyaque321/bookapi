import './App.css';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route  path="/" element={<Home/>}></Route>
      <Route  path="/about" element={<About />}></Route>
      <Route  path="/Contactus" element={<ContactUs/>}></Route>


      </Routes>
      </Router>


    </div>
  );
}

export default App;
