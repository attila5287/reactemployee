import React from 'react';
import { Animated } from 'react-animated-css';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from '../table/TableHeader';
import TableBody from '../table/TableBody';
import helpers from '../../utils/helpers';
import sample from '../../seeds/sample';
import API from '../../utils/API';
import AppContext from '../../utils/AppContext';
import SearchForm from '../search/SearchForm';
import SearchResultList from '../search/SearchResultList';

function TableAuto () {
	// const [ data, setData ] = useState( helpers.prep( sample ) );
	const [search, setSearch] = useState('');
	const [data, setData] = useState([]);
	const [results, setResults] = useState([]);

	useEffect(() => {
		API.fetch(8)
			.then((res) => {
				setData(helpers.prep(res));
			})
			.catch((err) => console.log(err));
	}, []);

  const searchGiphy = (query) => {
		API.search(query)
			.then((res) => setResults(res.data.message))
			.catch((err) => console.log(err));
	};

	const handleInputChange = (event) => {
		const name = event.target.name;
    const value = event.target.value;
    console.log(`value`, value)
		setSearch(value);
	};

	// When the form is submitted, search the Giphy API for `this.state.search`
	const handleFormSubmit = (event) => {
		event.preventDefault();
		searchGiphy(search);
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
				handleFormSubmit={(d) => handleFormSubmit(d)}
				handleInputChange={(d) => handleInputChange(d)}
			/>
			<SearchResultList results={results} />
			<div className="container text-center">
				<Table responsive striped bordered hover variant="dark">
					<TableHeader headings={helpers.headings} />
					<TableBody rows={data} />
				</Table>
			</div>
		</div>
	);
}

export default TableAuto;
