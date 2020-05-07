const fetch = require('node-fetch');

fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "8bcf046954msh0305589e3cb3e62p1b7c9cjsn4cbe8de9c9b7"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});