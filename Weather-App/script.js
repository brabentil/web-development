const container = document.querySelector(".container");
const searchBtn = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
const API_KEY = "fed972573a58f399699a7e460c288fff";

searchBtn.addEventListener("click", async () => {
  const city = document.querySelector(".search-box input").value.trim();
  if (!city) return;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();

    console.log("API response data:", data);

    if (data.cod === "404") {
      container.style.height = "400px";
      weatherBox.style.display = "none";
      weatherDetails.style.display = "none";
      error404.style.display = "block";
      error404.classList.add("fadeIn");
      return;
    }

    error404.style.display = "none";
    error404.classList.remove("fadeIn");

    const { name, weather, main, wind, visibility, sys } = data;
    const image = document.querySelector(".weather-box img");
    const temperature = document.querySelector(".weather-box .temperature");
    const description = document.querySelector(".weather-box .description");
    const humidity = document.querySelector(".weather-details .humidity span");
    const windSpeed = document.querySelector(".weather-details .wind span");
    const visibilitySpan = document.querySelector(".weather-details .visibility span");
    const pressure = document.querySelector(".weather-details .pressure span");
    const sunrise = document.querySelector(".weather-details .sunrise span");
    const sunset = document.querySelector(".weather-details .sunset span");
    const cityName = document.querySelector(".weather-details .city-name");

    cityName.textContent = name;
    image.src = getWeatherIconSrc(weather[0].main);
    console.log("Image source:", image.src);
    temperature.innerHTML = `${Math.round(main.temp)}<span>°C</span>`;
    description.textContent = weather[0].description;
    humidity.textContent = `${main.humidity}%`;
    windSpeed.textContent = `${Math.round(wind.speed)}Km/h`;
    visibilitySpan.textContent = `${visibility / 1000}Km`;
    pressure.textContent = `${main.pressure}hPa`;
    sunrise.textContent = new Date(sys.sunrise * 1000).toLocaleTimeString();
    sunset.textContent = new Date(sys.sunset * 1000).toLocaleTimeString();

    console.log("Temperature:", temperature.innerHTML);
    console.log("Description:", description.textContent);

    weatherBox.style.display = "block"; 
    weatherDetails.style.display = "flex"; 
    weatherBox.classList.add("fadeIn");
    weatherDetails.classList.add("fadeIn");
    container.style.height = "680px"; 
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

function getWeatherIconSrc(weatherMain) {
  switch (weatherMain) {
    case "Clear":
      return "images/clear.png";
    case "Rain":
      return "images/rain.png";
    case "Snow":
      return "images/snow.png";
    case "Clouds":
      return "images/cloud.png";
    case "Haze":
      return "images/mist.png";
    default:
      return "";
  }
}
