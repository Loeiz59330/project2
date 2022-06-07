const getCrea = document.getElementById('main');



function ADDCOOKIE() {
    var personnages = [
        {
            "nom": "Reptimoule",
            "type": "Pheu",
            "image": "   ",

        },
        {
            "nom": "Carapate",
            "type": "Narmol",
            "image": "  ",
        }
    ];

    saveCreas(creatures);

}




//Fonction de création d'un cookie
function setCookie(name, value, days){
    var expires = "";

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days2460601000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}







//Fonction de récupération d'un cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i<ca.length;i++){
        var c = ca[i];
        while (c.charAt(0)=='') c = c.substring(1,c.length);
        if(c.indexOf(nameEQ)==0) return c.substring(nameEQ.length,c.length);
    }

    return null;
}









function saveCreas(creatures) {
    var cookiePersos = JSON.stringify(creatures);
    setCookie('cookiePersos', cookiePersos, 300);
}


function afficheCrea(creature, i) {


    var creatureInfo = "";

        for (var j in creature) {
            if (j != "nom") {
                creatureInfo += <p class="card-text">${creature[j]}</p>;
            } else {
                creatureInfo += <h5 class="card-title">${creature[j]}</h5>;
            }

        }







  getCrea.innerHTML `+= 
  <div class="container mt-5">
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
      ${creatureInfo}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-footer text-muted">
      <button class="btn btn-primary">Séléctionner</button>
      <button class="btn btn-danger" onclick="supCrea(${i});">Supprimer</button>
  </div>
    </div>
  </div>`
  ;
}





// Fonction de suppression personnage
function supCrea(i) {
    var creatures = recupListCreas();
    creatures.splice(i, 1);
    saveCreas(creatures);
    document.location.reload();
}







function creerCreature() {
    var creature = {}; 
    creature.nom =document.getElementById('nom').value;
    creature.type =document.getElementById('type').value;
    creature.image =document.getElementById('image').value;
    creature.rarity =document.getElementById('rarity').value;


    var creatures = recupListCreas();
    creatures.push(creature);
    saveCreatures(creatures);   
}










function recupListCreas() {

var creatures = getCookie('cookiePersos');
    if (typeof creatures != 'undefined') {
        creatures = JSON.parse(creatures,'UTF-8');
    } else {
        creatures = [];
    }

    return creatures;
}




