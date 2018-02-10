import React from 'react';
import { Link } from 'react-router-dom';
//import NavbarList from './navbar_list';
// import NavbarItem from './navbar_item';

const NavBar = ({ itemList, url }) => {
	// const navItems = itemList.map(item => {
	// 	return (
	// 		<NavbarItem key={item} item={item} url={url}/>
	// 	);
	// });

	return (
		<nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#containerNavbarCenter" aria-controls="containerNavbarCenter" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span>
			</button>
			
			<div className="collapse navbar-collapse justify-content-md-center" id="containerNavbarCenter">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to='/'>Home</Link>
					</li>				
					<li className="nav-item">
						<Link className="nav-link" to='/person/photo'>Photo</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to='/person/video'>Video</Link>
					</li>
				</ul>
	        </div>
	        
		</nav>
	);
}

export default NavBar