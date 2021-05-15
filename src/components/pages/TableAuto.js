import React from 'react';
import {Animated} from 'react-animated-css';
import {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import TableHeader from '../table/TableHeader';
import TableBody from '../table/TableBody';
import helpers from '../../utils/helpers';
// import sample from '../../seeds/sample';
import API from '../../utils/API';
import SearchFullName from '../search/SearchFullName';
import SearchAddress from '../search/SearchAddress';
import SearchCountry from '../search/SearchCountry';

function TableAuto() {
  // const [ rows, setRows ] = useState( helpers.prep( sample ) );
  const [search,
    setSearch] = useState({FullName: '', Address: '', Country: ''});
  const [rows,
    setRows] = useState([]);

  useEffect(() => {
    API
      .fetch(8)
      .then((res) => {
        setRows(helpers.prep(res));
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleInputChange = (event) => {
    const name = event.target.name;
    // console.log( `>> name`, name );

    const value = event.target.value;
    console.log(`>> value`, value);

    search[name] = value;
    console.log(`search`, search)

    setSearch(search);
    setRows(rows.filter((row) => row[name].toLowerCase().includes(value.toLowerCase())));
  };

  return (
		<div>
			<div className="mini">
				<div className="row align-items-center no-gutters">
					<div className="col-2 align-items-center text-center">
						<Animated
							animationIn="bounceInLeft"
							isVisible={true}
							animationInDelay={750}
						>
							<button
								className="btn btn-info bg-info disabled shadow-lg"
								type="button"
							>
								<i className="text-secondary fas fa-filter text-4xl"></i>
							</button>
							<br />
							<p className="text-lg mb-0">
								<b> Filter By </b>
							</p>
						</Animated>
					</div>
					<div className="col-1 align-items-center text-left">
						<Animated
							animationIn="bounceInDown"
							animationInDelay={500}
							isVisible={true}
						>
							<i className="align-middle text-4xl fas fa-sitemap fa-rotate-270 opac-50"></i>
						</Animated>
					</div>
					<div className="col-7">
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
					</div>
				</div>
			</div>
			<div className="container text-center m-0">
				<Table responsive small striped bordered hover variant="dark" className="m-0">
					<TableHeader headings={helpers.headings} icons={helpers.headIcons} />
					<TableBody rows={rows} />
				</Table>
			</div>
		</div>
	);
}

export default TableAuto;
