// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const nytAPI = "f43a794c52e143d8adacce98a34edcd4";

// Helper functions (in this case the only one is runQuery)
const helpers = {

  runQuery: ( topic, start, end ) => {

    console.log( topic, start, end);

    // Figure out the geolocation
    var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${nytAPI}&q=${topic}&begin_date=${start}0101&end_date=${end}1231`;

    return axios.get(queryURL).then((results) => {
      console.log(results.data.response.docs);
      return results.data.response.docs;
    });
  },

  getSaved: () => {
  	return axios.get("/api/saved");
  },

  postSaved: ( title, url ) => {
  	return axios.post("/api/saved", {title: title, url: url});
  }
};

// We export the helpers object (which contains runQuery)
export default helpers;
