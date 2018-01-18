import React, { Component } from 'react';

class Estudante extends Component {

  render(){
    return (
      <div>
      <section id="subheader" data-speed={8} data-type="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Estudante</h1>
              <ul className="crumb">
                <li><a href="index">Home</a></li>
                <li className="sep">/</li>
                <li><a href="guaracard">Guaracard</a></li>
                <li className="sep">/</li>
                <li>Estudante</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div id="content" style={{background: '#f5f7f9'}}>
        <div className="container">
          <div className="row">
            <div id="sidebar" className="col-md-3 wow fadeInUp animated" style={{visibility: 'visible', animationName: 'fadeInUp', opacity: 0}}>
              <a href="http://189.50.7.149:9090/WebCadastramento/LoginAluno.xhtml" className="botao_estudante" style={{color:'black'}}>CADASTRAMENTO E RECADASTRAMENTO</a>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-9 col-md-offset-1 wow fadeInUp animated" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp', opacity: 0}}>
                  <div className="col-md-12">
                    <div style={{position: 'relative', overflow: 'hidden', padding: '1.85714286em', marginBottom: 30, background: '#fff', height: 120, borderRadius: 6, borderBottom: '4px solid #3bb3c3'}}>
                      <a href="http://189.50.7.149:9090/WebCadastramento/LoginAluno.xhtml" target="_blank">
                        <h3><span className="id-color">Cadastramento do Estudante</span></h3>
                        Acessar novo cadastro
                      </a>
                      <div className="spacer-single" />
                    </div>
                  </div>
                  <h2>Documentação:</h2>
                  <p>De posse da ficha impressa e assinada pela escola, o estudante ou seu representante legal deve apresentar-se a guichê de venda, situado na Av. Drº Roberto Calmon – 318 - centro – Guarapari – ES, com a seguinte documentação:<br /><br />
                    • Uma foto 3X4, frontal e recente, sem marcas, carimbos, frases, números ou datas de qualquer natureza, cortes ou manchas. Não serão aceitas fotografias de pessoas sorrindo ou com óculos esporte;<br />
                    • Cópia da Identidade ou certidão de nascimento do aluno;<br />
                    • Cópia do Comprovante de residência que deverá estar em nome do aluno ou dos pais, em caso do imóvel ser alugado cópia do contrato de locação com reconhecimento da assinatura em cartório do proprietário;<br />
                    • Ficha de cadastro de estudante gerada durante o pré-cadastro ou emitida pela escola no módulo Web Cadastramento para os estudantes que não possuem acesso à Internet;<br />
                    • No caso de universitários, horário individual emitido pela faculdade ou universidade.</p>
                  <h2>Recadastramento do aluno</h2>
                  <h4><strong>Esqueci minha senha?</strong></h4>
                  <p>1. Clique no sim possuo cartão com código;<br />
                    2. Preencha o campo nome completo de acordo com o cadastro;<br />
                    3. Data de nascimento;<br />
                    4. Codigo do aluno, descrito no cartão.</p>
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
export default Estudante;
