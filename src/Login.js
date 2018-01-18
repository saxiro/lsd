import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import {auth, storageKey} from './fire';



class Login extends Component {

  state = {
    email: '',
    password: '',
    message_error: '',
    redirectToReferrer: false
  }



  handleSubmit = (evt) => {
    evt.preventDefault();
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({redirectToReferrer: true, uid: user.uid});
    }).catch((error) => this.setState({message_error: "Error de Autenticação"}));
  }

  render() {

    const { from } = this.props.location.state || '/admin/messages';
    const { redirectToReferrer } = this.state;

    return (
      <div>
      <section id="subheader" data-speed={8} data-type="background" style={{backgroundPosition: '50% 0px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>login</h1>
              <ul className="crumb">
                <li><a href="/">Home</a></li>
                <li className="sep">/</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div id="content" style={{background: '#f5f7f9'}}>
        <div className="row">
          <div className="col-md-3 col-md-offset-4">
        {redirectToReferrer && (
          <Redirect to={from || '/admin/messages'}/>
        )}
        {from && (
          <p>Você precisa está logado para acessar {from.pathname}</p>
        )}



              <span>{this.state.message_error}</span>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div>Digite o email</div>
                <input type="text" className="form-control" value={this.state.email} onChange={e => this.setState({email: e.target.value})}  />
                <div>Digite a senha</div>
                <input type="password" className="form-control" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
                <br/>
                <button className="btn btn-default pull-right" type="submit">Entrar</button>
              </form>
          </div>
        </div>

      </div>
    </div>
    );
  }
}

export default Login;
