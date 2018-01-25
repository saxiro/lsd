import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {

  render(){
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* logo begin */}
              <div id="logo">
                <a href="/">
                  <img src="../assets/images/logo.jpg" />
                </a>
              </div>
              {/* logo close */}
              {/* small button begin */}
              <span id="menu-btn" />
              {/* small button close */}
              {/* mainmenu begin */}
              <nav>
                <ul id="mainmenu">
                  <li><a href="/">Home</a></li>
                  <li><NavLink to="/horarios" activeClassName="active">Horários</NavLink></li>
                  <li><NavLink to="/valetransporte" activeClassName="active">Vale Transporte</NavLink></li>
                  <li><NavLink to="/biometria" activeClassName="active">Biometria Facial</NavLink></li>
                  <li><NavLink to="/duvidasFrequentes" activeClassName="active">Dúvidas</NavLink></li>
                  <li><NavLink to="/trabalheConosco" activeClassName="active">Trabalhe conosco</NavLink></li>
                  <li><NavLink to="/contato" activeClassName="active">Contato</NavLink></li>
                </ul>
              </nav>
            </div>
            {/* mainmenu close */}
          </div>
        </div>
      </header>

    )
  }
}
export default Header;
