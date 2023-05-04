const getSize = document.querySelector(".getSize");
const sizeInfo = document.querySelector(".sizeInfo");

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

getSize.addEventListener("click", () => {
  sizeInfo.textContent = `Ширина экрана ${screenWidth}px / Высота ${screenHeight}px`;
});

const getGeoData = document.querySelector(".getGeoData");
const geoDataInfo = document.querySelector(".geoDataInfo");
const statusGet = document.querySelector(".statusGet");

const error = () => {
    statusGet.textContent = "Невозможно получить ваше местоположение";
};
// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  statusGet.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
  geoDataInfo.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  geoDataInfo.textContent = "Ссылка на карту";
};

getGeoData.addEventListener("click", () => {
  geoDataInfo.href = "";
  geoDataInfo.textContent = "";

  if (!navigator.geolocation) {
    statusGet.textContent = "Geolocation не поддерживается вашим браузером";
  } else {
    statusGet.textContent = "Определение местоположения…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
