import React from 'react';
import VegoRecipeForm from './VegoRecipeForm';
import KottRecipeForm from './KottRecipeForm';
import FiskRecipeForm from './FiskRecipeForm';
import './style/form.css';

import { Container, Row, Col } from 'react-bootstrap';

function PostForm() {
    return (
        
            <div className="container">
                <div className="heading-box">
                    <h1 className="heading-form">Publicera ditt recept</h1>
                </div>
                <div className="form-box">
                    <VegoRecipeForm />
                </div>
                <div className="form-box">
                    <FiskRecipeForm />
                </div>
                <div className="form-box">
                    <KottRecipeForm />
                </div>
            </div>
        
    )

}

export default PostForm;

