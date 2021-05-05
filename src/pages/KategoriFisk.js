import React from 'react';
import App from '../App';
import './style/kategori.css';

import skaldjur from '../bilder/fisk-och-skaldjursgryta.jpeg';
import lax from '../bilder/lax.jpeg';
import sushi from '../bilder/maki-sushi.jpeg';
import fishtacos from '../bilder/fishtacos.jpeg';
import fisksas from '../bilder/skolans-fisksas.jpg';
import gravlax from '../bilder/gravlaxtartar.jpeg';

import { FooterContainer } from '../containers/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function KategoriFisk() {
    return <div>

        <Container>
            <Row>
                <h3 className="kategori-titel">Veckans utvalda fisk recept</h3>

               <Col>
                    <div className="rosa-ruta-fisk">
                        <div className="kategori-content">
                            <div className="kategori-text">Enkel fisk- och skaldjurssoppa med vitlöksaioli<a href="#"></a></div>
                            <div className="kategori-img"><img src={skaldjur} alt="Enkel fisk- och skaldjurssoppa med vitlöksaioli"/><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <FontAwesomeIcon icon={ faComments} />
                            <div className="kategori-number">14</div>
                        </div>
                    </div>
                    </Col>
                <div className="col">
                    <div className="rosa-ruta-fisk">
                        <div className="kategori-content">
                            <div className="kategori-text">Lax i ugn med sojastekt broccoli<a href="#"></a></div>
                            <div className="kategori-img"><img src={lax} alt="Lax i ugn med sojastekt broccoli"/><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">24</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-fisk1">
                        <div className="kategori-content">
                            <div className="kategori-text">Gravlaxtartar</div><a href="#"></a>
                            <div className="kategori-img1"><img src={gravlax} alt="Gravlaxtartar"/><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">14</div>
                        </div>
                    </div>
                </div>
                
                </Row>
            <div className="row">
                <div className="col">
                    <div className="rosa-ruta-fisk1">
                        <div className="kategori-content">
                            <div className="kategori-text">Fish-tacos med picklad rödlök och tomatsalsa<a href="#"></a></div>
                            <div className="kategori-img"><img src={fishtacos} alt="Fish-tacos med picklad rödlök och tomatsalsa"/><a href="#">
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
                            <div className="kategori-text">Skolans fisksås<a href="#"></a></div>
                            <div className="kategori-img1"><img src={fisksas} alt="Skolans fisksås"/><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">15</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="rosa-ruta-fisk">
                        <div className="kategori-content">
                            <div className="kategori-text">Maki-sushi<a href="#"></a></div>
                            <div className="kategori-img"><img src={sushi} alt="Maki-sushi"/><a href="#">
                            </a></div>
                            <div className="kategori"><i>Fisk</i></div>
                            <i className="far fa-comments"></i>
                            <div className="kategori-number">8</div>
                        </div>
                    </div>
                </div>
               
               
            </div>

            </Container>
        <FooterContainer />
    </div>
}

export default KategoriFisk;