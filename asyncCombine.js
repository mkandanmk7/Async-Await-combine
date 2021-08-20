// combine Two countires  using Async await:(Asia and Europe)

async function combine() {
  let data = await Promise.all([
    fetch("https://restcountries.eu/rest/v2/region/asia"),
    fetch("https://restcountries.eu/rest/v2/region/europe"),
  ]);

  let country1 = await data[0].json();
  let country2 = await data[1].json();
  let asiaEurope = [...country1, ...country2];
  asiaEurope.forEach((details) => {
    createFlag(details);
  });
  // createFlag([...country1, ...country2]);
}
combine();

function createFlag({ name, flag, population, region, capital }) {
  const info = document.createElement("div");
  info.className = "container";
  info.innerHTML = `
  <div class="flag-container">
  <img class="flag" src="${flag} " >

  </div>
  <div class="details">
  <h2>${name}</h2>
  <p><b>Population :</b>${population}</p>
  <p><b>Region :</b>${region}</p>
  <p><b>Capital :</b>${capital}</p>
  </div>
  
  
    `;
  document.body.append(info);
}
