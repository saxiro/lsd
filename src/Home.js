import React, { Component } from 'react';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import firebase from 'firebase';

class Home extends Component {

  componentDidMount(){

    firebase.database().ref('/alert').orderByChild('text').on("child_added", function(alert) {
      if(alert.val() === "M"){
        firebase.database().ref('/messages').orderByChild('text').on("child_added", function(snapshot) {
          swal({
            title: 'Comunicado Sanremo!',
            html: "<p style='text-align:justify; text-size: 14px; line-height:1.4em;margin:30px'>" + snapshot.val() + "</p>",
            animation: true
          });
        });

      }else if(alert.val() === "B"){
        firebase.database().ref('/banners').orderByChild('banner_url').on("child_added", function(snapshot) {
          swal({
            showConfirmButton:false,
            showCloseButton: true,
            imageUrl: snapshot.val(),
            width: '600px'
          });

        });
      }
    });

}

  render(){
    return (

      <div id="content" className="no-bottom no-top">

        <section id="section-slider" className="fullwidthbanner-container" aria-label="section-slider">
          <div id="revolution-slider">
            <ul>
              <li data-transition="fade" data-slotamount={10} data-masterspeed={200} data-thumb>
                <img src="assets/images-slider/wide3.jpg" />
              </li>

            </ul>
          </div>
          <div className="col-md-12 posicao_botoes">
          <div className="col-md-4" style={{}}>
              <a href="estudante" style={{color: 'black', width:300, marginBottom:20, marginLeft:60}} className="botao_estudante">ESTUDANTE CADASTRO/RECADASTRO</a>
              <a href="http://189.50.7.149:9090/varejoestudante/" style={{color: 'black', width:300, marginLeft:60}} className="botao_estudante">ESTUDANTE RECARGA DE CREDITOS</a>
          </div>
          <div className="col-md-4">
              <a href="http://189.50.7.149:8080/wbc-st5/login.faces?uat=5" style={{color: 'black', width:300, marginBottom:20, marginLeft:60, backgroundColor:'#0094a2'}} className="botao_estudante">CARTÃO POPULAR RECARGA DE CRÉDITOS</a>
              <a href="escola" style={{color: 'black', width:300, marginLeft:60, backgroundColor:'orange'}} className="botao_estudante">ESCOLA CADASTRO/RECADASTRO</a>
          </div>
          <div className="col-md-4">
              <a href="http://expressolorenzutti.com.br/valeTransporte" style={{color: 'black', width:300, marginBottom:20, marginLeft:60, backgroundColor:'lightgreen'}} className="botao_estudante">CADASTRE AQUI A SUA EMPRESA</a>
              <a href="http://189.50.7.149:8080/WebSigom/sltwebsigom" style={{color: 'black', width:300, marginLeft:60, backgroundColor:'lightgreen'}} className="botao_estudante">EMPRESA CADASTRADA FAÇA SEU LOGIN</a>
          </div>
          </div>
        </section>
        <section id="section-about" style={{background: '#f5f7f9'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center wow fadeInUp">
                <h1>Bem vindo a Expresso Lorenzutti</h1>
                <br />
                <p className="intro">Buscamos oferecer o melhor serviço e qualidade de vida aos nossos passageiros</p>
                <div className="separator"><span><i className="fa fa-circle" /></span></div>
                <div className="spacer-single" />
              </div>
              <div className="col-md-4 wow fadeInLeft">
                <p>Não possui o Guarapacard? Então, não perca essa oportunidade e peça já o seu.</p>
                <a href="guaracard">Leia Mais</a>
              </div>
              <div className="col-md-4 wow fadeInUp" data-wow-delay=".2s">
                <p>Confira aqui os horários e os itinerários de todas as linhas da Viação Expresso Lorenzutti.</p>
                <a href="horarios">Leia Mais</a>
              </div>
              <div className="col-md-4 wow fadeInRight">
                <p>Têm alguma dúvida relacionado ao Guarapacard? Clique aqui e saiba mais.</p>
                <a href="duvidasFrequentes">Leia Mais</a>
              </div>
            </div>
          </div>
        </section>
      </div>




    )
  }
}

export default Home;
