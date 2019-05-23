/*

* @Created By:Shudarshan Rai
  * @On Date: 19th January 2019, 8:32 AM
  * @copyright 2019 shudarshan Rai
*/
window.onload=function(){

     document.getElementById("selectCity").value =  country_name[Math.floor(Math.random()*country_name.length)];;
}
var date=new Date();
  
   var days = [
   "Sunday",
    "Monday",
     "Tuesday",
      "Wednesday",
       "Thursday",
        "Friday",
         "Saturday"
         ];

var country_name = [
 
  "France",
   "United States",
    "India",
     "China",
      "Madrid",
       "Italy",
        "Turkey",
         "London",
          "Germany",
           "Kathmandu",
             "Russian Federation",
              "Malaysia"
];

    function t(){
     
      var city=$("#selectCity").val();
       var cTemp ;

var apicall="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=af50bbd7309f973b6a2318253e78ad20";
 $.getJSON(apicall,weatherCallback);

    function weatherCallback(weatherData) {
     var icn= weatherData.weather[0].icon;
      var  temp=weatherData.main.temp;
       var country=weatherData.name;
        var des=weatherData.weather[0].description;
         var humidity=weatherData.main.humidity;
          var wind=weatherData.wind.speed;
           var iconurl = "https://openweathermap.org/img/w/" + icn + ".png";
  
      $('#wicon').attr('src', iconurl);
       $("#countryName").html(country)
        $("#weatherMessage").html(des)
         $("#currentWeather").html(temp+"°C")
          $("#humidity").html("Humidity:"+humidity+"%")
           $("#wind").html("Wind:"+wind+"km/h") 
            $("#today").html(days[date.getDay()]+"-");
             $("#time").html(date.getHours()+":"+date.getMinutes()+"-")
     
     
      $("#gmap").attr('src',"https://maps.google.com/maps?q="+city+"&t=&z=13&ie=UTF8&iwloc=&output=embed")
        }

 }


