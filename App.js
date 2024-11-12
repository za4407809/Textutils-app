import React from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App(){
 
  return (

<>
 <Navbar name="Textutilies App"about="about1"/>
  <div className="container my-3">  
  <Textform title="Enter The Text to Anaylze"/>
            <About />
  </div>

      </>

     
  );
}
export default App;