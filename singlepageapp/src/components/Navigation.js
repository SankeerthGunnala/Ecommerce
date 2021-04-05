import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Login from './Login';
import Products from './Products';
import Register from './Register';
import Home from './Home';


class Navigation extends React.Component{

    render(){
        return(
    <div>
    
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <NavLink className="navbar-brand" to="/home">Home</NavLink>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Route path="/home" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/products" component={Products}></Route>
</div>
        )
    }

}

export default Navigation;


