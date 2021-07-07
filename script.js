function getApi () {
    var requestUrl = ''

        fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        console.log(data);
  // TODO: Loop through the response
        for (var i = 0; i < requestUrl.length; i + 1)
    
  // TODO: Console log each issue's URL and each user's login
        console.log(requestUrl[i].user)
});

}

