import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for the passed query
const API = {
	fetch: async function ( size ) {
		const res = await axios.get(
			'https://randomuser.me/api/?results=' + size
		);
		console.log( `res table`, res );
    return res;
  }, 
};

export default API;
