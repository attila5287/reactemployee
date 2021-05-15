import React from "react";
import {Animated} from 'react-animated-css';

function About() {
  return (
		<div className="mini">
			<Animated
				animationIn="bounceInLeft"
				 isVisible={true}
			>
				<h1 className="bg-secondary p-0 rounded text-center">
					<i className="fas fa-info-circle mx-2"></i>
					About
				</h1>
			</Animated>
			<div className="list-group rounded-xl mx-5">
				<Animated
					animationIn="bounceInLeft"
					animationInDelay={0}
					isVisible={true}
					className="list-group-item list-group-item-action py-4 bg-info text-light flex-column align-items-start rounded-xl disabled"
				>
					<div className="row no-gutters">
						<div className="col-2">
							<h1 className="title text-light fab fa-react fa-spin my-0"></h1>
						</div>
						<div className="col-10">
							<p className="my-1">
								<i>
									REACT for user interface, Axios for requests, Bootswatch for
									stylesheets, Font-Awesome for icons, Animate.css for
									animations, a node.js app
								</i>
							</p>
						</div>
					</div>
				</Animated>

				<a
					href="/table"
					className="list-group-item list-group-item-action py-4 flex-column align-items-start"
				>
					<Animated
						animationIn="bounceInRight"
						isVisible={true}
						animationInDelay={500}
					>
						<div className="d-flex w-100 justify-content-between">
							<h3 className="mb-1">/Table</h3>
							<h1 className="fas fa-table mb-0"></h1>
						</div>
						<p className="mb-1">
							Given a table of employees( generated from the Random User API at
							https://randomuser.me/), when the user loads the page, a table of
							employees render. The user are able to: * Sort the table by at
							least one category * Filter the users by at least one property.
						</p>
					</Animated>
				</a>

				<a
					href="https://github.com/attila5287/reactemployee"
					className="list-group-item list-group-item-action py-4 bg-secondary text-info flex-column align-items-start px-4"
				>
					<Animated
						animationIn="bounceInLeft"
						isVisible={true}
						animationInDelay={1000}
					>
						<div className="d-flex w-100 justify-content-between">
							<h5 className="text-info mb-1">Github Repo</h5>
							<h3 className="text-info fab fa-github mb-0"></h3>
						</div>
						<p className="mb-1">Browse code on github website</p>
					</Animated>
				</a>
				<a
					href="https://attila5287.github.io/"
					className="list-group-item list-group-item-action py-4 bg-secondary text-info flex-column align-items-start px-4"
				>
					<Animated
						animationIn="bounceInRight"
						isVisible={true}
						animationInDelay={1500}
					>
						<div className="d-flex w-100 justify-content-between">
							<h5 className="text-info mb-1">By Developer</h5>
							<h3 className="text-info fas fa-id-card-alt mb-0"></h3>
						</div>
						<p className="mb-1">Check out other apps by developer</p>
					</Animated>
				</a>
			</div>
		</div>
	);
}

export default About;
