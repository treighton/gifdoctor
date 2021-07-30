var usersContainer = document.getElementById("users");
var fetchButton = document.getElementById("fetch-button");

// This script looks legit

function getgif(search) {
  const key = `q4pEuS5Ltps9oP7m7gPiww7Jdn4fDK71`;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}`;

  fetch(url)
    .then(function (resp) {
      if (resp.status !== 200) {
        return console.log("shits broke");
      }

      return resp.json();
    })
    .then(function ({ data }) {
      console.log(data);
      const imgs = data.map(function (item) {
        return `<img class="result-img" src="${item.images.original.url}" >`;
      });

      console.log(imgs);
      usersContainer.innerHTML = imgs.join("");
    })
    .catch(function (err) {
      console.error(err);
    });
}

function getWeather(search) {
  const key = "9fecab4e5a8c3a63bd65cf759f919173";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${key}&units=imperial`;

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const card = `
      <div class="card">
        <h1>${data.name}</h1>
        <ul>
          <li>Current temp: ${data.main.temp}</li>
          <li>Feels Like: ${data.main.feels_like}</li>
          <li>Wind: ${data.wind.speed} Direction:${data.wind.deg} </li>
        </ul>
      </div>
      `;
      usersContainer.innerHTML = card;
    });
}

function getLOC(search) {
  const url = `https://www.loc.gov/notated-music/?q=${search}&fo=json`;
  fetch(url)
    .then(function (resp) {
      if (resp.status !== 200) {
        return console.log("shits broke");
      }

      return resp.json();
    })
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        console.log(element.title);
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}

fetchButton.addEventListener("click", function () {
  getLOC(document.querySelector("#search").value);
});
