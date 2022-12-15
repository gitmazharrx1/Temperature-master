const API_KEY = `46184483d0422ac2b5109646e5579d0d`;

const button = () => {
  const citys = document.getElementById("inputtext");
  const city = citys.value;
  citys.value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => output(data));
};

const output = (data) => {
  const city = document.getElementById("cityName");
  city.innerText = `${data.name}`;
  const weather = document.getElementById("weather");

  const temprature = document.getElementById("temp");

  weather.innerText = `${data.weather[0].main}`;
  temprature.innerText = `${data.main.temp}`;

  const icon = document.getElementById("icon");
  const iconurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.setAttribute("src", iconurl);
  console.log(iconurl);
};
