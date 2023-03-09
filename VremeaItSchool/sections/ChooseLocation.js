const cities = document.querySelectorAll(".dropdown-menu li button");
const currentCityContainer = document.querySelector(".current-city");

const handleCityClick = (city) => {
  currentCityContainer.innerText = city;
  displayCurrentWeather(city);
  displayWeatherForecast(city);
  localStorage.setItem("city", city);
};

cities.forEach((city) => {
  city.addEventListener("click", () => {
    handleCityClick(city.innerText);
  });
});
