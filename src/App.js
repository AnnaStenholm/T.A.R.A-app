//import React from 'react';
import Startsida from './pages/Startsida';
import KategoriVego from './pages/KategoriVego';
import KategoriKott from './pages/KategoriKott';
import KategoriFisk from './pages/KategoriFisk';
import PostPage from './pages/PostPage';
import UserRecipe from './pages/UserRecipe';
import AllRecipes from './components/AllRecipes';
import CommentDiv from './components/CommentDiv';
import Gryta from './components/Ikoner/Gryta';
import Navbar from './components/navbar';
import { FooterContainer } from './containers/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from "react-router-dom";


const App = (props) => 

<Router>
  <Navbar />
  <Search/>
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

    <Route path="/anv/recept">
      <UserRecipe/>
    </Route>

//Rebecka
    <Route path="/postpage">
      <PostPage/>
    </Route>

    <Route path="/laddar">
    <Gryta/>
    </Route>

    <Route exact path="/recept/:kategori">
      <AllRecipes/>
    </Route>

    <Route path="/recept/:id/kommentarer">
      <CommentDiv/>
    </Route>



  </Switch>
  <FooterContainer />
</Router>


export default App;


