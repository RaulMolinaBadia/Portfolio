import './styles.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AboutMe } from '../AboutMe/AboutMe'
import { Skills } from '../Skills/Skills'
import { Projects } from '../Projects/Projects'
import { Contact } from '../Contact/Contact'
import { App } from '../App/App'

export const MenuBar = props => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Me</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
    </Router>
  )
}
