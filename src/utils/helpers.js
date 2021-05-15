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
  headIcons: {
    'Picture' : 'fas fa-image text-3xl',
    'FullName' : 'fas fa-id-card text-3xl',
    'Address' : 'fas fa-map-marked-alt text-3xl',
    'Country' : 'fas fa-flag text-3xl',
    'Email' : 'fas fa-envelope text-3xl',
    'Age' : 'fas fa-birthday-cake text-3xl',
    'Cell' : 'fas fa-mobile-alt text-3xl',
    'Phone' : 'fas fa-phone text-3xl',
    
  }
};

export default helpers;
