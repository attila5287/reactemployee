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
					<h4 className="fas fa-map-marked-alt fa-pull-right"></h4>
				</div>
				<div className="form-group col rounded">
					<input
						onChange={props.handleInputChange}
						onSubmit={props.handleSubmit}
						value={props.search['Address']}
						name="Address"
						type="text"
						className="form-control form-control-sm"
						placeholder="by address"
					/>
				</div>
			</form>
		</Animated>
	);
}

export default SearchAddress;
