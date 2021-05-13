const helpers = {
  prep: ( json ) => {
    let res= [];
    ( json.results ).forEach( ( r, i ) => {
      // console.log(`r`, r)
      let row = {
				Picture: r.picture.thumbnail,
				FullName: Object.keys(r.name)
					.map((k) => r.name[k])
					.join(' '),
				Gender: r.gender,
        Address: [
          r.location.street.number
          +' ' +r.location.street.name,
          r.location.city,
          r.location.state,
          r.location.country,
          r.location.postcode,
        ].join( ', ' ),
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
		'Gender',
		'Address',
		'Email',
		'Age',
		'Cell',
		'Phone',
	],
};

export default helpers;
