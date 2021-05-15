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
			<form className="row align-items-center">
				<div className="form-group col-3 rounded p-1 mb-2">
					<p className="text-left">
						<i className="fas fa-map-marked-alt text-xl mx-1"></i>
						Search by address
					</p>
				</div>
				<div className="form-group col-9 rounded p-1 mb-2">
					<input
						onChange={props.handleInputChange}
						value={props.search['Address']}
						name="Address"
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

export default SearchAddress;
