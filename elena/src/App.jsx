import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Me from './components/Me'
import Commercials from './components/Commercials'
import Movies from './components/Movies'
import Stills from './components/Stills'


function App() {


  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/elenamedori" element={<Home />} />
        <Route path="/me" element={<Me />} />
        <Route path="/commercials" element={<Commercials />}/>
        <Route path="/movies" element={<Movies />} />
        <Route path="/stills" element={<Stills />} />
        </Routes>
        </main>
      <Footer />
     
    </Router>
  )
}

export default App





