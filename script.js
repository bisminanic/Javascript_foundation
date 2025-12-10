const searchInput = document.getElementById("searchterm");
const searchBtn = document.getElementById("SearchBtn");

const apiKey = "a1079984a85c62c113e2bdc32ddc92a2";
var responseData;

async function checkWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  responseData = data;

  
  document.querySelector(".country").innerHTML = data.name;
  document.querySelector(".weatherCount").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "°%";
   document.querySelector(".kmph").innerHTML = data.wind.speed + "Kmph";
  console.log(data, "data");
}

searchBtn.addEventListener("click", function () {
  const city = searchInput.value.trim();

  if (city !== "") {
    checkWeather(city); 
  } else {
    console.log("Please enter a city");
  }
});


checkWeather("Bangalore");
