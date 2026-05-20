import React from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Details from './Pages/Details'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/skills" element={<Skills/>}  />
        <Route path="/projects" element={<Projects/>}  />
        <Route path="/contact" element={<Contact/>}  />
        <Route path="/details" element={<Details/>}  />
      </Routes>
    </Router>
  )
}

export default App