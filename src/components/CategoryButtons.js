import React from 'react';
import { Link } from "react-router-dom";
import carrot from './Ikoner/carrot.png'
import fish from './Ikoner/fish.png'
import meat from './Ikoner/meat.png'

const CategoryButtons = () => {

    
    return (
    <> 
    <div className="col-md-12 text-center">
        <button className="btn btn-outline-dark" style={{ margin: '1em' }}><Link to="/recept/vego"><img src={carrot} style={{ width: '40px', margin: 'auto', display: 'block' }}></img></Link></button>
        <button className="btn btn-outline-dark" style={{ margin: '1em' }}><Link to="/recept/fisk"><img src={fish} style={{ width: '40px', margin: 'auto', display: 'block' }}></img></Link></button>
        <button className="btn btn-outline-dark" style={{ margin: '1em' }}><Link to="/recept/kött"><img src={meat} style={{ width: '40px', margin: 'auto', display: 'block' }}></img></Link></button>
    </div>
    </>
    );
};

export default CategoryButtons;