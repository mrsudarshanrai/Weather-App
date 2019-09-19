/*

* @Created By:Shudarshan Rai
  * @On Date: 19th January 2019, 8:32 AM
  * @copyright 2019 shudarshan Rai
*/
const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

var country_name = [

  "Kathmandu",
  "Pokhara",
  "Delhi",
  "Mumbai",
  "Janakpr",
  "Washington",
  "Gorkha",
  "Hetauda",
  "Kolkata",
  "Chennai",
  "Jaipur",
];

const cityName = country_name[Math.floor(Math.random() * country_name.length)];

$('#selectCity').val(cityName);

$('.search').click(() => {
  const city = $("#selectCity").val();

  //openweathermap API and key
  //Please use your own API ,if your are working with this project 
  //This API is subscribed by SHUDARSHAN #author of this project
  var apicall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=af50bbd7309f973b6a2318253e78ad20";
  //API callback 
  $.getJSON(apicall, weatherCallback);

  function weatherCallback(weatherData) {
    //weather ICON
    const WeatherIcon = weatherData.weather[0].icon;
    //Tempature in Celsius
    const temp = weatherData.main.temp;
    //Country
    const country = weatherData.sys.country;
    //Weather discription
    const des = weatherData.weather[0].description;
    //humidity
    const humidity = weatherData.main.humidity;
    //Wind speed
    const wind = weatherData.wind.speed;
    //ICON url
    const iconurl = "https://openweathermap.org/img/w/" + WeatherIcon + ".png";

    $('.wicon').attr('src', iconurl)
    $(".countryName").text(country)
    $(".weatherMessage").text(des)
    $(".currentWeather").text(temp + "°C")
    $(".cityName").text(city);
    $(".humidity").text("Humidity:" + humidity + "%")
    $(".wind").text("Wind:" + wind + "km/h")
    $(".today").text(days[date.getDay()] + " ")
    $(".currenTime").text(date.getHours() + ":" + date.getMinutes() + " ")


    $("#gmap").attr('src', "https://maps.google.com/maps?q=" + city + "&t=&z=13&ie=UTF8&iwloc=&output=embed")
  }
});