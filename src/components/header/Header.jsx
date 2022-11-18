import React from 'react'
import "./header.css"
import Botoes from "./Botoes"
import ME from "../../assets/me.png"
import RedesSociais from './RedesSociais'
import { useState, useEffect } from 'react'

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["Frontend Developer ", "UX/UI Designer", "Web Developer" ];
  const period = 2000;



  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <header>
       <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Leonardo</h1>
        <h5 className="text-light">{text}</h5>
        <Botoes/>
        <RedesSociais/>
        
        <div className="eu">
          <img src={ME} alt='eu'/>
        </div>
        <a href='#contato' className='scroll__sobre'>Contato</a>
      </div>
    </header>
  )
}

export default Header