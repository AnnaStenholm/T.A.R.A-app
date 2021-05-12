import React from 'react';
import VegoRecipeForm from './VegoRecipeForm';
import KottRecipeForm from './KottRecipeForm';
import FiskRecipeForm from './FiskRecipeForm';
import './style/form.css';

import { Container, Row, Col } from 'react-bootstrap';

function PostForm() {
    return (
        
            <Container>
                <Row>
                    
                <div className="heading-box">
                    <h1 className="heading-form">Publicera ditt recept</h1>
                </div>
                <Col>
                <div className="form-box">
                    <VegoRecipeForm />
                </div>
                </Col>
                <Col>
                <div className="form-box">
                    <FiskRecipeForm />
                </div>
                </Col>
                <Col>
                <div className="form-box">
                    <KottRecipeForm />
                </div>
                </Col>
                </Row>
                </Container>
           
        
    )

}

export default PostForm;

