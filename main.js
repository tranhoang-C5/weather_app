const searchText = document.querySelector(".weather-box input");
const container = document.querySelector(".weather-container");
const host = "http://api.openweathermap.org/data/2.5/weather?q=";
const APIKey = "&APPID=77654e28a96c33ff992c050f3bfef1f1";

searchText.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    // let time = new Date();
    // var date = date.getDate;
    // let day = date.getDay;
    // let month = date.getMonth;
    // let year = date.getFullYear;

    // console.log(date, day, month, year);

    fetch(`${host + searchText.value + APIKey}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        let temp = Math.round(res.main.temp - 273);
        document.querySelector(".weather").textContent = res.weather[0].main;
        document.querySelector(".temp").textContent = `${Math.round(
          res.main.temp - 273
        )}°c`;
        document.querySelector(".city").textContent =
          res.name + ", " + res.sys.country;

        if (temp <= 0) {
          container.style.backgroundImage = `linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.52),
                rgba(0, 0, 0, 0.73)
              ),
              url("./snow.jpg")`;
        }
        if (temp > 0) {
          container.style.backgroundImage = `linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.52),
                rgba(0, 0, 0, 0.73)
              ),
              url("./sun_light_dazzle_expensive_country_fence_53964_1600x900.jpg")`;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
});
