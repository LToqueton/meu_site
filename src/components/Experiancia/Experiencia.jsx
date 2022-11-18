import React from "react";
import "./experiencia.css";
import { CgRadioChecked } from "react-icons/cg";

const Experiencia = () => {
  return (
    <section id="experiencia">
      <h5>Minhas habilidades</h5>
      <h2>Experiencias</h2>

      <div className="container experiencia_container">
        <div className="experiencia_front">
          <h3>Frontend</h3>
          <div className="experiencia_conteudo">
            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>HTML</h4>
                <small className="txt-light">Avançado</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div><h4>CSS</h4>
              <small className="txt-light">Intermediário</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>Javascript (ES6+)</h4>
                <small className="txt-light">Intermediário</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>React</h4>
                <small className="txt-light">Intermediário</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="txt-light">Intermediário</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>Typescript</h4>
                <small className="txt-light">Básico</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experiencia_back">
          <h3>Backend</h3>
          <div className="experiencia_conteudo">
            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>Java</h4>
                <small className="txt-light">Intermediário</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>NodeJs</h4>
                <small className="txt-light">Básico</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>MySQL</h4>
                <small className="txt-light">Intermediário</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>Python</h4>
                <small className="txt-light">Básico</small>
              </div>
            </article>

            <article className="detalhes">
              <CgRadioChecked  className="detalhes-icone"/>
              <div>
                <h4>C#</h4>
                <small className="txt-light">Básico</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
