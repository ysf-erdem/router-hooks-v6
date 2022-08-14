import './App.css'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <div><h1>Welcome, select a page from below.</h1>
          <div className="sidebox"> 
            <ul className="space">
              &emsp;&emsp;<Link to="/profile"> <button className="yayay"> Profile </button> </Link>
              &emsp;&emsp;<Link to="/about">   <button className="yayay"> About   </button> </Link>
            </ul>
          </div>
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/about"   element={<About />} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
