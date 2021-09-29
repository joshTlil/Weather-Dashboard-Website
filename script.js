var APIKey = "0f272bc818897878df309b4b56d1f500";
var userInput;
var city;
var submit = document.getElementById('submit')
cityAtlUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=0f272bc818897878df309b4b56d1f500"
var wind = document.getElementById('mph');



fetch(cityAtlUrl)
.then(function(response){
    return response.json();

})
.then(function (data){
    console.log(data);

 for (var i = 0; i < data.length; i++) {
     var windSpeed = document.createElement('h3');
     windSpeed.textContent = data[i].wind;
     windSpeed.append(wind);

 }
})

console.log(wind);
console.log(windSpeed);