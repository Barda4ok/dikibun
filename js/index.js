weather.addEventListener("click", function (e) {
    // fetch API
    fetch('https://api.chucknorris.io/jokes/random')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        weathersearch.innerHTML = json.value;
    })
    .catch(function(err) {
        console.log(err);
    });
    // end of fetch API
    e.stopPropagation();
}, true);
