const displayCurrentWeather = (city) => {
  const endpoint = getCurrentWeatherEndpoint(city);

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const { name, dt, main, weather, wind } = data;

      const day = getDayOfTheWeek(dt);
      const hour = getHour(dt);
      const temperature = Math.round(main.temp);
      const icon = getWeatherIcon(weather[0].icon);
      const realFeel = Math.round(main.feels_like);
      const windSpeed = Math.round(windToKmPerHour(wind.speed));
      const description = weather[0].description;
      const currentWeatherContainer =
        document.querySelector(".current-weather");

      currentWeatherContainer.innerHTML = /*html*/ `
  <div class="px-3">
    <div class="fs-2 mb-2"><strong>${name}</strong></div>
    <div class="fs-4">
      <strong>${day}</strong>, ${hour}
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <strong class="fs-1">${temperature}°C
      <img src="${icon}"/>
      </strong>
      <img src="" />
    </div>
  </div>
  <div class="px-3">
    <p class="fs-5">
      Real feel:
      <strong>${realFeel}</strong>
    </p>
    <p class="fs-5 text-capitalize">${description}</p>
    <p class="fs-5">
      Vânt:
      <strong>${windSpeed} Km/h</strong>
    </p>
  </div>
        `;
    });
};
