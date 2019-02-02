const xhr4 = new XMLHttpRequest();

xhr4.addEventListener("load", function() {
  //   console.log(this.responseText);
  const person4 = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = person4.name;

  const homeWorld4 = new XMLHttpRequest();
  homeWorld4.addEventListener("load", function() {
    const person4Home = JSON.parse(this.responseText);
    document.getElementById("person4HomeWorld").innerHTML = person4Home.name;
  });

  homeWorld4.open("GET", person4.homeworld);
  homeWorld4.send();
});
xhr4.open("GET", "https://swapi.co/api/people/4/");
xhr4.send();

const xhr14 = new XMLHttpRequest();
xhr14.addEventListener("load", function() {
  const person14 = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = person14.name;
  const species14 = new XMLHttpRequest();
  species14.addEventListener("load", function() {
    const person14Species = JSON.parse(this.responseText);
    document.getElementById("person14Species").innerHTML = person14Species.name;
  });
  species14.open("GET", person14.species);
  species14.send();
});
xhr14.open("GET", "https://swapi.co/api/people/14/");
xhr14.send();

const xhrfilm = new XMLHttpRequest();
xhrfilm.addEventListener("load", function() {
  //   console.log(this.responseText);
  const filmListData = JSON.parse(this.responseText).results;
  console.log(filmListData);
  filmListData.forEach(x => {
    const filmsSection = document.getElementById("filmList");
    const newList = document.createElement("li");
    newList.className = "film";
    const newHeader = document.createElement("h2");
    newHeader.innerHTML = x.title;
    const newHeader3 = document.createElement("h3");
    newHeader3.innerHTML = "Planets";
    const newULList = document.createElement("ul");
    newULList.className = "filmPlanets";
    newHeader3.appendChild(newULList);
    newHeader.appendChild(newHeader3);
    newList.appendChild(newHeader);
    filmsSection.appendChild(newList);
    x.planets.forEach(x => {
      const xhrPlanet = new XMLHttpRequest();
      xhrPlanet.addEventListener("load", function() {
        console.log(this.responseText);
        const newPlanetResult = JSON.parse(this.responseText);
        const newPlanet = document.createElement("li");
        newPlanet.className = "planet";
        const newPlanetName = document.createElement("h4");
        newPlanetName.className = "planetName";
        newPlanetName.innerHTML = newPlanetResult.name;
        newPlanet.appendChild(newPlanetName);
        newULList.appendChild(newPlanet);
      });
      xhrPlanet.open("GET", x);
      xhrPlanet.send();
    });
  });
});
xhrfilm.open("GET", "https://swapi.co/api/films/");
xhrfilm.send();
