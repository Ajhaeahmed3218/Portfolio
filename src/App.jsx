

import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Qualification from './Components/Qualification/Qualification'
import Secvices from './Components/Secvices/Secvices'
import Skills from './Components/Skills/Skills'

function App() {


  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Secvices />
        <Qualification />
        <Contact />
      </main>

    </>
  )
}

export default App
