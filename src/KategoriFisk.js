import React from 'react';
import App from './App';
import './kategori.css';
import { FooterContainer } from './containers/footer';

import { Container, Row, Col } from 'react-bootstrap';

function KategoriFisk() {
    return <div>

        <div className="container">
            <div className="row">
                <h3 className="kategori-titel">Veckans utvalda fisk recept</h3>

                <div className="col">
                    <div className="rosa-ruta-fisk">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">14</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-fisk">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">24</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-fisk">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">8</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="rosa-ruta-fisk1">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img1" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">17</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-fisk1">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">15</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-fisk1">
                        <div className="kategori-content">
                            <div className="kategori-text"></div><a href="#"></a>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">14</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <FooterContainer />
    </div>
}

export default KategoriFisk;