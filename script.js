// api key = b093c629e348c4ebc81caa5c77847e90
const APIKey = '4b95c685f1562c4add191dadc0d69d6c';

const results = document.querySelector('.city-results');
const cityName = document.getElementById('searchButton');

function getWeather () {


}
function getApi (cityName) {
  
  const requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid='+ APIKey
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        results.append(listItem);

      }
    })
}

function handleSubmit () {



}

function fiveDay() {


}




searchButton.addEventListener('click', getApi);
