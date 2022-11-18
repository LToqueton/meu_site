import React from 'react'
import "./footer.css"
import {SiInstagram, SiTwitter} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Leonardo Toqueton</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#sobre'>Sobre</a></li>
        <li><a href='#expericia'>Experiancia</a></li>
        <li><a href='#relatos'>Relatos</a></li>
        <li><a href='#contato'>Contato</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://instagram.com/otoqueton?igshid=YmMyMTA2M2Y='><SiInstagram/></a>
        <a href='https://mobile.twitter.com/otoqueton'><SiTwitter/></a>
      </div>

    <div className="footer_direitos">
      <small>Desenvolvido e criado por: Leonardo Toqueton</small>
    </div>
    </footer>
  )
}

export default Footer