import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';
import Guaracard from './Guaracard'
import Estudante from './Estudante'
import Escola from './Escola'
import ValeTransporte from './ValeTransporte'
import Popular from './Popular'
import Horarios from './Horarios'
import DuvidasFrequentes from './DuvidasFrequentes'
import TrabalheConosco from './TrabalheConosco'
import Contato from './Contato'
import Header from './Header'
import Login from './Login';
import Private from './Private';
import {isAuthenticated} from './fire';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch

} from 'react-router-dom'


registerServiceWorker();

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route{...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/admin/login',
        state: { from: props.location }
      }} />
    )
  )}/>
);

const NoMatch = ({ location }) => (
  <Redirect to={{
    pathname: '/',
    state: { from: location }
  }} />
);

ReactDOM.render(
  (<Router>
     <div>
       <Header/>
         <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/guaracard" component={Guaracard}/>
          <Route path="/estudante" component={Estudante}/>
          <Route path="/escola" component={Escola}/>
          <Route path="/valeTransporte" component={ValeTransporte}/>
          <Route path="/popular" component={Popular}/>
          <Route path="/horarios" component={Horarios}/>
          <Route path="/duvidasFrequentes" component={DuvidasFrequentes}/>
          <Route path="/trabalheConosco" component={TrabalheConosco}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/admin/login" component={Login} />
          <PrivateRoute path="/admin/messages" component={Private} />
          <Route component={NoMatch} />
        </Switch>

    </div>
  </Router>
), document.getElementById('root'));
