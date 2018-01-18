import React, { Component } from 'react';
import firebase from 'firebase';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import { isAuthenticated, storageKey } from './fire';
import FileUploader from 'react-firebase-file-uploader';
import { Redirect } from 'react-router-dom'



// "ADQUIRA JÁ O SEU CARTÃO POPULAR<br /><br />COM ELE TUDO FICA MAIS SIMPLES, VOCÊ COMPRA SEUS CRÉDITOS PELA INTERNET, NO VALOR QUE DESEJAR, E EM CASO DE EXTRAVIO PODE SER FEITO O BLOQUEIO DO CARTÃO E REPOSIÇÃO DOS CRÉDITOS, ALÉM DE TORNAR SEU EMBARQUE RÁPIDO, PRATICO E SEGURO.<br /><br /><br />VIAÇÃO SANREMO LTDA"



class Private extends Component {

  state = {
    text: '',
    banner: '',
    isUploading: false,
    progress: 0,
    bannerURL: '',
    uid: null,
    redirect: false,
    active: "N",

  };


constructor(props){
  super(props);
  const self = this;
  firebase.database().ref('/messages').orderByChild('text').on("child_added", function(snapshot) {
    self.setState({text: snapshot.val()})
  });
  firebase.database().ref('/banners').orderByChild('banner_url').on("child_added", function(snapshot) {
    self.setState({bannerURL: snapshot.val()})
  });
  firebase.database().ref('/alert').orderByChild('banner_url').on("child_added", function(snapshot) {
    self.setState({active: snapshot.val()})
  });
}

onChange(e) {
  this.setState({
    active: e.target.value
  })
}

  logout = () => {
    const self = this;
    firebase.auth().signOut().then(function() {
      window.localStorage.removeItem(storageKey);
      self.setState({ redirect: true });
    }, function(error) {
      // An error happened.
    });
  }


  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
  };
  handleUploadSuccess = (filename) => {
    this.setState({banner: filename, progress: 100, isUploading: false});
    const self = this;
    firebase.storage().ref('banners').child(filename).getDownloadURL().then(url => {
      this.setState({bannerURL: url});
      firebase.database().ref('/banners').orderByChild('banner_url').on("child_added", function(snapshot) {
        let url = snapshot.val();
        if(url !== self.state.bannerURL){
          let storageReference = firebase.storage().refFromURL(url);
          storageReference.delete();
        }
      });
      firebase.database().ref('/banners').set({banner_url: url });
    });

    const banners = firebase.database().ref('banners').orderByKey();



  };

  submitForm = (event) => {
    event.preventDefault();
    firebase.database().ref('/messages').set({text: this.state.text});
    firebase.database().ref('/alert').set({text: this.state.active});
    swal({
      type: 'success',
      title: 'Seu trabalho foi salvo!',
      showConfirmButton: false,
      timer: 1500
    })
  };

  render() {

    const { redirect } = this.state;

      if (redirect) {
        return <Redirect to='/admin/login'/>;
      }


    return (
      <div id="content" className="top" style={{background: '#f5f7f9'}}>
        <div className="container">
          <div className='row' style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <div className='col-md-12'>
              <button className='btn btn-default type--uppercase pull-right' style={{padding:'5px'}} onClick={this.logout.bind(this)}>Sair do Sistema</button>
            </div>
            <hr/>
          </div>
          { isAuthenticated() ? (
          <div className="" style={{paddingBottom:'70px'}}>

          <form onSubmit={this.submitForm.bind(this)}>
            <div className='col-md-6'>

              {this.state.isUploading &&
                <p>Progress: {this.state.progress} %</p>
              }
              {this.state.bannerURL &&
                <img src={this.state.bannerURL} alt="banner" className='img-thumbnail'/>
              }

              <FileUploader
                accept="image/*"
                name="banner"
                randomizeFilename
                storageRef={firebase.storage().ref('banners')}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
            </div>

            <div className='col-md-6'>
              <label>Escreva sua mensagem</label>
              <textarea rows="10" cols="50" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} className="form-control"/>
            </div>
            <div className='col-md-12' style={{marginTop:'20px'}}>
              <label>Escolha qual mensagem deseja que apareça</label>
              <select value={this.state.active} onChange={this.onChange.bind(this)} className="form-control">
                <option value="B">Banner</option>
                <option value="M">Texto</option>
                <option value="N">Nenhum</option>
              </select>

            <button type="submit" className="pull-right btn btn-default" style={{marginTop:'20px'}}>Salvar</button>
              </div>


          </form>
        </div>
        ) : (<Redirect to='/admin/login'/>)}
      </div>
      </div>
    );
  }
}

export default Private;
