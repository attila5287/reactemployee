import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import helpers from '../../utils/helpers';
import sample from '../../seeds/sample';
import API from '../../utils/API';

function TableAll() {
	const [data, setData] = useState(helpers.prep(sample));

	return (
		<div className="container text-center">
			<Table responsive striped bordered hover variant="dark">
				<TableHeader headings={helpers.headings} />
				<TableBody rows={data} />
			</Table>
		</div>
	);
}
export default TableAll;
