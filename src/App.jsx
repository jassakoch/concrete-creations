import React from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import './App.css'
import './index.css'
import ImagesSlider from './components/ImagesSlider';

export default function App() {


  return (
    
      <div>
      <Navbar/>
      <ImagesSlider/>
      <About/>
    </div>
  )
}


