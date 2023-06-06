// 2개의 argument가 필요
// (성공했을 때 함수, 실패했을 때 함수)

const API_KEY = "f5f9cf66b32bbc7a344a0a7e74627a47";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}  / ${data.main.temp}`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("현재 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
