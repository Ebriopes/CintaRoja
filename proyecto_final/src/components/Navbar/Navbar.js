import React from 'react';

const Navbar = () => {
	const name = "VARGAS"
	const place = "HOME"
	return(
		<nav className="navbar navbar-dark bg-primary">
			<span className="navbar-brand flex-fill">BIENVENIDO {name}</span>
			<span className="navbar-brand flex-fill">{place}</span>
			<span className="flex-fill text-right">
				<button className="navbar-toggler bg-secondary">
					<span className="navbar-toggler-icon flex-"></span>
				</button>
			</span>
		</nav>)
	;}
export default Navbar;