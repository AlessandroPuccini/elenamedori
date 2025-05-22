import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Commercials from './components/Commercials'
import Movies from './components/Movies'
import Stills from './components/Stills'


function App() {


  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/stills" element={<Stills />} />
        </Routes>
        </main>
      <Footer />
     
    </Router>
  )
}

export default App
