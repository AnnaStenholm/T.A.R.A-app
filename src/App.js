import React from 'react';
import './App.css';
import Startsida from './Startsida';
import KategoriVego from './KategoriVego';
import KategoriFisk from './KategoriFisk';
import KategoriKott from './KategoriKott';
import { FooterContainer } from './containers/footer';
import VegoRecipeForm from './components/forms/VegoRecipeForm';
import FiskRecipeForm from './components/forms/FiskRecipeForm';
import KottRecipeForm from './components/forms/KottRecipeForm';

function App() {
  return (
    <>
      <KategoriVego />
      <VegoRecipeForm />
      <FiskRecipeForm />
      <KottRecipeForm />
      <FooterContainer />
    </>
  );


}

export default App;
