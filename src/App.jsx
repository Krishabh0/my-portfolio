

import { Routes,Route } from 'react-router-dom'
import './App.scss'
import './index.css'

import Home from './containers/home'
import About from './containers/About'
import Resume from './containers/resume'
import Skills from './containers/Skills'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Navbar from './components/navbar'

function App() {
 


  

  return (

<div className='App'>

  {/* navbar */}
<Navbar/>

<div className='App__main-page-content'>


<Routes>
  <Route index path='/' element={<Home/>}/>
  <Route  path='/about' element={<About/>}/>
  <Route  path='/resume' element={<Resume/>}/>
  <Route  path='/skills' element={<Skills/>}/>
  <Route  path='/portfolio' element={<Portfolio/>}/>
  <Route  path='/contact' element={<Contact/>}/>
</Routes >
</div>
</div>

   
  )
}

export default App