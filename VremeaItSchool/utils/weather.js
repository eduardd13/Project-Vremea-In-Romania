const windToKmPerHour = (speedMeterPerSecond) => {
  return (speedMeterPerSecond * 3600) / 1000;
};

const getWeatherIcon = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};


