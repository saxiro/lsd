import React, { Component } from 'react';

class Popular extends Component {

  render(){
    return (
    <div>
      <section id="subheader" data-speed={8} data-type="background" style={{backgroundPosition: '50% 0px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Popular</h1>
              <ul className="crumb">
                <li><a href="index">Home</a></li>
                <li className="sep">/</li>
                <li><a href="guaracard">Guaracard</a></li>
                <li className="sep">/</li>
                <li>Popular</li>
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
                      <a href="http://189.50.7.149:8080/wbc-st5/login.faces?uat=5" target="_blank">
                        <h3><span className="id-color">Compre créditos online</span></h3>
                        Faça o seu pedido
                      </a>
                      <div className="spacer-single" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <h2>Observações:</h2>
                    <h4><strong>Cartão Popular</strong></h4>
                    <p>O Cartão Popular Fácil é destinado aos usuários da C Lorenzutti Participações LTDA que desejam uma forma mais segura e prática de pagar a passagem, mesmo não sendo beneficiários dos outros tipos de cartões, como Estudante e Vale-transporte, por exemplo. Para adquirir basta se dirigir a um ponto de atendimento na Avenida Dr. Roberto Calmon, nº 318, Centro, Guarapari-ES. É necessário, que, no ato de cadastramento do cartão, o próprio usuário apresente o CPF e identidade e seja inserido um crédito inicial no valor mínimo referente a 20 tarifas vigentes.</p>
                    <h4><strong>Como bloquear o cartão?</strong></h4>
                    <p>O passageiro que perder o cartão tem um serviço exclusivo para bloqueio e reembolso dos créditos restantes em um novo cartão. A solicitação de bloqueio deve ser feita através da Central de Atendimento (27) 3261-1236 - (27) 3261-0637 ou indo pessoalmente no ponto de atendimento na Avenida Dr. Roberto Calmon, nº 318, Centro, Guarapari-ES. Importante: O usuário que tiver o cartão extraviado, perdido ou roubado deve solicitar o bloqueio antes de fazer a solicitação da 2ª via. Com esse procedimento, não há risco de uso indevido dos créditos existentes no cartão, sendo também necessário registrar na delegacia o boletim de ocorrência do extravio, furto ou roubo do cartão popular.</p>
                    <h4><strong>Como pedir segunda via</strong></h4>
                    <p>O cartão Popular pode ser solicitado no Guichê da empresa localizada na Avenida Dr. Roberto Calmon, nº318, Centro, Guarapari-ES. Para toda e qualquer solicitação de segunda via, será preciso apresentar documentos de identidade, CPF, boletim de ocorrência e pagar uma taxa de R$ 28,00. O prazo para confecção do cartão é de até sete dias úteis.</p>
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
export default Popular;
