import React from 'react';
import { Animated } from 'react-animated-css';

function SearchForm(props) {
	return (
		<Animated
			animationIn="bounceInLeft"
			animationInDelay={500}
			isVisible={true}
		>
			<form>
				<div className="mini form-group rounded p-1 mb-2">
					<p className="text-left text-light">
						<i className="fas fa-search-plus"></i>
						Search dog images by breed{' '}
					</p>
					<input
						onChange={props.handleInputChange}
						value={props.search}
						name="search"
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

export default SearchForm;
