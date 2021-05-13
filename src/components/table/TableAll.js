import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import helpers from '../../utils/helpers';
import sample from '../../seeds/sample';
import API from '../../utils/API';

function TableAll() {
	const [data, setData] = useState(helpers.prep(sample));

	fetch = (size) => {
		API.search(size)
			.then((res) => setData(helpers.prep(res)))
			.catch((err) => console.log(err));
	};
	console.log(data);
	return (
		<div className="container text-center">
			<Table responsive striped hover variant="dark">
				<TableHeader headings={helpers.headings} />
				<TableBody rows={helpers.prep(sample)} />
			</Table>
		</div>
	);
}

export default TableAll;
