const request = require('request');
const breed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (!error) {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("We couldn't find that Breed of cat!");
    } else if (data[0] !== undefined) {
      console.log(data[0].name);
      console.log(data[0].description);
    }
  }
});