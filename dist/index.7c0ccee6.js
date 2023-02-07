"use strict";
const board = document.querySelector("#board");
board.innerHTML = "";
const getTable = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET", `http://transport.opendata.ch/v1/stationboard?station=Yverdon-les-bains&limit=10`);
    request.send();
    request.addEventListener("load", (e)=>{
        const data = JSON.parse(request.responseText);
        renderTable(data.stationboard);
        console.log(data.stationboard);
    });
};
const renderTable = (table)=>{
    const html = table.map((station)=>{
        const time = station.stop.departure.substr(11, 5);
        return `<article>
       <div class="time">${time}</div>
        <div class="category" data-category="${station.category}">${station.category}</div>
        <div class="destination">${station.to}</div>
      </article>`;
    }).join("");
    board.insertAdjacentHTML("afterbegin", html);
};
getTable(); // Que fait include () en JavaScript? 
 // Explication du code :
 // Ce code JavaScript utilise les technologies suivantes : DOM (Document Object Model) pour manipuler le contenu HTML, XMLHttpRequest pour effectuer une requête HTTP, et JSON pour traiter les données reçues.
 //     La première ligne const board = document.querySelector("#board"); sélectionne l'élément HTML avec l'ID "board".
 //     La deuxième ligne board.innerHTML = ""; vide le contenu actuel de l'élément "board".
 //     La fonction getTable() effectue une requête HTTP GET en utilisant l'objet XMLHttpRequest(). Elle demande les données de la station de train Yverdon-les-bains pour les 10 prochains départs.
 //     Lorsque la réponse est reçue, un événement "load" est déclenché et la fonction anonyme associée à ce dernier est appelée. Cette fonction parse les données reçues en utilisant JSON.parse() et appelle la fonction renderTable(data.stationboard) avec les données parsées.
 //     La fonction renderTable(table) prend en entrée les données de la station de train et les traite pour créer du contenu HTML. Elle utilise la méthode map() pour boucler sur les entrées de station et créer une chaîne de caractères pour chaque entrée. Les entrées sont ensuite jointes ensemble avec la méthode join("").
 //     La dernière étape consiste à insérer ce contenu HTML dans l'élément "board" en utilisant la méthode insertAdjacentHTML().
 //     La dernière ligne appelle la fonction getTable() pour démarrer le processus.
 // Correction prof marche pas :(
 // const getStation = (station) => {
 //   const request = new XMLHttpRequest();
 //   request.open(
 //     "GET",
 //     `https://transport.opendata.ch/v1/stationboard?station=${"Yverdon-les-bains"}&limit=10`
 //   );
 //   request.send();
 //   request.addEventListener("load", () => {
 //     const cleanData = parseData(request.responseText);
 //     cleanData.forEach((train) => {
 //       renderTrain(train);
 //     });
 //   });
 // };
 // const parseData = (rawData) => {
 //   const { stationboard } = JSON.parse(rawData);
 //   const cleanData = stationboard.map((el) => {
 //     const date = new Date(el.stop.departure);
 //     const hours = date.getHours();
 //     const minutes = date.getMinutes();
 //     const formattedHours = date.getHours() < 10 ? "0" + hours : hours;
 //     const formattedMinutes = date.getMinutes() < 10 ? "0" + minutes : minutes;
 //     return {
 //       departure: `${formattedHours}:${formattedMinutes}`,
 //       destination: el.to,
 //       category: el.category
 //     };
 //   });
 //   return cleanData;
 // };
 // const renderTrain = (data) => {
 //   const html = `
 //     <article>
 //         <div class="time">${data.departure}</div>
 //         <div class="category" data-category="${data.category}">${data.category}</div>
 //         <div class="destination">${data.destination}</div>
 //     </article>
 //     `;
 //   board.insertAdjacentHTML("beforeend", html);
 // };
 // getStation(STATION);

//# sourceMappingURL=index.7c0ccee6.js.map
