import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			<nav className="navbar navbar-light bg-light">
				<div>
					<Link to="/">
						{/* Temporary Image */}
						<img src="https://ih1.redbubble.net/image.1816083712.5142/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="placeholder" width="30" height="24" className="d-inline-block align-text-top" />
						Genshin Builds
					</Link>
				</div>
				<ul className="nav nav-pills nav-fill">
					<li className="nav-item">
						<Link className="nav-link active" aria-current="page" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" aria-current="page" to="/login">Login</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" aria-current="page" to="/signup">Sign Up</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default NavBar
