const helpers = {
  prep: ( json ) => {
    let res= [];
    ( json.data.results ).forEach( ( r, i ) => {
      // console.log(`r`, r)
      let row = {
				Picture: r.picture.thumbnail,
				FullName: r.name.first + ' '  + r.name.last,
				Address: [
					r.location.street.number + ' ' + r.location.street.name,
					r.location.city,
					r.location.state,
					r.location.postcode
				].join(', '),
				Country: r.location.country,
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
    'Picture',
		'FullName',
		'Address',
		'Country',
		'Email',
		'Age',
		'Cell',
		'Phone',
	],
};

export default helpers;
