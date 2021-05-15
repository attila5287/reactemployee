import React from 'react';
import { Animated } from 'react-animated-css';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from '../table/TableHeader';
import TableBody from '../table/TableBody';
import helpers from '../../utils/helpers';
// import sample from '../../seeds/sample';
import API from '../../utils/API';
import SearchFullName from '../search/SearchFullName';
import SearchAddress from '../search/SearchAddress';
import SearchCountry from '../search/SearchCountry';

function TableAuto () {
	// const [ rows, setRows ] = useState( helpers.prep( sample ) );
  const [ search, setSearch ] = useState( {
    FullName : '',
    Address : '',
    Country : '',
  });
	const [rows, setRows] = useState([]);

	useEffect(() => {
		API.fetch(8)
			.then((res) => {
				setRows(helpers.prep(res));
			})
			.catch((err) => console.log(err));
	}, [search]);


	const handleInputChange = (event) => {
    const name = event.target.name;
    // console.log( `>> name`, name );
    
    const value = event.target.value;
    console.log( `>> value`, value );
    
    search[name] = value;
    console.log( `search`, search )
    
    setSearch( search );
    setRows(
			rows.filter((row) =>
				row[name].toLowerCase().includes(value.toLowerCase())
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
			<SearchFullName
				search={search['FullName']}
				handleInputChange={(d) => handleInputChange(d)}
			/>
			<SearchAddress
				search={search['Address']}
				handleInputChange={(d) => handleInputChange(d)}
			/>
			<SearchCountry
				search={search['Country']}
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
