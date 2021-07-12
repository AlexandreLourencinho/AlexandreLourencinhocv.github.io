// récupération du premier bouton de l'accordéon dans le const, puis application de l'effet de néon grâce a l'injection de classe (ici neonpr)
// afin d'avoir l'effet uniquement quand l'accordéon est "déployé"
function classNeon(id) {
    document.getElementById(id).className = "btn btn-link collapsed testneon";
}
function carouselDepop() {
    document.getElementById('carouche').className = "d-flex testanimation justify-content-center";
}
function carouselPop() {
    document.getElementById('carouche').className = "d-flex testanimationn justify-content-center mx-auto";
}
const neon1 = document.getElementById('nionppro');
neon1.onclick = function () {
    let projpro = document.getElementById('nionppro').className;
    let cartouche = document.getElementById('carouche').className;
    if (projpro == 'btn btn-link neonpr' && cartouche == 'd-flex testanimation justify-content-center') {
        classNeon('nionppro');
        carouselPop();
    } else {
        document.getElementById('nionppro').className = "btn btn-link neonpr";
        classNeon('nionmc');
        classNeon('nionxp');
        classNeon('nionpb');
        carouselDepop();
    }
};
// récupération du premier bouton de l'accordéon dans le const, puis application de l'effet de néon grâce a l'injection de classe (ici neongy)
// afin d'avoir l'effet uniquement quand l'accordéon est "déployé"
const neon2 = document.getElementById('nionmc');
neon2.onclick = function () {
    let mesComp = document.getElementById('nionmc').className;
    let cartouche = document.getElementById('carouche').className;
    if (mesComp == 'btn btn-link neongy' && cartouche == 'd-flex testanimation justify-content-center') {
        classNeon('nionmc');
        carouselPop();
    } else {
        classNeon('nionppro');
        classNeon('nionxp');
        classNeon('nionpb');
        document.getElementById('nionmc').className = "btn btn-link neongy";
        carouselDepop();
    }
};
// récupération du premier bouton de l'accordéon dans le const, puis application de l'effet de néon grâce a l'injection de classe (ici neonbr)
// afin d'avoir l'effet uniquement quand l'accordéon est "déployé"
const neon3 = document.getElementById('nionxp');
neon3.onclick = function () {
    let monXp = document.getElementById('nionxp').className;
    let cartouche = document.getElementById('carouche').className;
    if (monXp == 'btn btn-link neonbr' && cartouche == 'd-flex testanimation justify-content-center') {
        classNeon('nionxp');
        carouselPop();
    } else {
        classNeon('nionppro');
        document.getElementById('nionxp').className = "btn btn-link neonbr";
        classNeon('nionpb');
        classNeon('nionmc');
        carouselDepop();
    }
};
// récupération du premier bouton de l'accordéon dans le const, puis application de l'effet de néon grâce a l'injection de classe (ici neonpb)
// afin d'avoir l'effet uniquement quand l'accordéon est "déployé"
const neon4 = document.getElementById('nionpb');
neon4.onclick = function () {
    let mesFor = document.getElementById('nionpb').className;
    let cartouche = document.getElementById('carouche').className;
    if (mesFor == 'btn btn-link neonpb' && cartouche == 'd-flex testanimation justify-content-center') {
        classNeon('nionpb');
        carouselPop();
    } else {

        classNeon('nionppro');
        classNeon('nionxp');
        document.getElementById('nionpb').className = "btn btn-link neonpb";
        classNeon('nionmc');
        carouselDepop();
    }
};
// // récupération du lien ouvrant le formulaire et ajout de la fonction, lors du click sur le lien, qui permet la transition
// // animée via l'injection des classes correspodantes : l'accordéon et le carousel se "réduisent" pendant que le formulaire,
// // lui, apparaît en grandissant.
// const lienForm = document.getElementById('contact');
// lienForm.onclick = function () {
//     let vuForm = document.getElementById('formulaire').className;
//     let cartouche = document.getElementById('carouche').className;
//     let accord = document.getElementById('accordion').className;
//     console.log(vuForm);
//     console.log(cartouche);
//     console.log(accord);
//     if (vuForm == "d-none formulaire" && cartouche == "d-flex justify-content-center carouche mx-auto" && accord == "vide" || cartouche == "d-flex testanimationn justify-content-center mx-auto" && vuForm == "d-none formulaire" && accord == "vide") {
//         carouselDepop();
//         document.getElementById('accordion').className = 'testanimation';
//         document.getElementById('formulaire').className = "d-flex align-items-center flex-column form-group testanimationn";
//     }
// };
// const lienForm2 = document.getElementById('contact2');
// lienForm2.onclick = function () {
//     let vuForm = document.getElementById('formulaire').className;
//     let cartouche = document.getElementById('carouche').className;
//     let accord = document.getElementById('accordion').className;
//     console.log(vuForm);
//     console.log(cartouche);
//     console.log(accord);
//     if (vuForm == "d-none formulaire" && cartouche == "d-flex justify-content-center carouche mx-auto" && accord == "vide" || cartouche == "d-flex testanimationn justify-content-center mx-auto" && vuForm == "d-none formulaire" && accord == "vide") {
//         carouselDepop();
//         document.getElementById('accordion').className = 'testanimation';
//         document.getElementById('formulaire').className = "d-flex align-items-center flex-column form-group testanimationn";
//     }
// };
// // récupération de l'id du bouton permettant le retour du formulaire au carousel + accordéon. détails plus bas
// const retour = document.getElementById('retour');
// retour.onclick = function () {
//     let vuForm = document.getElementById('formulaire').className;
//     let cartouche = document.getElementById('carouche').className;
//     let accord = document.getElementById('accordion').className;
//     console.log(vuForm, "//", cartouche, "//", accord);
//     if (vuForm == "d-flex align-items-center flex-column form-group testanimationn" && cartouche == "d-flex testanimation justify-content-center" && accord == "testanimation") {
//
//         lesErreurs.forEach(function (id) {
//             document.getElementById(id).innerHTML = "";
//         });
//
//         document.getElementById('formulaire').className = "d-flex align-items-center flex-column form-group formdisp";
//         // les setTimeout ici sont utilisés afin de se faire succéder l'animation de réaparition à celle de réapparition, ceci dans le but
//         // d'éviter les "sursauts" a l'écran, provoqué par le passage en display: none. les fonctions lancent les animations après que celle de disparition du formulaire
//         // soit terminée, et a la fin de cette deuxième animation, redonne aux éléments leurs classes de base afin de remplir a nouveau - si besoin est- les conditions
//         // de lancement des autres fonctions, afin qu'elles soient toujours fonctionelles.
//         setTimeout(function () {
//             document.getElementById('formulaire').className = "d-none";
//         }, 501);
//         setTimeout(function () {
//             carouselPop();
//         }, 502);
//         setTimeout(function () {
//             document.getElementById('accordion').className = 'testanimationn';
//         }, 502);
//         setTimeout(function () {
//             document.getElementById('accordion').className = 'vide';
//         }, 1003);
//         setTimeout(function () {
//             document.getElementById('formulaire').className = "d-none formulaire";
//         }, 501);
//     }
// };


const buton = document.getElementById("swap");
buton.onclick = function(){
    if(document.getElementById("body1").className==""){
        document.getElementById("body1").className="d-none";
        document.getElementById("body2").className="body";
    }else{
        document.getElementById("body1").className="";
        document.getElementById("body2").className="d-none body";
    }

}
const butonn = document.getElementById("swap1");
butonn.onclick = function(){
    if(document.getElementById("body1").className==""){
        document.getElementById("body1").className="d-none";
        document.getElementById("body2").className="body";
    }else{
        document.getElementById("body1").className="";
        document.getElementById("body2").className="d-none";
    }

}
