//Tiba
import React from 'react';
import './style/startsida.css';

import tomatbruschetta from '../bilder/tomatbruschetta.jpg';
import skolans_fisksas from '../bilder/skolans-fisksas.jpg';
import oxfile from '../bilder/oxfile.jpeg';

import carrot from '../components/Ikoner/carrot.png';
import meat from '../components/Ikoner/meat.png';
import fish from '../components/Ikoner/fish.png';
import { container, row, col, Button } from 'react-bootstrap';

function Startsida() {
    return <div>

        <div className="container">
            <div className="row">
                <h3 className="startsida-titel">Veckans favoriter</h3>
                <div className="col">
                <div className="startsida-img"><img src={tomatbruschetta} alt="tomatbruschetta"/><a href="#"></a></div>
                    <div className="beige-ruta">
                        <div className="startsida-content">
                            <div className="text">Tomatbruschetta<a href="#"></a></div>
                            <div className="beskrivning">Bruschetta betyder rostat bröd på
                            italienska och består av bröd, olja,
                            vitlök och salt. Färsk tomat och
                            basilika är den klassiska smaken.</div>
                            <div className="kategori"><i>Vego</i></div>
                            <i className="far fa-comments"></i>
                            <div className="antal-kommentar">15</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="startsida-img"><img src={skolans_fisksas} alt="skolans fisksås"/><a href="#"></a></div>
                    <div className="beige-ruta">
                        <div className="startsida-content">
                            <div className="text">Skolans fisksås<a href="#"></a></div>
                            <div className="beskrivning">Den klassiska såsen som serveras
                            till nystekt panerad fisk. Den blir
                            bara godare av att stå, så gör den
                            gärna dagen innan.</div>
                            <div className="kategori">Fisk</div>
                            <i className="far fa-comments"></i>
                            <div className="antal-kommentar">43</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="startsida-img"><img src={oxfile} alt="Oxfilé Provencale"/><a href="#"></a></div>
                    <div className="beige-ruta">
                        <div className="startsida-content">
                            <div className="text">Oxfilé provencale<a href="#"></a></div>
                            <div className="beskrivning">Retro för en riktig fransk
                            festklassiker. Oxfilé surprise går att
                            förbereda dagen innan och bara
                            värma med vitlökssmöret precis
                            innan servering.</div>
                            <div className="kategori">Kött</div>
                            <i className="far fa-comments"></i>
                            <div className="antal-kommentar">32</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="row">
            <h3 className="startsida-titel">Kategorier</h3>
                <div className="col">
                    <div className="ruta">
                    <a href="#"><h3 className="box-titel">Vego</h3></a>
                    <div className="icons">
                    <img src={carrot} alt="vego"/>
                </div>
                    </div>
                </div>
                <div className="col">
                    <div className="ruta">
                    <a href="#"><h3 className="box-titel">Fisk</h3></a>
                    <div className="icons">
                    <img src={fish} alt="vego"/>
                </div>
                    </div>
                </div>
                <div className="col">
                    <div className="ruta">
                    <a href="#"><h3 className="box-titel">Kött</h3></a>
                    <div className="icons">
                    <img src={meat} alt="vego"/>
                </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
}

export default Startsida;