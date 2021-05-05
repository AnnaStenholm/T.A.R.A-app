import React from 'react';
import gryta from '../../bilder/gryta.gif'
const Gryta = () => {
    return (
        <div >
        <img src={gryta} style={{ width: '200px', margin: 'auto', marginTop: '100px', display: 'block' }} 
        alt='Laddar...' />
        <h3 style={{ textAlign: 'center', width: '200px', margin: 'auto', marginTop: '50px', display: 'block' }} >Laddar...</h3>
        </div>
    )
}
    
export default Gryta;
