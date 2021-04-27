import React from 'react';
import App from './App';
import './kategori.css';
import { FooterContainer } from './containers/footer';

import { Container, Row, Col } from 'react-bootstrap';

function KategoriKott() {
    return <div>

        <div className="container">
            <div className="row">
                <h3 className="kategori-titel">Veckans utvalda kött recept</h3>

                <div className="col">
                    <div className="rosa-ruta-kott">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">13</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-kott">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">20</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-kott">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">10</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="rosa-ruta-kott1">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img1" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">19</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-kott1">
                        <div className="kategori-content">
                            <div className="kategori-text"><a href="#"></a></div>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">11</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-kott1">
                        <div className="kategori-content">
                            <div className="kategori-text"></div><a href="#"></a>
                            <div className="kategori-img" src=""><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">12</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <FooterContainer />
    </div>
}

export default KategoriKott;