import React from 'react'
import "./relatos.css"

const Relatos = () => {
  return (
    <section id='relatos'>
      <h5>Leonardo Toqueton</h5>
      <h2>“Aliar as expectativas de meus clientes
        às necessidades de seu público alvo” 
        </h2>

      <div className="container relatos_container">
        <article className='relato'>
          {/* <div className="avatar_cliente">
            <img src="" alt="" />
          </div> */}
          <h5 className='nome_cliente'>Carolina</h5>
          <small className='review_cliente'>
            "ótimo profissional, atendeu as expectativas do projeto"
          </small>
        </article>
      </div>
    </section>
  )
}

export default Relatos