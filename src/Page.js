import React, { useState } from 'react';
import { FooterContainer } from './containers/footer';
import VegoRecipeForm from './components/forms/VegoRecipeForm';
import FiskRecipeForm from './components/forms/FiskRecipeForm';
import KottRecipeForm from './components/forms/KottRecipeForm';
import { useParams } from 'react-router-dom';

const  Page = () => {
   
    return (
    <>  
        <VegoRecipeForm/>
        <FiskRecipeForm/>
        <KottRecipeForm/>
        <FooterContainer/>
    </>
);
    
};

export default Page; 