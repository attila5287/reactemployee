import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
		<ul className="nav nav-tabs py-1">
			<li className="nav-item">
				<Link
					to="/search"
					className={
						location.pathname === '/search' ? 'nav-link active' : 'nav-link'
					}
				>
					<i className="fas fa-search"></i> Search
				</Link>
			</li>

			<li className="nav-item">
				<Link
					to="/"
					className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
				>
					<i className="fas fa-info-circle"></i> About
				</Link>
			</li>
			<li className="nav-item rounded p-0 px-2">
				<i className="fab fa-react fa-spin text-xl text-info mt-1"></i>
				<i>React UI</i>
			</li>
			<li className="nav-item rounded p-0 px-1">
				<i className="fab fa-github text-xl text-secondary mt-1"></i>
				<i>
					<small>
						<a href="attila5287.github.io/"></a>
						attila5287
					</small>
				</i>
			</li>
		</ul>
	);
}

export default NavTabs;
