//Chave da API - site: https://openweathermap.org
let key = "16eaeefda971224e6fb26104df839dd8";

//Alterando informações do HTML
function changeData(data) {
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(data.main.temp) + " °C";
  document.querySelector(".weather-description").innerHTML =
    data.weather[0].description;
  document.querySelector(".air-humidity").innerHTML =
    "Umidade do ar: " + data.main.humidity + "%";
  document.querySelector(".icon-temp").src =
    "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
}

async function searchCity(city) {
  const data = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      key +
      "&lang=pt_br" +
      "&units=metric"
  ).then((Response) => Response.json());

  //Enviando os dados obtidos para a função 'changeData'
  changeData(data);
}

function clickButton() {
  let city = document.querySelector(".input-city").value;

  //Enviando os dados obtidos para a função 'searchCity'
  searchCity(city);
}
