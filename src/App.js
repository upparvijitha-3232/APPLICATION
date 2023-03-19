
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Membership from './components/Membership';
import Contactus from './components/Contactus';
import Newsletter from './components/Newsletter';
import Collaborations from './components/Collaborations';
import {Routes,Route,link, Link} from "react-router-dom";

import React from 'react';


function App() {
  return (
    <div>
       <Header/>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="Home" >Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to="Membership" >Membership</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Events" >Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Collaborations" >Collaborations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Newsletter" >Newsletter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="About" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Contactus" >Contactus</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>



       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Events" element={<Events/>}/>
        <Route path="/Membership" element={<Membership/>}/>
        <Route path="/Newsletter" element={<Newsletter/>}/>
        <Route path="/Collaborations" element={<Collaborations/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
       </Routes>
       <div>
       
       </div>
       </div>

  );
}

export default App;
