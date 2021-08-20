// combine Two countires  using Async await:(Asia and Europe)

(async function combine() {
  let data = await Promise.all([
    fetch("https://restcountries.eu/rest/v2/region/asia"),
    fetch("https://restcountries.eu/rest/v2/region/europe"),
  ]);

  let country1 = await data[0].json();
  let country2 = await data[1].json();
  createFlag([...country1, ...country2]);
})();

div = document.createElement("div");
div.className = "outer";
document.body.append(div);

function createFlag(flags) {
  flags.forEach((data) => {
    div.innerHTML += `
<div class=container>
<img src=${data.flag}>
  <h3>${data.name}</h3>
  <p><b>Region</b>:${data.region}</p>
  <p><b>Capital</b>:${data.capital}</p>
  <p><b>Population</b>:${data.population}</p>
  </div>`;
  });
}
