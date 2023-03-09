const displayWeatherForecast = (city) => {
  const weatherForecastContainer = document.querySelector(".weather-forecast");

  const endpoint = getForecastEndpoint(city);
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;

      const daysMap = {};

      list.forEach((element) => {
        const { dt } = element;

        const day = getDayOfTheWeek(dt);

        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          daysMap[day] = [element];
        }
      });
      console.log(daysMap);
      weatherForecastContainer.innerHTML = "";

      for (key in daysMap) {
        weatherForecastContainer.innerHTML += /*html*/ `<h3 class="text-primary">${key}</h3>`;

        daysMap[key].forEach((element) => {
          const { dt, weather, main } = element;

          const day = getDayOfTheWeek(dt);
          const hour = getHour(dt);
          const temperature = Math.round(main.temp);
          const icon = getWeatherIcon(weather[0].icon);
          const realFeel = Math.round(main.feels_like);
          const description = weather[0].description;

          weatherForecastContainer.innerHTML += /*html*/ `
          <div class="weather-forecast-box d-flex align-items-center border rounded p-3 mb-3">
              <div>${hour}</div>
              <div>
               <img src="${icon}" />
              </div>
              <div class="fs-3"><strong>${temperature}°C</strong></div>
              <div>${description}</div>
              <div class="real-feel"><strong>Real feel: ${realFeel}°C</strong></div>
          </div>
      `;
        });
      }
    });
};
