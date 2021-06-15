import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
	<>
		<nav className="navbar navbar-dark navbar-exand-lg bg-primary ">
			<div className="navbar-brand">
				Pokemon App
			</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink 
						className="nav-link" 
						to="/"
						exact
					> Главная </NavLink>
				</li>
				<li className="nav-item">
					<NavLink 
						className="nav-link" 
						to="/about"
					> О приложении </NavLink>
				</li>
			</ul>
		</nav>
	</>
)