// decla variables 
let nbClick = 0;
let nbClicks = 15;
const btn = document.getElementById("btn");
//fonction click
function click(){
    countClick();
    showNumberClick();
    compareClicks();
}
// Lancement de la fonction clic
document.body.onclick = click;

function countClick(){
    nbClick++;
}
// fonction comparer nbClick 
function compareClicks(){
    if(nbClick == nbClicks){
        ifVictory();
    }
}
// fonction victoire
function ifVictory(){
    document.body.style.backgroundColor = "red";  
}
// fonction afficher le nb de click
function showNumberClick(){
    document.getElementById("nbClick").innerHTML = nbClick;
}    

// fonction changer couleur du body à l'appui du bouton
btn.addEventListener("click", function onclick(event){
    console.log(event.target);

document.body.style.backgroundColor = "salmon";
});
