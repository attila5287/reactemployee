import React from 'react';
import { Animated } from 'react-animated-css';

function SearchAddress(props) {
	return (
		<Animated
			animationIn="bounceInRight"
			animationInDelay={1000}
			isVisible={true}
			className="mini"
		>
			<form className="row align-items-start">
				<div className="form-group col-2">
					<h1 className="fas fa-map-marked-alt fa-pull-right"></h1>
				</div>
				<div className="form-group col rounded p-1 mb-2">
					<input
						onChange={props.handleInputChange}
						value={props.search['Address']}
						name="Address"
						type="text"
						className="form-control form-control-lg py-1"
						placeholder="by address"
					/>
				</div>
			</form>
		</Animated>
	);
}

export default SearchAddress;
