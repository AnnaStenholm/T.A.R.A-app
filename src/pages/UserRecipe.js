import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style/recipe.css';
import fishtacos from '../bilder/fishtacos.jpeg';
import PostAnvLike from '../components/PostAnvLike'
import CommentAnvLink from '../components/CommentAnvLink'


const UserReceipe = () => {
    return (
    <div>
        <Container>
            <Row>
                <h1 className="fish-title">FISH TACOS MED<br></br> PICKLAD RÖDLÖK OCH<br></br>TOMATSALSA</h1>
                <Col>
                <div className="fish-img"><img src={fishtacos} alt="Fish-tacos med picklad rödlök och tomatsalsa" />
                </div>
                </Col>
                </Row>
                </Container>
                <Container>
                    <Row>
                <Col>
                <div className="user-ingr-box">
                        <div className="user-title">Ingredienser</div>
                            <div className="portion">4 port</div>
                        <ul className="user-ingr">
                            <h5 className="sub-ingr"><u>Snabbpicklad rödlök:</u></h5>
                            <li><p>1 stor röd lök</p></li>
                            <li><p>4 dl vatten</p></li>
                            <li><p>0,5 dl strösocker</p></li>
                            <li><p>1 msk ättika</p></li><br></br>           
                            <h5 className="sub-ingr"><u>Friterad fisk:</u></h5>           
                            <li><p>800g vit fisk, ex pangasiusfilé</p></li>               
                            <li><p>2 ägg</p></li>           
                            <li><p>1 dl vetemjöl</p></li>     
                            <li><p>1 tsk bakpulver</p></li>   
                            <li><p>1 tsk flingsalt</p></li>
                            <li><p>1 msk vatten</p></li>
                            <li><p>rapsolja</p></li>
                            <h5 className="sub-ingr"><u>Tomatsalsa:</u></h5>
                            <li><p>250g cocktailtomater</p></li>
                            <li><p>21 schalottenlök</p></li>
                            <li><p>1 vitlöksklyfta</p></li>
                            <li><p>1/2 kruka koriander</p></li>
                            <li><p>1/2 lime</p></li>
                            <li><p>salt, chilipulver</p></li>
                            <h5 className="sub-ingr"><u>Tacodressing:</u></h5>
                            <li><p>0,5 dl kapris</p></li>
                            <li><p>0,5 dl hackad smörgåsgurka</p></li>
                            <li><p>2 dl créme fraiche</p></li>
                            <li><p>0,5 dl majonnäs</p></li>
                            <li><p>salt, peppar, lökpulver</p></li>
                            
                        </ul>
                    </div>
                    </Col>
                    <Col>
                    <div className="user-do-box">
                        <div className="user-title">Gör så här</div>
                        <ul className="todo">
                            <li><p>1. Skala och skiva rödlöken. Koka upp vatten och blanda med socker, ättika och salt. Lägg ner lökringarna i det heta vattnet och låt dem ligga och dra i cirka en timme. Slå av lagen innan servering.</p></li>
                            <li><p>2. Tina fisken och torka av den ordentligt med hushållspapper. Skär fisken till mindre bitar. Vispa ihop ägg med vetemjöl, bakpulver, flingsalt och vatten. Hetta upp en stekpanna med cirka en centimeter djup rapsolja. Doppa varje fiskbit i smeten och lägg över i den varma oljan. Fritera fisken på båda sidor så den får ljus färg och låt den sedan rinna av på ett hushållspapper. Ställ pannan åt sidan när fisken är friterad. När dte är dags att äta, hetta upp oljan igen och fritera klart fiskbitarna så de får en frasig yta och gyllene färg.</p></li>
                            <li><p>3. Blanda kvartar om tomat, hackad schalottenlök, en fin hackad vitlöksklyfta och klippt koriander. Smaka av med lime, salt och chilipulver.</p></li>
                            <li><p>4. Hacka kapris och smörgåsgurka. Blanda med creme fraiche och majonnäs i en skål. Smaka av med kryddor.</p></li>
                            <li><p>5. Servera allt med tortillabröd, jalpeños, chipotlepasta, doritos och majs. Dryckestips är den mexikanska ölen Sol eller en torr riesling.</p></li>
                        </ul>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                        <PostAnvLike/>
                        <CommentAnvLink/>
                    </Row>
                    </Container>   
        </div>
    )
}

export default UserReceipe;