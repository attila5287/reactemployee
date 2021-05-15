import React from 'react';
import { Animated } from 'react-animated-css';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from '../table/TableHeader';
import TableBody from '../table/TableBody';
import helpers from '../../utils/helpers';
// import sample from '../../seeds/sample';
import API from '../../utils/API';
import SearchForm from '../search/SearchForm';

function TableAuto () {
	// const [ rows, setRows ] = useState( helpers.prep( sample ) );
	const [search, setSearch] = useState('');
	const [rows, setRows] = useState([]);
	const [results, setResults] = useState([]);

	useEffect(() => {
		API.fetch(8)
			.then((res) => {
				setRows(helpers.prep(res));
			})
			.catch((err) => console.log(err));
	}, []);


	const handleInputChange = (event) => {
		const name = event.target.name;
    const value = event.target.value;
    console.log(`value`, value)
    setSearch( value );
    setRows(
			rows.filter((row) =>
				row.FullName.toLowerCase().includes(value.toLowerCase())
			)
		);
	};

  return (
		<div>
			<Animated
				animationIn="lightSpeedIn"
				isVisible={true}
				className="mini mt-3"
			>
				<h1 className=""> Table</h1>
			</Animated>
			<SearchForm
				search={search}
				handleInputChange={(d) => handleInputChange(d)}
			/>
			<div className="container text-center">
				<Table responsive striped bordered hover variant="dark">
					<TableHeader headings={helpers.headings} />
					<TableBody rows={rows} />
				</Table>
			</div>
		</div>
	);
}

export default TableAuto;
