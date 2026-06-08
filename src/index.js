function showCityInfo(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#search-input");
  let city = cityElement.value;
  //   let cityInfo = document.querySelector("#result");
  //   cityInfo.innerHTML = city;
  new Typewriter("#result", {
    strings: city,
    autoStart: true,
    delay: 25,
    cursor: null,
  });
}

let searchInfoElement = document.querySelector("#city-name");
searchInfoElement.addEventListener("submit", showCityInfo);
