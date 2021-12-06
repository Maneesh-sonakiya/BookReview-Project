import React,{Fragment, useState, useEffect} from 'react'
import './App.css';
import EditReview from './components/EditReview';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Inputreview from './components/Inputreview';
import ShowBook from './components/ShowBook';
import ShowBookReview from './components/ShowBookReview'


function App() {
  
  return (
    
    <Router>
      <Routes>
        
       
        <Route path="/" element={<ShowBook />}/>
        <Route element={<Inputreview />}/>
        <Route  path="/ShowBookReview/:isbn/:title" element={<ShowBookReview />}/>
        <Route  path="Inputreview/:isbn" element={<Inputreview />}/>   
       
      </Routes> 
  </Router>
  
    );
}

export default App;
