let index;
let spieler = undefined;

function showUI(){
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `Name: ${spieler.firstname}<br>`+
        `First name: ${spieler.lastname}<br>`+
        `Position: ${spieler.position}`;

    htmlObj = document.getElementById("college");
    htmlObj.innerHTML =
        `College: ${spieler.college.college}<br>`;

    htmlObj = document.getElementById("superbowl");
    htmlObj.innerHTML = "";
    spieler.superbowl.superbowl.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });

    htmlObj = document.getElementById("mvpTitle");
    htmlObj.innerHTML = "";
    htmlObj.innerHTML += " " + mvp;

    htmlObj = document.getElementById("mvp");
    htmlObj.innerHTML = "";
    let faecherListe = spieler.superbowl.mvp;
    for (let i=0;i<mvpListe.length; i++){
        htmlObj.innerHTML += `${mvpListe[i]}<br>`;
    };

    htmlObj = document.getElementById("showIndex");
    htmlObj.innerHTML = "";
    htmlObj.innerHTML = index;
}


function showNext() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (spielerListe.length-1 > index){
            index++;
        }
    }
    localStorage.setItem("index", index);
    spieler = spielerListe[index];
    showUI();
}

function showPrevious() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (index > 0){
            index--;
        }
    }
    localStorage.setItem("index", index);
    spieler = spielerListe[index];
    showUI();
}


if (spieler === undefined){
    index = 0;
    localStorage.setItem("index", index);
    showUI();
}
