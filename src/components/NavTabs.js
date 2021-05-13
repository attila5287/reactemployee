import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
		<ul className="nav nav-tabs py-1">
			<li className="nav-item align-items-center">
				<Link
					to="/table"
					className={
						location.pathname === '/table' ? 'nav-link active' : 'nav-link'
					}
				>
					<i className="fas fa-table"></i> Table
				</Link>
			</li>
			<li className="nav-item align-items-center">
				<Link
					to="/search"
					className={
						location.pathname === '/search' ? 'nav-link active' : 'nav-link'
					}
				>
					<i className="fas fa-search"></i> Search
				</Link>
			</li>

			<li className="nav-item align-items-center">
				<Link
					to="/"
					className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
				>
					<i className="fas fa-info-circle"></i> About
				</Link>
			</li>
			<li className="nav-item align-items-center">
				<Link to="https://github.com/attila5287/" className="nav-link">
					<i className="fab fa-github"></i> attila5287
				</Link>
			</li>
		</ul>
	);
}

export default NavTabs;