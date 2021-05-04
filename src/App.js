//import React from 'react';
import Startsida from './pages/Startsida';
import KategoriVego from './pages/KategoriVego';
import KategoriKott from './pages/KategoriKott';
import KategoriFisk from './pages/KategoriFisk';
import PostPage from './pages/PostPage';
import RecipeTable from './components/RecipeTable';
import AllRecipes from './components/AllRecipes';
import Comments from './components/Comments';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from "react-router-dom";


const App = (props) => <Router>
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
    <Route path="/postpage">
      <PostPage/>
    </Route>

    <Route path="/table">
      <RecipeTable/>
    </Route>



    <Route path="/recept/:kategori">
      <AllRecipes/>
    </Route>

    <Route path="/kommentarer">
      <Comments/>
    </Route>



  </Switch>
</Router>

export default App;


