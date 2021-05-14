const helpers = {
  prep: ( json ) => {
    let res= [];
    ( json.results ).forEach( ( r, i ) => {
      // console.log(`r`, r)
      let row = {
				Country: r.location.country,
				Picture: r.picture.thumbnail,
				FirstName: r.name.first,
				LastName: r.name.last,
				Address: [
					r.location.street.number + ' ' + r.location.street.name,
					r.location.city,
					r.location.state,
					r.location.country,
					r.location.postcode
				].join(', '),
				Email: r.email,
				Age: r.dob.age,
				Cell: r.cell,
				Phone: r.phone
			};
      res.push( row );
      
      // console.log('---row---')
      // console.table(row)
    } )
    // console.table(res)
    return res;
	},
	headings: [
		'Country',
		'Picture',
		'FirstName',
		'LastName',
		'Address',
		'Email',
		'Age',
		'Cell',
		'Phone',
	],
};

export default helpers;
