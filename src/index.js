function showCityInfo(response) {
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 25,
    cursor: null,
  });
}
function getCityInfo(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#search-input");
  let city = cityElement.value;
  let apiKey = "5d1t76143df0603191aa4604b0b5b1oe";
  let prompt = `Show a list of all places in ${city} that offer gluten-free products. Show results into groups: restaurants, cafes, bakeries and supermarkets.  `;
  let context = `Imagine you are a coeliac local person and know all the places that offer gluten free options in ${city} and you are giving some advice to some turists. Make a list with the results. Search in Google for all places containing the words 'gluten-free' in their name and  places with 'glute-free' or 'gluten-free options' filter in Google reviews.  Make a list with the results.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showCityInfo);
}

let searchInfoElement = document.querySelector("#city-name");
searchInfoElement.addEventListener("submit", getCityInfo);
