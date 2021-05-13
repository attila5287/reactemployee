import axios from "axios";

const BASEURL = "http://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
	search: async function ( query ) {
		const res = await axios.get('http://dog.ceo/api/breed/' + query + '/images');
		console.log( `res search`, res );
    return res;
  }, 
	random: async function () {
		const res = await axios.get('http://dog.ceo/api/breeds/image/random');
		console.log( `res random`, res );
    return [res.data.message];
  }
};
