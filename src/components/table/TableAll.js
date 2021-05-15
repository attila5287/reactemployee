import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import helpers from '../../utils/helpers';
import sample from '../../seeds/sample';
import API from '../../utils/API';

function TableAll() {
  // const [ data, setData ] = useState( helpers.prep( sample ) );
  const [ data, setData ] = useState( [] );
  
  useEffect(() => {
		API.fetch(20)
			.then((res) => {
        setData(helpers.prep(res));
			})
			.catch((err) => console.log(err));
	}, []);


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
