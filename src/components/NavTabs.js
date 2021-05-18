import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
		<header>
			<ul className='nav nav-tabs py-0 text-sm shadow-lg'>
				<li className='nav-item align-items-center'>
					<Link
						to='/table'
						className={
							location.pathname === '/table'
								? 'nav-link active bg-info'
								: 'nav-link'
						}
					>
						<i className='fas fa-table mx-1'></i>
						<span className='text-md'>Table</span>
					</Link>
				</li>

				<li className='nav-item align-items-center'>
					<Link
						to='/about'
						className={
							location.pathname === '/about'
								? 'nav-link active bg-info'
								: 'nav-link'
						}
					>
						<i className='fas fa-info-circle'></i>
						<span className='text-md'>About</span>
					</Link>
				</li>
				<li className='nav-item nav-link align-items-center'>
					*
					<a
						className='nav-a align-items-center'
						href='https://github.com/attila5287/reactemployee'
					>
						<i className='fab fa-github mx-1'></i>
						<span className='text-md'>attila5287</span>
					</a>
				</li>
				<li className='nav-item nav-link align-items-center'>
					*
					<a
						className='nav-a align-items-center'
						href='https://attila5287.github.io/reactemployee'
					>
						<i className='fab fa-github-square mx-1'></i>
						<span className='text-md'>gh-pages</span>
					</a>
				</li>
				<li className='nav-item nav-link align-items-center'>
					*
					<a
						className='nav-a align-items-center'
						href='https://reactmanager.herokuapp.com'
					>
						<span className='mx-1 text-reg text-light bg-info p-0 px-1 rounded-lg'>
							<b>h</b>
						</span>
						<span className='text-reg'>heroku</span>
					</a>
				</li>
			</ul>
			<p className='mx-2 mb-0'>
				<span className='fas fa-exclamation-triangle fa-fw text-info mx-1'></span>
				<i>
					Blank landing page: Go to <b>/Table</b> or <b> /About</b>.
				</i>
			</p>
			<p className='mx-2 mb-0'>
        <span className='fas fa-asterisk fa-fw mx-1'></span>
        <i>
				External links to browse code or check deployed app on heroku/github-pages.
        </i>
			</p>
		</header>
	);
}

export default NavTabs;
