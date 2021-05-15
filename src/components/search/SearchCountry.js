import React from 'react';
import { Animated } from 'react-animated-css';

function SearchCountry(props) {
	return (
		<Animated
			animationIn="bounceInRight"
			animationInDelay={1500}
			isVisible={true}
			className="mini"
		>
			<form className="row align-items-start">
				<div className="form-group col-2">
					<h1 className="fas fa-flag fa-pull-right"></h1>
				</div>
				<div className="form-group col rounded p-1 mb-2">
					<input
						onChange={props.handleInputChange}
						value={props.search['Country']}
						name="Country"
						type="text"
						className="form-control form-control-lg py-1"
						placeholder="by country"
					/>
				</div>
			</form>
		</Animated>
	);
}

export default SearchCountry;
