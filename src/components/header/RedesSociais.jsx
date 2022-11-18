import React from 'react'
import {IoLogoLinkedin, IoLogoGithub} from "react-icons/io"
import "./header.css"

const RedesSociais = () => {
  return (
    <div className='header__sociais'>
        <a href='https://www.linkedin.com/in/leonardo-toqueton-670160126/' target="_blank"><IoLogoLinkedin/></a>
        <a href='https://www.github.com/' target="_blank"><IoLogoGithub/></a>
    </div>
  )
}

export default RedesSociais