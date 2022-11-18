import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header"
import Nav from "./components/Nav/Nav"
import Sobre from "./components/Sobre/Sobre"
import Experiencia from "./components/Experiancia/Experiencia"
import Relatos from "./components/Relatos/Relatos"
import Contato from "./components/Contato/Contato"
import Footer from "./components/footer/Footer"

 
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Nav/>
    <Sobre/>
    <Experiencia/>
    <Relatos/>
    <Contato/>
    <Footer/>
    </>
  )
}

export default App
