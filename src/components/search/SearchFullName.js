import React from 'react';
import { Animated } from 'react-animated-css';

function SearchFullName(props) {
	return (
		<Animated
			animationIn="bounceInLeft"
			animationInDelay={500}
			isVisible={true}
			className="mini"
		>
			<form className="row align-items-center">
				<div className="form-group col-3 rounded p-1 mb-2">
					<p className="text-left">
						<i className="fas fa-id-card text-xl mx-1"></i>
						Search by full name
					</p>
				</div>
				<div className="form-group col-9 rounded p-1 mb-2">
					<input
						onChange={props.handleInputChange}
						value={props.search['FullName']}
						name="FullName"
						type="text"
						className="form-control shadow-lg"
						placeholder="Type here, default puggle"
						id="search"
					/>
				</div>
			</form>
		</Animated>
	);
}

export default SearchFullName;
