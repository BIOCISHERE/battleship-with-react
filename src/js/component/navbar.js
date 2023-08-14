import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link className="ms-3" to="/">
				<span className="navbar-brand mb-0 h1">Battleship (click here to return to home)</span>
			</Link>
		</nav>
	);
};
