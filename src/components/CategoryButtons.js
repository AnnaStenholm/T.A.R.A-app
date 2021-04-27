import React from 'react';
import { Link } from "react-router-dom";

const CategoryButtons = () => {

    
    return (
    <> 
    <button><Link to="/recept/vego">Vego</Link></button>
    <button><Link to="/recept/fisk">Fisk</Link></button>
    <button><Link to="/recept/kött">Kött</Link></button>
    </>
    );
};

export default CategoryButtons;