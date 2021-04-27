import React, { useState } from 'react';
import Startsida from './Startsida';
import KategoriVego from './KategoriVego';
import KategoriFisk from './KategoriFisk';
import KategoriKott from './KategoriKott';
import { FooterContainer } from './containers/footer';
import GetThread from './components/GetThread';
import VegoRecipeForm from './components/forms/VegoRecipeForm';
import FiskRecipeForm from './components/forms/FiskRecipeForm';
import KottRecipeForm from './components/forms/KottRecipeForm';
import { useParams } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';

const  Page = () => {
     
    const params = useParams();
    //const dispatch = useDispatch();
   //<GetThread channel={params.category} ></GetThread>
    return (
    <>
        <KategoriVego />
        <h1>{params.category}</h1>
        <GetThread category={params.category}></GetThread>
        <VegoRecipeForm/>
        <FiskRecipeForm/>
        <KottRecipeForm/>
        <FooterContainer/>
    </>
);
    
};

export default Page; 