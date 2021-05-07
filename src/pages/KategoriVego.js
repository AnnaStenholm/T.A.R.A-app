import React from 'react';
import App from '../App';
import './style/kategori.css';

import tomatbruschetta from '../bilder/tomatbruschetta.jpg';
import vegetacos from '../bilder/vegotacos1.jpeg';
import aubergin from '../bilder/auberginegratang.jpeg';
import varrullar from '../bilder/varrullar.jpeg';
import pesto from '../bilder/spesto-genovese.jpeg';
import risotto from '../bilder/risotto_milanese.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

import { FooterContainer } from '../containers/footer';


function KategoriVego() {
    return <div>


        <Container>
            <Row>
            <h3 className="kategori-titel">Veckans utvalda vegetariska recept</h3>
                
                    <Col>
                        <div className="rosa-ruta-vego">
                            <div className="kategori-content">
                                <div className="kategori-text">Vegotacos med blomkål, refried beans, ris och fetaost</div>
                                <div className="kategori-img"><img src={vegetacos} alt="Vegotacos med blomkål, refried beans, ris och fetaost"/>
                                </div>
                                <div className="kategori-val"><i>Vegetariskt</i></div>
                                <FontAwesomeIcon icon={ faComments} />
                                <div className="kategori-number">16</div>
                            </div>
                        </div>
                        </Col>
                    <Col>
                        <div className="rosa-ruta-vego">
                            <div className="kategori-content">
                                <div className="kategori-text">Vegetarisk aubergingratäng</div>
                                <div className="kategori-img"><img src={aubergin} alt="Vegetarisk aubergingratäng"/>
                                </div>
                                <div className="kategori-val"><i>Vegetariskt</i></div>
                                <FontAwesomeIcon icon={ faComments} />
                                <div className="kategori-number">22</div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="rosa-ruta-vego">
                            <div className="kategori-content">
                                <div className="kategori-text">Vårrullar med limemarinerad lök och hoisinsås</div>
                                <div className="kategori-img"><img  src={varrullar} alt="Vårrullar med limemarinerad lök och hoisinsås"/>
                                </div>
                                <div className="kategori-val"><i>Vegetariskt</i></div>
                                <FontAwesomeIcon icon={ faComments} />
                                <div className="kategori-number">12</div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="rosa-ruta-vego1">
                                <div className="kategori-content">
                                    <div className="kategori-text">Tomatbruschetta</div>
                                    <div className="kategori-img1"><img src={tomatbruschetta} alt="Tomatbruschetta"/>
                                    </div>
                                    <div className="kategori-val"><i>Vegetariskt</i></div>
                                    <FontAwesomeIcon icon={ faComments} />
                                    <div className="kategori-number">15</div>
                                </div>
                            </div>
                            </Col>
                        <Col>
                            <div className="rosa-ruta-vego1">
                                <div className="kategori-content">
                                    <div className="kategori-text">Pesto genovese</div>
                                    <div className="kategori-img"><img src={pesto} alt="Pesto genovese"/>
                                    </div>
                                    <div className="kategori-val"><i>Vegetariskt</i></div>
                                    <FontAwesomeIcon icon={ faComments} />
                                    <div className="kategori-number">13</div>
                                </div>
                            </div>
                            </Col>
                        <Col>
                            <div className="rosa-ruta-vego1">
                                <div className="kategori-content">
                                    <div className="kategori-text">Risotto milanese</div>
                                    <div className="kategori-img"><img src={risotto} alt="Risotto milanese"/>
                                    </div>
                                    <div className="kategori-val"><i>Vegetariskt</i></div>
                                    <FontAwesomeIcon icon={ faComments} />
                                    <div className="kategori-number">19</div>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    
                        </Container>
        <FooterContainer/>
           </div>
       
    


}

export default KategoriVego;