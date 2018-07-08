// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
var request = require('request');

// Grab or assemble the movie name and store it in a variable called "movieName"
process.argv.shift()  // skip node.exe
process.argv.shift()  // skip name of js file

var movieName = (process.argv.join(" "))


// var movieName = process.argv[2];
// ...

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

request(queryUrl, (error, response, data) => {


// This line is just to help us debug against the actual URL.
// console.log(data);


// Then create a request to the queryUrl
// ...

// If the request is successful
// ...
if (!error && response.statusCode === 200) {
  // console.log(data);
}
// Then log the Release Year for the movie
// ...
console.log("The movie rating is: " , JSON.parse(data).imdbRating);


});
