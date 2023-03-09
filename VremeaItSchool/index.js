const currentCityTag = document.querySelector(".current-city");

let currentCity = localStorage.getItem("city");

if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
