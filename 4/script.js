const btn = document.querySelector('.j-btn');
const output = document.querySelector('.output');

function getGeoData (){
 navigator.geolocation.getCurrentPosition(success, error);
};

const error = () => {
  statusGet.textContent = "Невозможно получить ваше местоположение";
};

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
   fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`)
   .then(response => {
     console.log('RESPONCE' ,response);
     return response.json();
    })
  .then(data => {
        writeOutput(formatOutput(data));
      })
 };

 
  function formatOutput(data) {
    let output = `
      <p>Вы находитесь в ${data.timezone}</p>
      <p>Ваше время ${data.date_time_txt}</p>
      `
    return output;
  }
  function writeOutput(message) {
    output.innerHTML = message;
  }

btn.addEventListener('click', () => {
 getGeoData ();
 });


