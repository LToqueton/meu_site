import React from 'react'
import "./header.css"
import CV from "../../assets/cv.pdf"

const Botoes = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Meu Curriculo</a>
        <a href='#contato' className='btn btn-primary'>Contato</a>
    </div>
  )
}

export default Botoes