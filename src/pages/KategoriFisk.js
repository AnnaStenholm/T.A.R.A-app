import React from 'react';
import App from '../App';
import './style/kategori.css';

import skaldjur from '../bilder/fisk-och-skaldjursgryta.jpeg';
import lax from '../bilder/lax.jpeg';
import sushi from '../bilder/maki-sushi.jpeg';
import fishtacos from '../bilder/fishtacos.jpeg';
import fisksas from '../bilder/skolans-fisksas.jpg';
import gravlax from '../bilder/gravlaxtartar.jpeg';

import {  Link } from "react-router-dom";
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
                            <div className="kategori-text">Enkel fisk- och skaldjurssoppa med vitlöksaioli</div>
                            <div className="kategori-img"><img src={skaldjur} alt="Enkel fisk- och skaldjurssoppa med vitlöksaioli"/>
                            </div>
                            <div className="kategori-val"><i>Fisk</i></div>
                            <FontAwesomeIcon icon={ faComments} />
                            <div className="kategori-number">14</div>
                        </div>
                    </div>
                    </Col>
               <Col>
                    <div className="rosa-ruta-fisk">
                        <div className="kategori-content">
                            <div className="kategori-text">Lax i ugn med sojastekt broccoli</div>
                            <div className="kategori-img"><img src={lax} alt="Lax i ugn med sojastekt broccoli"/>
                            </div>
                            <div className="kategori-val"><i>Fisk</i></div>
                            <FontAwesomeIcon icon={ faComments} />
                            <div className="kategori-number">24</div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="rosa-ruta-fisk1">
                        <div className="kategori-content">
                            <div className="kategori-text">Gravlaxtartar</div>
                            <div className="kategori-img1"><img src={gravlax} alt="Gravlaxtartar"/>
                           </div>
                            <div className="kategori-val"><i>Fisk</i></div>
                            <FontAwesomeIcon icon={ faComments} />
                            <div className="kategori-number">14</div>
                        </div>
                    </div>
                    </Col>
                
                </Row>
            <Row>
                <Col>
                    <div className="rosa-ruta-fisk1">
                        <div className="kategori-content">
                            <div className="kategori-text"><Link to="/anv/recept">Fish-tacos med picklad rödlök och tomatsalsa</Link></div>
                            <div className="kategori-img"><Link to="/anv/recept"><img src={fishtacos} alt="Fish-tacos med picklad rödlök och tomatsalsa"/></Link>
                            </div>
                            <div className="kategori-val"><i>Fisk</i></div>
                            <FontAwesomeIcon icon={ faComments} />
                            <div className="kategori-number">17</div>
                        </div>
                    </div>
                    </Col>
                <Col>
                    <div className="rosa-ruta-fisk1">
                        <div className="kategori-content">
                            <div className="kategori-text">Skolans fisksås</div>
                            <div className="kategori-img1"><img src={fisksas} alt="Skolans fisksås"/>
                            </div>
                            <div className="kategori-val"><i>Fisk</i></div>
                            <FontAwesomeIcon icon={ faComments} />
                            <div className="kategori-number">15</div>
                        </div>
                    </div>
                    </Col>
                <Col>
                    <div className="rosa-ruta-fisk">
                        <div className="kategori-content">
                            <div className="kategori-text">Maki-sushi</div>
                            <div className="kategori-img"><img src={sushi} alt="Maki-sushi"/>
                            </div>
                            <div className="kategori-val"><i>Fisk</i></div>
                            <FontAwesomeIcon icon={ faComments} />
                            <div className="kategori-number">8</div>
                        </div>
                    </div>
                    </Col>
               
               
                </Row>

            </Container>
        <FooterContainer />
    </div>
}

export default KategoriFisk;