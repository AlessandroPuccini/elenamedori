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
        <Route path="/elenamedori/" element={<Home />} />
        <Route path="/elenamedori/about" element={<About />} />
        <Route path="/elenamedori/commercials" element={<Commercials />}/>
        <Route path="/elenamedori/movies" element={<Movies />} />
        <Route path="/elenamedori/stills" element={<Stills />} />
        </Routes>
        </main>
      <Footer />
     
    </Router>
  )
}

export default App
