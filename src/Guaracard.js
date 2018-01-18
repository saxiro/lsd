import React, { Component } from 'react';

class Guaracard extends Component {

  render(){
    return (
      <div>

        <section id="subheader" data-speed={8} data-type="background">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Guaracard</h1>
                <ul className="crumb">
                  <li><a href="home">Home</a></li>
                  <li className="sep">/</li>
                  <li>Guaracard</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div id="content">
          <div className="container">
            <div className="spacer-single" />
            <div id="gallery" className="row gallery full-gallery de-gallery pf_4_cols wow fadeInUp" data-wow-delay=".3s">
              <div className="col-md-4 col-sm-6 col-xs-12 item mb30">
                <div>
                  <a href="estudante">
                    <img src="assets/images/portfolio/0.jpg" style={{display: 'block', margin: 'auto'}} />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 item mb30">
                <div>
                  <a href="valeTransporte">
                    <img src="assets/images/portfolio/1.jpg" style={{display: 'block', margin: 'auto'}} />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12 item mb30">
                <div>
                  <a href="popular">
                    <img src="assets/images/portfolio/2.jpg" style={{display: 'block', margin: 'auto'}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Guaracard
