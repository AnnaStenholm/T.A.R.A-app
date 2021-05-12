import React from 'react';
import { Link } from "react-router-dom";

const AddRecipeButton = () => {
    return (
        <div>
            <Link to="/postpage">
            
            <button className="btn btn-outline-dark"
            style={{ float:'right', marginTop:'20px' }}>
                <i class="fa fa-plus" aria-hidden="true"
                style={{ marginRight: '5px' }}></i>
                Lägg till recept
           
            </button>
            </Link>
        </div>
    )
}

export default AddRecipeButton
