function weatherNow(response) {
  let temp = document.querySelector(".today-temp");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.city}`;
  temp.innerHTML = `${response.data.temperature.current}ºF`;
}

function getQuery(event) {
  event.preventDefault();
  let apiKey = "f83bab9b2e05c12e02f13t5d42787o13";
  let units = "imperial";
  let city = document.querySelector("#city");
  let api = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}&units=${units}`;
  axios.get(api).then(weatherNow);
}

let form = document.querySelector("search");
form.addEventListener("submit", getQuery);
