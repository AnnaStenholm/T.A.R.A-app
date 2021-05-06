import React from 'react';
import Container from 'react-bootstrap/Container';
import './style/recipe.css';
import fishtacos from '../bilder/fishtacos.jpeg';
import { FooterContainer } from '../containers/footer';


const UserReceipe = () => {
    return (
    <div>
        <Container>
            <div className="user-topbox">
                <h1 className="fish-title">FISH TACOS MED<br></br> PICKLAD RÖDLÖK OCH<br></br>TOMATSALSA</h1>
                <div className="fish-img"><img src={fishtacos} alt="Fish-tacos med picklad rödlök och tomatsalsa" />
                </div>
                <div className="user-bottombox">
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
                    <div className="user-do-box">
                        <div className="user-title">Gör så här</div>
                        <ul className="todo">
                            <li>1. Skala och skiva rödlöken. Koka upp vatten och blanda med socker, ättika och salt. Lägg ner lökringarna i det heta vattnet och låt dem ligga och dra i cirka en timme. Slå av lagen innan servering.</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>


        </Container>
        <FooterContainer />
        </div>
    )
}

export default UserReceipe;