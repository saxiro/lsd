import React, { Component } from 'react';

class ValeTransporte extends Component {

  render(){
    return (
      <div>
        <section id="subheader" data-speed={8} data-type="background">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Vale transporte</h1>
                <ul className="crumb">
                  <li><a href="index">Home</a></li>
                  <li className="sep">/</li>
                  <li><a href="guaracard">Guaracard</a></li>
                  <li className="sep">/</li>
                  <li>Vale transporte</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div id="content" style={{background: '#f5f7f9'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 wow fadeInUp animated" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp', opacity: 0}}>
                    <div className="col-md-4 hidden-lg-up" />
                    <div className="col-md-4">
                      <div style={{position: 'relative', overflow: 'hidden', padding: '1.85714286em', marginBottom: 30, background: '#fff', height: 120, borderRadius: 6, borderBottom: '4px solid #3bb3c3'}}>
                        <a href="http://189.50.7.149:8080/WebSigom/sltwebsigom" target="_blank">
                          <h3><span className="id-color">Peça o seu vale transporte</span></h3>
                          Faça o seu pedido
                        </a>
                        <div className="spacer-single" />
                      </div>
                    </div>
                    <div className="col-md-12" style={{textAlign: 'center'}}>
                      <h2>Observações:</h2>
                      <p><a href="assets/formularios/Autorização de controle - Expresso Lorenzutti.xls">Autorização de Controle</a>
                        <br />
                        <a href="assets/formularios/Formulario de parametrização - Expresso Lorenzutti.xls">Formulário de Parametrização</a>
                        <br />
                        <a href="assets/formularios/TermoDeUsoDoCartaoEletrônico-ExpressoLorenzutti.xls">Termo de Uso do Cartão Eletrônico</a>
                        <br />
                        <a href="assets/formularios/Solicitação de liberação de acesso via internet - Expresso Lorenzutti.xls">Solicitação de Liberação de Acesso Via Internet</a>
                        <br />
                        <a href="assets/formularios/Planilha de cadastro de Funcionarios.xls">Planilha de Cadastro de Funcionários</a>
                        <br />
                        <a href="assets/formularios/CadastroDeValeTransporte-ExpressoLorenzutti.xls">Cadastro de Vale Transporte Expresso Lorenzutti</a>
                        <br /><br />
                        Somente a <strong>Planilha de Cadastro De Funcionário</strong> deve ser enviado para o e-mail <a href="mailto:guaracar@guaracard.com.br">guaracard@guaracard.com.br</a>,<br /> os <strong>demais formulários</strong> devem ser entregue pessoalmente no <strong>guichê de venda situado na Av. Dr. Roberto Calmon – 318 - centro – Guarapari – ES.</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>

    )
  }
}
export default ValeTransporte;
