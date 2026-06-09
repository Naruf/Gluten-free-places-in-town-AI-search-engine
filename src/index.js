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
  let prompt = `Display a paragragh with the structure: <h3/><These are some place in ${city} that offer gluten-free options:<h3/> followed by <ol><li><li/><ol/>, <li><li/> should show a result for:1. a restaurant , 2.a bakery , 3.a cafe , 4.a supermarket. Use data from Google and filter by keyword:"gluten-free" in ${city}. For each result, display: <name of the restaurant><br/> street and number<br/> the place website or social media Url, adding <target= "_blank"> attribute to <a><a/> element. Justify <h3><h3/> and <ol><ol/> to the left. Do not show AI intro. Discard results from bussiness with no Google reviews in the last year.`;
  let context = `You are an expert in gluten-free products advising someone that is new to the city and it is looking for restautants, cafes, bakeries and supermarkets where they are offered gluten-free products.  Use real bussiness data.Do not make up the data.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showCityInfo);
}

let searchInfoElement = document.querySelector("#city-name");
searchInfoElement.addEventListener("submit", getCityInfo);
