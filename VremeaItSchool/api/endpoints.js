const API_KEY = "191fe8419cf30147031ad0bcee847020";

const BASE_API_URL = "https://api.openweathermap.org/data/2.5";

const getCurrentWeatherEndpoint = (city) => {
  return `${BASE_API_URL}/weather?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
};

const getForecastEndpoint = (city) => {
  return `${BASE_API_URL}/forecast?q=${city}&appid=${API_KEY}&lang=ro&units=metric`;
};
