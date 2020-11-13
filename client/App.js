import React, { useState } from 'react';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Navbar from './components/Navbar/index';
import SignUp from './components/SignUp/index';
import AddARecipe from './components/AddARecipe/index';
import AddExtract from './components/AddExtract/index'
import AddUpload from './components/AddUpload/index'
import Footer from './components/Footer';
import Discover from './components/Discover/index'
// import Sidebar from './components/Sidebar';
// import Products from './components/Products';
// import SingleProduct from './components/SingleProduct'
// import Admin from './components/Admin'
import SignIn from './components/SignIn/index'
import Profile from './components/Profile'
import RecipeBook from './components/MyRecipeBook'
// import CartContainer from './components/Cart/CartContainer'

function App() {


//   <Navbar toggle={toggle} />
  return (
    <Router>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar></Navbar>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signIn" component={SignIn} exact />
        <Route path="/signUp" component={SignUp} exact />
        {/* <Route path="/products" component={Products} exact />
        <Route path="/products/:productId" component={SingleProduct} />
        <Route path="/categories/:category" component={Products} /> */}
        <Route path="/profile" component={Profile} exact />
        <Route path="/recipe-book" component={RecipeBook} exact />
        <Route path="/addRecipe" component = {AddARecipe} />
        <Route path="/discover" component={Discover} exact />
        <Route path="/extract" component={AddExtract} exact />
        <Route path="/upload" component={AddUpload} exact />
        {/* <Route path='/admin' component = {Admin} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App
