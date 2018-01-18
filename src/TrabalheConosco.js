import React, { Component } from 'react';

class TrabalheConosco extends Component {

  render(){
    return (
      <div id="content" className="no-top no-bottom" style={{background: '#f5f7f9'}}>
        <section id="section-about-us-2" className="side-bg no-padding">
          <div className="image-container col-md-12" data-delay={0} style={{height: 414}} />
          <div className="container">
            <div className="row">
              <div className="inner-padding">
                <div className="col-md-12 wow fadeInRight animated" data-wow-delay=".5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight', opacity: 500}}>
                  <h2>Deseja trabalhar conosco?</h2>
                  <p className="intro">Faça o download do modelo no link abaixo, preencha-o,<br /> e envie para o nosso departamento de RH no email<br /> rh@expressolorenzutti.com.br. </p>
                  <p className="intro"><a href="assets/formularios/Solicitacao%20de%20emprego.xlsx" target="_blank">Faça o download do modelo aqui</a></p>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
}

export default TrabalheConosco;
