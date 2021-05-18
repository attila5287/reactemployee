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
					<a href='https://reactmanager.herokuapp.com'>
						<span className='text-light bg-info py-0 px-1 rounded-lg'>
							<b>h</b>
            </span>
					</a>
				</li>
				<li className='nav-item nav-link disabled align-items-center'>
					<i className='fab fa-github mx-1'></i>
					<span className='text-sm'>attila5287</span>
				</li>
			</ul>
			<p className='mx-2 mb-0'>
				<span className='fas fa-exclamation-triangle text-info mx-1'></span>
				<i>
					Blank landing page: Use links above for <b>Table</b> or <b> About</b>.
				</i>
			</p>
			<p className='mx-2 mb-0'>
				<span className='fas fa-angle-right'></span>
				Check out heroku{' '}
				<a href='https://reactmanager.herokuapp.com'>
					<span className='text-light bg-info py-0 px-1 rounded-lg'>
						<b>h</b>
					</span>{' '}
					reactmanager
				</a>{' '}
				version.
			</p>
		</header>
	);
}

export default NavTabs;
