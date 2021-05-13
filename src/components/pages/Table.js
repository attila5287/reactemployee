import React from 'react';
import { Animated } from 'react-animated-css';
import TableAll from '../table/TableAll';

function Table () {
	return (
		<div>
			<Animated
				animationIn="lightSpeedIn"
				isVisible={true}
				className="mini mt-3"
			>
				<h1 className=""> Table</h1>
			</Animated>

			<TableAll />
		</div>
	);
}

export default Table;
