import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
		return(
			<nav>
		    <div class="nav-wrapper blue darken-3">
		      <a href="#" class="brand-logo">Quiz Game</a>
		      <ul id="nav-mobile" class="right hide-on-med-and-down">
		        <li><Link to="/">Home</Link></li>
		        <li><NavLink to="/React">React</NavLink></li>
		        <li><NavLink to="/Javascript">Javascript</NavLink></li>
		      </ul>
		    </div>
		  </nav>
			)
}

export default Navbar;