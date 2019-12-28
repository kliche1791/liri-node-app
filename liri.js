require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require('moment');


var call = process.argv[2];
var  action	= process.argv.slice(3).join(" ");
var urlBand = "https://rest.bandsintown.com/artists/"+action+"/events?app_id=codingbootcamp";
var urlMovie = " http://www.omdbapi.com/?t="+action+"&apikey=trilogy";
if (call === "concert-this"){
    axios.get(urlBand).then(
        function(response) {
          
         // console.log(response.data[0]);
         for (var i = 0; i < response.data.length; i++) {
            var date =   moment(response.data[i].datetime).format('MMMM Do YYYY, h:mm:ss a');
          console.log(date);
          console.log(response.data[i].venue.name);
         console.log(response.data[i].venue.city +" "+response.data[i].venue.region);
         console.log("-----------------------------------------------------------------------");
         }
        },
      
        function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        }
      );
}

if(call === "movie-this"){
    axios.get(urlMovie).then(
        function(response) {

          // If the axios was successful...
          // Then log the body from the site!
          console.log(response.data.Title);
          console.log(response.data.Year);
          console.log(response.data.Title);
          console.log(response.data.Title);
          console.log(response.data.Title);
          console.log(response.data.Title);
          console.log(response.data.Title);
          console.log(response.data.Title);
          console.log("-----------------------------------------------------------------------");
          
        },
      
        function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        }
      );
}

if(call=== "spotify-this-song"){
    spotify.search({ type: 'track', query: action }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
}