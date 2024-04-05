
const main = document.querySelector('main')
const section = document.querySelector('.jsonproyectos')
// const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
const requestURL='./proyectos.json';
const request = new XMLHttpRequest(); 
request.open('GET',requestURL)
request.responseType='json'
request.send()

request.onload=function(){
    const superHeroes = request.response
    populateHeader(superHeroes)
    showHeroes(superHeroes)
}
function populateHeader(jsonObj) {
    const myH1 = document.createElement("h1");
    myH1.textContent = jsonObj["titulo"];
    main.appendChild(myH1);
  
    const myPara = document.createElement("p");
    main.appendChild(myPara);
  }
  function showHeroes(jsonObj) {
    const proyectos = jsonObj["proyectos"];
  
    for (var i = 0; i < proyectos.length; i++) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myImg = document.createElement("img")
      const myPara1 = document.createElement("a");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");
  
      myH2.textContent = proyectos[i].nombre;
      myImg.src=proyectos[i].imagen;
      myPara1.href= proyectos[i].link
      myPara2.textContent = "Fecha: " + proyectos[i].fecha;
      myPara3.textContent = "Skills:";
  
      const skills = proyectos[i].skills;
      for (var j = 0; j < skills.length; j++) {
        const listItem = document.createElement("li");
        listItem.textContent = skills[j];
        myList.appendChild(listItem);
      }
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myPara1.appendChild(myImg);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
      
      section.appendChild(myArticle);
      main.append(section)
    }
  }
