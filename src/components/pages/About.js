import React from "react";
import {Animated} from 'react-animated-css';

  function About() {
    return (
			<div className="mini">
				<Animated
					animationIn="bounceInLeft"
					animationOut="fadeOut"
					isVisible={true}
				>
					<h1 className="bg-secondary p-0 rounded text-secondary text-center">
						<i className="fas fa-info-circle mx-2"></i>
						<i>About</i>
					</h1>
				</Animated>
				<div className="list-group rounded bg-transparent">
					<Animated
						animationIn="bounceInRight"
						animationInDelay={1000}
						isVisible={true}
					>
						<a className="list-group-item list-group-item-action flex-column align-items-start active rounded disabled">
							<div className="d-flex w-100 justify-content-between">
								<h4 className="mb-1">React</h4>
								<h1 className="fab fa-react mb-0"></h1>
							</div>
							<p className="my-0">
								<i>
									REACT for user interface, Axios for requests, Bootswatch for
									stylesheets, Font-Awesome for icons, Animate.css for
									animations
								</i>
							</p>
						</a>
					</Animated>
					<Animated
						animationIn="bounceInLeft"
						animationOut="fadeOut"
						isVisible={true}
						animationInDelay={2000}
					>
						<a
							href="/discover"
							className="list-group-item list-group-item-action flex-column align-items-start"
						>
							<div className="d-flex w-100 justify-content-between">
								<h3 className="mb-1 text-light">/Discover</h3>
								<h1 className="fas fa-compass mb-0"></h1>
							</div>
							<p className="mb-0 border-bottom border-light">
								This page displays a photo of a random dog retrieved from the Dog Ceo API https://dog.ceo/dog-api/(https://dog.ceo/dog-api/) This page contains those clickable buttons: one for passing or "thumbs-downing" a dog, and one for picking or "thumbs-upping" a
								dog. 
							</p>
							<small>
								<i>
									When either button is clicked, a new dog image is loaded from
									the API.
								</i>
							</small>
						</a>
					</Animated>
					<Animated
						animationIn="bounceInRight"
						animationOut="fadeOut"
						isVisible={true}
						animationInDelay={3000}
					>
						<a
							href="/search"
							className="list-group-item list-group-item-action flex-column align-items-start"
						>
							<div className="d-flex w-100 justify-content-between">
								<h3 className="mb-1 text-light">/Search</h3>
								<h1 className="fas fa-search mb-0"></h1>
							</div>
							<p className="mb-1">
								This page allows you to search the Dog Ceo API
								(https://dog.ceo/dog-api/) for all dogs by breed. After a search
								is made, a list of all of the results appears underneath.
							</p>
						</a>
					</Animated>
				</div>
				<a
					href="https://github.com/attila5287/"
					className="list-group-item list-group-item-action flex-column align-items-start"
				>
					<Animated
						animationIn="fadeIn"
						animationInDelay={4000}
						isVisible={true}
					>
						<div className="d-flex w-100 justify-content-between">
							<h6 className="mb-1 text-light">@attila5287</h6>
							<h4 className="fab fa-github mb-0"></h4>
						</div>
					</Animated>
				</a>
				<a
					href="attila5287.github.io/"
					className="list-group-item list-group-item-action flex-column align-items-start"
				>
					<Animated
						animationIn="fadeIn"
						animationInDelay={5000}
						isVisible={true}
					>
						<div className="d-flex w-100 justify-content-between">
							<h6 className="mb-1 text-light">Developer</h6>
							<img
								src="https://raw.githubusercontent.com/attila5287/img_readme/main/all/dev.jpg"
								alt="dev-img"
								className="rounded"
							/>
						</div>
					</Animated>
				</a>
			</div>
		);
  }

export default About;
