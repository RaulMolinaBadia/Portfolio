import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Páginas del portfolio
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

// Componentes del portfolio
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
