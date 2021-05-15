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
  const [initial,
    setInitial ] = useState( [] );
  
  
  const [sorted,
    setSorted ] = useState( false );
  
  
  useEffect(() => {
    API
      .fetch(10)
      .then( ( res ) => {
        console.log( `res`, res )
        const org = helpers.prep(res);
        setRows( org );
        console.log( `org.length`, org.length )
        console.log( `rows.length`, rows.length )
        if (org.length===10) {
          setInitial( org );
          console.log( `>> ---org`, org );
          console.log( `>> ---initial`, initial );
          if ( initial.length<1 && org.length ===10) {
            setInitial( org );
            console.log( `>> ---initial`, initial );
            
          }

        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSortBy = ( event ) => {
    const sortField = event.target.dataset.sortby;
    console.log(`>> sort by `, sortField);
    const sortedRows = rows.sort((a, b) => {
			if (b[sortField] > a[sortField]) {
				return -1;
			}
			if (a[sortField] > b[sortField]) {
				return 1;
			}
			return 0;
		});
    console.log(`sorted`, sortedRows);
    if (sorted) {
      setRows( sortedRows )
      setSorted( false )
    } else
    setRows( sortedRows )
    setSorted( true )
    {
      
    }

  };
  
  const handleInputChange = (event) => {
    const name = event.target.name;
    // console.log( `>> name`, name );

    const value = event.target.value.trim();
    console.log(`>> value`, value);

    setSearch(search);
    search[name] = value;
    console.log(`search`, search)
    const filtered = rows.filter((row) =>
			row[name].toLowerCase().includes(value.toLowerCase())
		);
    setRows( filtered );
    console.log( `filtered.length`, filtered.length );
    if ( Object.keys( search ).map( k => search[ k ] ).join( '' ) === '' )
    {
      console.log(`search`, search)
      setRows( [] );
      setRows( initial );

    }
    
  };

  return (
		<div>
			<div className="mini">
				<div className="row align-items-center">
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
					<div className="col-7 offset-1">
						<SearchFullName
							search={search['FullName']}
							handleInputChange={(event) => handleInputChange(event)}
						/>
						<SearchAddress
							search={search['Address']}
							handleInputChange={(event) => handleInputChange(event)}
						/>
						<SearchCountry
							search={search['Country']}
							handleInputChange={(event) => handleInputChange(event)}
						/>
					</div>
				</div>
			</div>
			<div className="container text-center m-0">
				<Table responsive striped bordered hover variant="dark" className="m-0">
					<TableHeader
						headings={helpers.headings}
						icons={helpers.headIcons}
						handleSortBy={(event) => handleSortBy(event)}
					/>
					<TableBody rows={rows} />
				</Table>
			</div>
		</div>
	);
}

export default TableAuto;
