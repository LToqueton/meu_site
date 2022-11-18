import React from "react";
import "./sobre.css";
import Eu from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GoFileBinary, GoPrimitiveDot } from "react-icons/go";

const Sobre = () => {
  return (
    <section id="sobre">
      <h5>Conheça um pouco</h5>
      <h2> Sobre mim</h2>

      <div className="container sobre__container">
        <div className="sobre__mim">
          <div className="sobre__mim-img">
            <img src={Eu} alt="About Image" />
          </div>
        </div>

        <div className="sobre__conteudo">
          <div className="sobre__cards">
            
            <article className="sobre_card">
              <FaAward className="sobre__icone" />
              <h5>Experiencia</h5>
              <small>+1 Ano de Trabalho</small>
            </article>

            <article className="sobre_card">
              <BsPeopleFill className="sobre__icone" />
              <h5>Clientes</h5>
              <small>+5 Clientes</small>
            </article>

            <article className="sobre_card">
              <GoFileBinary className="sobre__icone" />
              <h5>Projetos</h5>
              <small>+18 projetos desenvolvidos</small>
            </article>
          </div>

          <p>
            Trabalho como desenvolvedor web e freelancer, utilizando as
            tecnologias mais atuais no mercado, podendo trabalhar com diversos
            segmentos:
            <li><GoPrimitiveDot/>Promoções e Eventos</li>
            <li><GoPrimitiveDot/>Profissionais liberais</li>
            <li><GoPrimitiveDot/>Estudios e Marcas</li>
          </p>

          <a href="#contato" className="btn btn-primary">
            Fale comigo!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
