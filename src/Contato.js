import React, { Component } from 'react';

class Contato extends Component {

  render(){
    return (
      <div>
        <section id="subheader" data-speed={8} data-type="background">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Contato</h1>
                <ul className="crumb">
                  <li><a href="home">Home</a></li>
                  <li className="sep">/</li>
                  <li>Contato</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div id="content" className="top" style={{background: '#f5f7f9'}}>
          <div className="container">
            <div className="row">
              <div id="sidebar" className="col-md-4">
                <div className="widget widget_text">
                  <h2>Dúvidas, sugestões ou reclamações</h2>
                  <p className="intro">
                    Utilize este canal para enviar elogios, dúvidas, sugestões ou reclamações. Estamos sempre buscando aprimoramento da qualidade de nossos serviços.
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <h3>Converse Conosco</h3>
                <form name="contactForm" id="contact_form" method="post" action="http://webvila.com.br/contato/auto_envio.php">
                  <div className="row">
                    <div className="col-md-4">
                      <div>Nome</div>
                      <div>
                        <input type="text" name="Nome" className="form-control" />
                      </div>
                      <div>E-mail</div>
                      <div>
                        <input type="text" name="E-mail" className="form-control" />
                      </div>
                      <div>Telefone</div>
                      <div>
                        <input type="text" name="Telefone" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>Assunto</div>
                      <div>
                        <input type="text" name="Assunto" className="form-control" />
                      </div>
                      <div>Mensagem</div>
                      <div>
                        <textarea name="Mensagem" className="form-control" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <p>
                        <input type="submit" defaultValue="Enviar" className="btn btn-line" style={{float: 'right'}} />
                      </p>
                    </div>
                    <input type="hidden" name="site" defaultValue="http://www.expressolorenzutti.com.br/" />
                    <input type="hidden" name="email" defaultValue="guaracard@guaracard.com.br" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    )
  }
}

export default Contato;
