//import React from 'react';
import './App.css';
import Startsida from './Startsida';
import KategoriVego from './KategoriVego';
import KategoriKott from './KategoriKott';
import KategoriFisk from './KategoriFisk';
import Page from './Page';
import { FooterContainer } from './containers/footer';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from "react-router-dom";


const App = () => <Router>
  <Switch>

//Tibah 
    <Route path="/start">
      <Startsida/>
    </Route>

//Anna
    <Route path="/kategori/vego">
      <KategoriVego/>
    </Route>

    <Route path="/kategori/kott">
      <KategoriKott/>
    </Route>

    <Route path="/kategori/fisk">
      <KategoriFisk/>
    </Route>

//Rebecka
    <Route path="/page">
      <Page/>
    </Route>

  </Switch>
</Router>

export default App;


