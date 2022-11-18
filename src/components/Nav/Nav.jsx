import React from 'react'
import "./nav.css"
import {TiHomeOutline} from "react-icons/ti"
import {TbUser} from "react-icons/tb"
import {BsFileEarmarkCode} from "react-icons/bs"
import {BiMessageAltDots} from "react-icons/bi"
import {GiTalk} from "react-icons/gi"
import { useState } from 'react'


const Nav = () => {
  const [ativo, setAtivo] = useState('');
  return (
    <nav>
      <a href='#' onClick={() => setAtivo('#')} className={ativo === '#' ? 'ativo' : ''}><TiHomeOutline/></a>
      <a href='#sobre' onClick={() => setAtivo('#sobre')} className={ativo === '#sobre' ? 'ativo': ''}><TbUser/></a>
      <a href='#experiencia' onClick={() => setAtivo('#experiencia')} className={ativo === '#experiencia' ? 'ativo': ''}><BsFileEarmarkCode/></a>
      <a href='#relatos' onClick={() => setAtivo('#relatos')} className={ativo === '#relatos' ? 'ativo': ''}><GiTalk/></a>
      <a href='#contato' onClick={() => setAtivo('#contato')} className={ativo === '#contato' ? 'ativo': ''}><BiMessageAltDots/></a>
    </nav>
  )
}

export default Nav