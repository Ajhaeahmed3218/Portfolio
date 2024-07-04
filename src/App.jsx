

import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Qualification from './Components/Qualification/Qualification'
import Secvices from './Components/Secvices/Secvices'
import Skills from './Components/Skills/Skills'
import Works from './Components/Work/Works'

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
        <Works />
        <Contact />

        <Footer />
      </main>


    </>
  )
}

export default App
