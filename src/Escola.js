import React, { Component } from 'react';

class Escola extends Component {

  render(){
    return (
      <div>
      <section id="subheader" data-speed={8} data-type="background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Escola</h1>
              <ul className="crumb">
                <li><a href="index">Home</a></li>
                <li className="sep">/</li>
                <li><a href="escola">Escola</a></li>
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
              <a href="http://189.50.7.149:9090/WebCadastramento/LoginEscola.xhtml" style={{color: 'black', width:300, marginLeft:30, backgroundColor:'orange'}} className="botao_estudante">CADASTRAMENTO RECADASTRAMENTO</a>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-9 col-md-offset-1 wow fadeInUp animated" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp', opacity: 0}}>

                  <h2>Observações:</h2>
                  <p>A C. Lorenzutti Participações Ltda, iniciou o processo de cadastramento das escolas através do Sistema de Bilhetagem Eletrônica e para isso será necessário que o responsável da escola acesse a página de internet e preencha o cadastro.
                    <br /><br />
                    Caso não consiga acessar o link acima, poderá acessá-lo pelo endereço http://189.50.7.149:9090/WebCadastramento
                    <br /><br />
                    <strong>1º Passo:</strong> Entre em “Escola” e em seguida em “Clique aqui para se cadastrar”.
                    <br /><br />
                    <strong>2º Passo:</strong> Faça seu cadastro, crie sua senha pessoal e salve as alterações.
                    <br /><br />
                    <strong>3º Passo:</strong> Em seguida, imprima o formulário “Ficha Completa” (no topo da tela) que deverá ser assinado pelo Diretor e pelos Credenciados da escola seguindo as instruções da página 2 da ficha.
                    Atenção: todos os campos * (asterisco) são obrigatórios inclusive o campo email, pois este é o meio de comunicação entre a C. Lorenzutti Participações Ltda e sua escola.
                    <br /><br />
                    <strong>4º Passo:</strong> Encaminhar à C. Lorenzutti Participações Ltda, este formulário juntamente com toda documentação necessária ao processo de aprovação e em anexo encaminhar também uma relação de todos os cursos efetivos da sua escola com o período letivo de cada curso e a quantidade de passes permitidos para o período (entenda: se o aluno usa dois vales por dia e são 120 dias letivos então serão 240 vales). Esta relação de cursos é imprescindível para aprovação do cadastro.
                    <br /><br />
                    <strong>Qualquer dúvida entre em contato pelo SAC fone número (27) 3361-4577 | (27) 3261-0637 | (27) 3261-1236.</strong></p>
                  <h2>Documentação:</h2>
                  <h4><strong>Instituições de ensino superior (faculdades, universidades e centros universitários)</strong></h4>
                  <p>• Documento de credenciamento ou recredenciamento emitido pelo poder público (autorização de funcionamento);<br />
                    • Documento de autorização para os cursos superiores de graduação, sequencial, extensão ou tecnológico (exceto se centro universitário ou universidades que possuem autonomia universitária para criar seus próprios cursos);<br />
                    • Calendário letivo assinado e carimbado pelo diretor.;<br />
                    • CNPJ;<br />
                    • Relação dos cursos e os horários/turno;<br />
                    • Estatuto, Contrato Social ou regimento da instituição de ensino;<br />
                    • O cadastramento da instituição de ensino ocorrerá após o envio da relação dos alunos matriculados nos estabelecimentos de ensino à operadora. O estabelecimento de ensino remeterá à Entidade Executora, 10 (Dez) dias após o encerramento das matrículas, a relação dos estudantes no ano de referência do cadastramento. </p>
                  <h4><strong>Ifes e demais órgãos federais de educação</strong></h4>
                  <p>• Instrumento de credenciamento ou recredenciamento (autorização de funcionamento);<br />
                    • Estatuto ou regimento da instituição de ensino;<br />
                    • Relação de cursos aprovado pelo conselho de direção;<br />
                    • Calendário letivo assinado e carimbado pelo diretor;<br />
                    • CNPJ;<br />
                    • O cadastramento da instituição de ensino ocorrerá após o envio da relação dos alunos matriculados nos estabelecimentos de ensino à operadora. O estabelecimento de ensino remeterá à Entidade Executora, 10 (Dez) dias após o encerramento das matrículas, a relação dos estudantes no ano de referência do cadastramento. </p>
                  <h4><strong>Instituições de ensino básico (infantil ensino fundamental, ensino médio, EJA - Educação de Jovens e Adultos, técnicos profissionalizantes)</strong></h4>
                  <p>• Documento de credenciamento ou recredenciamento emitido pelo poder público (autorização de funcionamento);<br />
                    • Documento de autorização dos cursos;<br />
                    • Estatuto ou regimento da instituição de nstituição de ensino, contrato social;<br />
                    • Calendário aprovado pelo subnúcleo regional de educação;<br />
                    • CNPJ;<br />
                    • O cadastramento da instituição de ensino ocorrerá após o envio da relação dos alunos matriculados nos estabelecimentos de ensino à operadora. O estabelecimento de ensino remeterá à Entidade Executora, 10 (Dez) dias após o encerramento das matrículas, a relação dos estudantes no ano de referência do cadastramento. </p>
                  <h4><strong>Pré-vestibular</strong></h4>
                  <p>• Instrumento constitutivo (estatuto ou contrato social);<br />
                    • Alvará de localização e funcionamento;<br />
                    • CNPJ;<br />
                    • Calendário letivo assinado e carimbado pelo diretor;<br />
                    • O cadastramento da instituição de ensino ocorrerá após o envio da relação dos alunos matriculados nos estabelecimentos de ensino à operadora. O estabelecimento de ensino remeterá à Entidade Executora, 10 (Dez) dias após o encerramento das matrículas, a relação dos estudantes no ano de referência do cadastramento. </p>
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

export default Escola;
