import React from 'react';
import { Animated } from 'react-animated-css';

function SearchFullName(props) {
	return (
		<Animated
			animationIn="bounceInRight"
			animationInDelay={500}
			isVisible={true}
			className="mini"
		>
			<form className="row align-items-start">
				<div className="form-group col-2">
					<h1 className="fas fa-id-card fa-pull-right"></h1>
				</div>
				<div className="form-group col rounded p-1 mb-2">
					<input
						onChange={props.handleInputChange}
						value={props.search['FullName']}
						name="FullName"
						type="text"
						className="form-control form-control-lg py-1"
						placeholder="by full name"
					/>
				</div>
			</form>
		</Animated>
	);
}

export default SearchFullName;
