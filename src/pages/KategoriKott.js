import React from 'react';
import App from '../App';
import './style/kategori.css';

import biff_bea1 from '../bilder/biff_bea1.jpeg';
import spaghetti_bolognese from '../bilder/spaghetti-bolognese.jpeg';
import coteboef from '../bilder/boeuf-steak.jpeg';
import oxfile from '../bilder/oxfile.jpeg';
import bulgogi from '../bilder/bulgogi.jpeg';
import burgare from '../bilder/hamburgare.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

import { FooterContainer } from '../containers/footer';

function KategoriKott() {
    return <div>

        <Container>
            <Row>
                <h3 className="kategori-titel">Veckans utvalda kött recept</h3>

                <Col>
                    <div className="rosa-ruta-kott">
                        <div className="kategori-content">
                            <div className="kategori-text">Spagetti bolognese<a href="#"></a></div>
                            <div className="kategori-img"><img src={spaghetti_bolognese} alt="Spaghetti Bolognese"/><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <FontAwesomeIcon icon={ faComments} />
                            <div className="kategori-number">13</div>
                        </div>
                    </div>
                    </Col>
                <div className="col">
                    <div className="rosa-ruta-kott">
                        <div className="kategori-content">
                            <div className="kategori-text">Grillad entrecote med bearnaisesås<a href="#"></a></div>
                            <div className="kategori-img"><img src={biff_bea1} alt="entrecote med bea"/><a href="#">
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
                            <div className="kategori-text">Côte de boeuf med köttrub<a href="#"></a></div>
                            <div className="kategori-img1"><img src={coteboef} alt="Côte de boeuf med köttrub"/><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">10</div>
                        </div>
                    </div>
                </div>
                </Row>
            <div className="row">
                <div className="col">
                    <div className="rosa-ruta-kott1">
                        <div className="kategori-content">
                            <div className="kategori-text">Oxfilé provencale<a href="#"></a></div>
                            <div className="kategori-img1"><img src={oxfile} alt="Oxfilé provencale"/><a href="#">
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
                            <div className="kategori-text">Bulgogi<a href="#"></a></div>
                            <div className="kategori-img"><img src={bulgogi} alt="Bulgogi"/><a href="#">
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
                            <div className="kategori-text">Smashade burgare på högrev</div><a href="#"></a>
                            <div className="kategori-img1"><img src={burgare} alt="Smashade burgare på högrev"/><a href="#">
                            </a></div>
                            <div className="kategori"><i>Kött</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">12</div>
                        </div>
                    </div>
                </div>
            </div>

            </Container>
        <FooterContainer />
    </div>
}

export default KategoriKott;