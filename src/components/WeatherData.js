const API_KEY = "f277831781ebdd343e095c387efd387d";

const makeIconURL = iconId => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    const {
      weather,
      main: { temp, feels_like, humidity, pressure },
      wind: { speed },
      sys: { country},
      name,
      dt,
    } = data;

    const { description, icon, main } = weather[0];

    return {
      description,
      iconURL: makeIconURL(icon),
      icon,
      main,
      temp,
      feels_like,
      humidity,
      pressure,
      speed,
      country,
      name,
      dt,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getFormattedWeatherData };
