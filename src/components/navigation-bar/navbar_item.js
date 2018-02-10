import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({ item, url}) => {
	const goUrl = item == 'Home' ? '/' : `${ url }/${ item }`;
	// remember to toggle active an item. class 'action'
	return (
		<li className="nav-item">
			<Link className="nav-link" to={`${ goUrl }`}>{ item }</Link>
		</li>
	);
}

export default NavbarItem;