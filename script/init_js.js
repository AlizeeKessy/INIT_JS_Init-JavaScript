/*
var compteur=2;
function maFonction()
{
    var myVar=456;
    console.log("myVar: ",myVar);
    alert("myVar: "+myVar);
}
maFonction()

if (compteur > 1)
{
    let myVar2="Wazza !";
    console.log("myVar2 : ",myVar2);
    alert("myVar2 : "+myVar2);
}
console.log(typeof myVar);
alert(typeof myVar);
*/

// document.write("Votre âge est ");
// let age=35;
// let myLet=age;
// document.write(age);
// console.log("myLet:"+myLet);



// MyVar = "Bonjour";
// var myVar="Bonjour";
// window.alert(myVar);
// window.alert("chaîne de caractères");
// window.alert(myVar + "chaîne de caractères");
// console.log("myVar:" +myVar);


// var reponse1 = window.prompt("Saisissez votre nom");
// var reponse2 = window.prompt("Saisissez votre couleur préférée");

// if (window.confirm("Voulez-vous continuer ?") == true)
// {

// }


// alert("Vous avez confirmé !");
// console.log("alert : vous avez confirmé")


// var temperature=37
// if(window.prompt("temperature") > 37)
// {
//     alert("hospitaliser le patient");
// }

// var reponse = "oui";
// if (reponse == "oui")

// {
// console.log("Bonne réponse !");
// }


// // Condition avec ET
// let region="Ile de France"
// let ville="Paris"
// let Pays="France"

// if (region == "Ile de France" && ville == "Paris")
// {
// console.log("Pays : France");

// // Condition avec OU
// if (region == "Ile de France" || pays == "France")
// {
// console.log("Pays : France");
// }

// let reponse = "oui"
// if (reponse == "oui") {
//     console.log("Bonne réponse !");
// }
// else {
//     console.log("Mauvaise réponse !");
// }












/*LES CONDITIONS*/

// Exercices

// 1 - Parité
// Ecrivez un programme qui demande un nombre à l’utilisateur
// puis qui teste si ce nombre est pair. Le programme doit afficher
// le résultat « nombre pair » ou « nombre impair ». Vous devez
// utiliser l’opérateur modulo « % » qui donne le reste d’une division.
// a%2 donne le reste de la division de a par 2,
// si ce reste est égale à zéro, a est divisible par 2.

// let nombre = prompt("Entrer un nombre");
// alert;
// if (nombre%2==0) {
//     alert("nombre paire");
// }
// else {
//     alert("nombre impair");
// }


// 2 - Age
// Ecrivez un programme qui demande l’année de naissance à l’utilisateur.
// En réponse votre programme doit afficher l’âge de l’utilisateur et
// indiquer si l’utilisateur est majeur ou mineur.

// let age = prompt("Entrez Votre Âge");
// let letAge = 18;
// alert;
// if (age >= letAge) {
//     alert("Vous êtes Majeur")
// }
// else {
//     alert("Vous êtes Mineur")
// }


// 3 - Calculette
// Faire la saisie de 2 nombres entiers, puis la saisie 
// d'un opérateur '+', '-', '*' ou '/'.
// Si l'utilisateur entre un opérateur erroné, le programme affichera 
// un message d'erreur.
// Dans le cas contraire, le programme effectuera l'opération 
// demandée (en prévoyant le cas d'erreur "division par 0"), 
// puis affichera le résultat.


// // "parseInt" balise n'acceptant uniquement que des chiffres
// // "resuladd" pour avoir le resultat d'une opération

// let nombre1 = parseInt(prompt("Entrer un nombre"));
// let operateur = prompt("Entre une Opérateur");
// let nombre2 = parseInt(prompt("Entrer un nombre"));
// let resuladd;
// switch (operateur) {
//     case "+":
//         resuladd = nombre1 + nombre2;
//         break;
//     case "-":
//         resuladd = nombre1 - nombre2;
//         break;
//     case "*":
//         resuladd = nombre1 * nombre2;
//         break;
//     case "/":

//         if (nombre2 == 0) {
//             resuladd="erreur";
//         }
//         else{
//             resuladd = nombre1 / nombre2;
//         }
//         break;
// }
// alert(resuladd);



// 4 - Remise
// A partir de la saisie du prix unitaire PU d’un produit et de 
// la quantité commandée QTECOM, afficher le prix à payer PAP, 
// en détaillant le port PORT et la remise REM, sachant que :
// ▪ le port est gratuit si le prix des produits TOT est supérieur
//  à 500€. 
// Dans le cas contraire, le port est de 2% de TOT
// ▪ la valeur minimale du port à payer est de 6 €
// ▪ la remise est de 5% si TOT est compris entre 100 et 200 € et 
// de 10% au-delà


// let PU = parseFloat(prompt("Saisir un prix unitaire"));
// let QTECOM = parseInt(prompt("Saisir une quantité"));
// let PAP = 0;
// let PORT = 0;
// let REM = 0;
// let TOTAL = PU * QTECOM;
// if (TOTAL <= 500) {
//     PORT = TOTAL * 0.02;
//     if (PORT < 6) {
//         PORT = 6;
//     }
// } 
// if (TOTAL >= 100 && TOTAL <= 200) {
//     REM = TOTAL * 0.05;
// } else if (TOTAL > 200) {
//     REM = TOTAL * 0.1;
// } PAP = TOTAL + PORT - REM;
// console.log("TOTAL : " + TOTAL);
// console.log("PORT : " + PORT);
// console.log("REMISE : " + REM);
// console.log("TOTAL A PAYER : " + PAP);



// 5 - Participation
// Un patron décide de calculer le montant de sa participation
// au prix du repas de ses employés de la façon suivante :
// ▪ si il est célibataire : participation de 20%
// ▪ si il est marié : participation de 25%
// ▪ si il a des enfants : participation de 10% supplémentaires
// par enfant La participation est plafonnée à 50%
// Si le salaire mensuel est inférieur à 1200 € la participation
// est majorée de 10%.
// Ecrire le programme qui lit les informations au clavier et
// affiche pour chaque salarié, la participation à laquelle il a droit.


// let iParticipation = 0;
// let bStatutMarital = confirm("Êtes vous célibataire (OK)/ Marié(e) (Annuler)?");
// let iNbEnfants = parseInt(prompt("Combien d'enfants avez vous?"));
// let iSalaire = parseInt(prompt("Quel est votre salaire?"));
// if (bStatutMarital) {
//     iParticipation += 20;
// } else {
//     iParticipation += 25;
// }
// iParticipation += 10 * iNbEnfants; 
// if (iSalaire < 1200) {
//     iParticipation += 10;
// } if (iParticipation > 50) {
//     iParticipation = 50;
// } alert(iParticipation);















/*LES BOUCLES DO....WHILE, WHILE, FOR, FOR...IN, FOR....OF*/
/*
let compteur = 0;
do {
    compteur += 1;
    console.log(compteur);
    alert(compteur);
}
while (compteur < 3);

let compteur2 = 0;
while (compteur2 < 2) {
    compteur2 += 1;
    console.log("Say Hello ", compteur2);
    alert("Say Hello " + compteur2);
}

for (let compteur = 0; compteur < 3; compteur++) {
    console.log("Say Hi ", compteur);
    alert("Say Hi " + compteur);
}

//"var personne"  dans cet exemple est une variable objet car elle contient une ou plusieurs propriétés
//cette boucle a été conçut juste pour récuperer les propriétés d'un objet.
var personne = {};
personne.age = 12;
personne.prenom = "Julien";
personne.adresse = "3 Rue de la Fougère Verte";

for (propriete in personne) {
    console.log(propriete, "=", personne[propriete]);
    alert(propriete + " = " + personne[propriete]);
}


//cette boucle a été conçut juste pour récuperer les propriétés d'un array (un tableau).
var liste = ["Toyota", "Peugot", "Renault", "Ford"];

for (marque of liste) {
    console.log("Marques = ", liste[0], liste[1], liste[2], liste[3]);
    alert("Marques = " + liste[0] + "," + liste[1] + "," + liste[2] + "," + liste[3]);
}
*/


// 1 - Saisie
// Créer une page HTML qui demande à l’utilisateur un prénom.
// La page doit continuer à demander des prénoms à l’utilisateur
// jusqu’à ce qu’il laisse le champ vide. Enfin, la page affiche 
// sur la console le nombre de prénoms et les prénoms saisis.


// let i = 1;
// let prenom;
// while (prenom !=""){
//     prenom = prompt("saisissez un prenom"+i);
//     i++;
//     console.log(prenom);
// }
// console.log(i + -2);





// 2 - Entiers inférieurs à N
// Ecrivez un programme qui affiche les nombres inférieurs à N.


/*let N = parseInt(prompt("Saisir"));

while(N>0){
    console.log(N--);
    alert(N);
}*/




/*let x = 9;

do {
    console.log(x);
    alert("x : " + x);
    x--;
}
while (x>0);*/


/*3 - Somme des entiers inférieurs à N
Ecrivez un programme qui affiche la somme des nombres inférieurs à N.*/

/*let N = parseInt(prompt("Entrer un nombre"));
let somme = 0;

while (N > 0) {
    console.log(N--);
    console.log(somme +=N);

}
alert(somme +=N);*/


/*4 - Somme d'un intervalle
Ecrivez un programme qui saisit deux nombres n1 et n2
et qui calcul ensuite la somme des entiers de n1 à n2.*/

/*let n1 = parseInt(prompt("Entrer un nombre"));
let n2 = parseInt(prompt("Entrer un nombre"));
let somme = (n1+n2)-2;

while (n1 > 0 && n2 > 0) {
    console.log(n1--);
    console.log(n2--);
    console.log(somme);

}
alert(somme)*/


/*5 - Moyenne
Ecrire un programme qui saisit des entiers et en affiche
la somme et la moyenne (on arrête la saisie avec la valeur 0)*/

/*let n1 = parseInt(prompt("Entrer un nombre"));
let n2 = parseInt(prompt("Entrer un nombre"));
let somme = n1 + n2;
let moyenne = somme / 2;

do {
    console.log(n1--, n2--);
    console.log(somme);
    console.log(moyenne);
}
while (n1 > 0 && n2 > 0)
alert(somme);
alert(moyenne);*/












/*

LES ARRAY (LES TABLEAUX)

array [ ] = valeur de type tableau
push : méthode pour ajouter un ou plusieurs éléments à la suite d’un tableau (array)

  Exemple : const tableau = [  "orange", "banane", "pomme"];  //définition d'une constante ayant pour contenu un array vide
tableau.push("banane"); //est faisable car là c'est la modification de l'array de type 'tableau'

tableau = ["orange", "banane", "pomme"]; //n'est pas faisable

unshift : méthode pour ajouter un ou plusieurs éléments au début  d’un tableau (array)

pop : méthode pour enlever le ou les derniers éléments d’un tableau (array)

shitf : méthode pour enlever le ou les premiers  éléments d’un tableau (array)

Pour changer la valeur d’un élément dans le tableau, on utilisera la syntaxe suivante :
fruits[0] = "modification"



LENGTH
length (longueur)  : fonction retourne le nombre d’éléments contenu dans un tableau

var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
concat : Réunit deux tableaux.
Exemple
var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
var autres = ["sucre", "farine", "oeufs"];
var ingredients = fruits.concat(autres);


INDEXOF
indexOf Retourne le premier indice pour lequel on trouve l’élément dans un tableau (occurrence) :
fruits.indexOf('banane') => retourne 2
 Retourne le dernier indice de l’occurrence de l’élément dans un tableau :
var fruits = ["pomme", "poire", "banane", "fraise", "banane","abricot"];
fruits.lastIndexOf("banane"); => retourne 4 (position du dernier banane,
celui en rouge)



PUSH
push ajoute un ou plusieurs éléments à la fin d’un tableau et retourne la nouvelle taille du tableau.
ex : var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
var nb = fruits.push("mangue", "prune");
=> retourne ["pomme", "poire", "banane", "fraise", "abricot","mangue", "prune"];
et la variable nb vaudra 7.


POP
pop supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau :
ex : var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
last = fruits.pop("abricot");
console.log(last) => retourne ‘abricot’ et le supprime du tableau ["pomme", "poire", "banane", "fraise"];


UNSHIFT
unshift : méthode pour ajouter un ou plusieurs éléments au début  d’un tableau (array)
ex : var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
fruits.unshift("orange"); => retourne ["orange","pomme", "poire", "banane", "fraise", "abricot"];


SHIFT
shift méthode pour supprimer un ou plusieurs éléments au début  d’un tableau (array)
ex : var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
fruits.shift("pomme"); => retourne ["poire", "banane", "fraise", "abricot"];

CHANGER
Pour changer la valeur d’un élément dans le tableau, on utilisera via l'index de cet élément la syntaxe suivante :
ex : var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
fruits[0] = "modification"  => retourne ["modification","poire", "banane", "fraise", "abricot"];



SORT
sort Tri le tableau en ordre ascendant :
ex : var fruits = ["pomme", "poire", "banane", "fraise", "abricot"];
fruits.sort(); => retourne  ["abricot","banane","fraise","poire","pomme8"]



SPILT
split Découpe une chaîne selon un caractère passé en argument, le résultat de cette « dé-
coupe » sera un tableau :
Exemple :
var ladate = '15/05/2018';
var myTableau = ladate.split('/');
Le tableau myTableau contiendra les valeurs 15, 05 et 2018.



*/


//POUR PARCOURIR UN TABLEAU ET AFFICHER SON CONTENU, NOUS UTLISERONS TOUJOURS LA BOUCLE "FOR"
var prenoms = ["Pierre", "Victor", "Julia", "Claire"];
let p = "";
for (let i = 0; i < prenoms.length; i++) {
p += "prenom n°" +(i+1)+" : "+ prenoms[i]+"\n";
}
console.log(p)
alert(p);















    /*LES FONCTIONS*/

    // function multiplication(x, y) {
    //     alert(x * y);
    //     console.log(x * y);
    //     return x * y;
    // }
    // var resultat = multiplication(3, 4);
    // alert(resultat + 
    //     "\n" (x) +
    //     "\n"(y));



    /*
    let racineCarré = function(x) {
        console.log("La racine Carré de " , x , " = ", x*x);
        alert("La Racine Carré de " + x + " = "+ x*x);
    }
    let y = prompt("Entrer un nombre");
    racineCarré(y);
    */


    /*
    let addition = function(x,y) {
        const resultat = x + y;
        return resultat
    }
    
    let a = parseInt(prompt("Entrer un nombre"));
    let b = parseInt(prompt("Entrer un nombre"));
    const resultat = addition(a,b);
    
    console.log("L'addtion de  " , a ," + ",b, " = ",resultat);
    alert("L'addtion de  " + a +" + "+ b + " = "+ resultat);
    */



    // Créer un  object:
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {//fullName est une methode de l'objet person
            return this.firstName + " " + this.lastName;
            //La fonction "this" nous permet de recupérer la ou les propriétés de nitre variable objet 'person'
        }
    };
// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

// 







/* DOM (DOCUMENT OBJET MODEL) */


/** IDENTIFIER UN ELEMENT HTML VIA JAVASCRIPT */

/* GET ELEMENT BY TAG NAME QUI RENVOI A UN ARRY(TABLEAU)

var elements = document.getElementsByTagName("td"); //pour identifier un élément de type "array"
var element = elements[0]; //Pour identifier notre élément dans notre "array" via son indice"[0]"
var element = document.getElementsByTagName("td")[0]; /*Qui est aussi une façon simple d'écrire 
les 2 lignes de code précédente
*/

/* GET ELEMENT BY CLASS NAME QUI RENVOI A UN ARRY(TABLEAU)*/
/*var element_1 = document.getElementsByClassName("maClasse")[0]
//toujours pour identifier un élément de type "array";
*/
/* GET ELEMENT BY CLASS NAME QUI RENVOI A UN ARRY(TABLEAU)*/
/*var elements_1 = document.getElementsByClassName("maClasse")[0]
//toujours pour identifier un élément de type "array";
*/


/* GET ELEMENT BY ID */
/*var element_2 = document.getElementById("section_1");
//toujours pour identifier un élément unique qui est de type id ;
*/

//On peut aussi écrire cette syntaxe
//var elements_2 = document.getElementsByTagName("body")[0].getElementsByClassName("section_2")[0];
//Puisque nous avons un seul body dans notre document htmlet une ou plussieurs sections




/** MODIFIER LES PROPRIETES D'UN ELEMENT HTML VIA JAVASCRIPT */


// Pour modifier les propriétés (le texte) d'un élément prédemment identifier, voilà la syntaxe :
// Dans notre cas il s'agira d'ajouet du texte à notre section (id="section_1")
var element_2 = document.getElementById("section_1");
element_2.textContent = "OK";
console.log(element_2, "\n", element_2.textContent);

//Pour modifier la class d'un élément prédemment identifier, voilà la syntaxe :

element_2.className = "backGround";

//Pour ajouter une nouvelle class à un élément précedemment identifié
element_2.classList.add("ligne");


//Pour ajouter une class à un élément prédemment identifier, voilà la syntaxe :

element_2.setAttribute("prenom", "Julien");
//Et pour recuperer la valeur de l'attribut "prenom", voilà la syntaxe :
var prenom = element_2.getAttribute("prenom"); //return "Julien"




/** MODIFIER LE STYLE CSS D'UN ELEMENT HTML VIA JAVASCRIPT */

var element_3 = document.getElementById("section_2");
element_3.textContent = "Changement d'adresse";
element_3.className = "color";
element_3.setAttribute("adresse", "4 Rue du Port de Pêche");
var adresse = element_3.getAttribute("Adresse")

//Pour modifier la Couleur d'un élément css en javascript voilà la syntaxe :
//var element_3 = document.getElementById("section_2").style.color = "grey";
// ou encore la syntaxe suite plus courte
element_3.style.color = "grey";
element_3.style.backgroundColor = "yellow";
element_2.style.backgroundColor = "pink";




/** CREER DYNAMIQUEMENT UN ELEMENT HTML VIA JAVASCRIPT ET L'INSERER A NOTRE PAGE .HTML */

//via la la fonction "createElement"

var newPara = document.createElement("p");// Pour créer un nouveau paragraphe
newPara.id = "nouveau" //pour ajouter un "id" à notre nouveau paragraphe

let btn = document.createElement("button");//Là pour la création d'un "bouton"
btn.innerHTML = "Cliquez Moi";
document.body.appendChild(btn);


//Nous allons ajouter manuellement une liste "ul"  dans notre fichier html
let elementliste = document.createElement("li");//Pour créer une "liste"
elementliste.textContent = "Water";//L'élément de type texte("water") qui sera ajouté à notre liste
document.getElementById("maListe").appendChild(elementliste); //Ensuite nous ajoutons la liste créée 
// à notre ul liste



//via la la fonction "createTextNode" pour ajouter du texte à notre texte créer juste avant
let texte_1 = document.createTextNode(" for drink");
elementliste.appendChild(texte_1);

// Pour ajouter une autre type d'élément à notre liste à l'exemple d'un bouton

let btn_2 = document.createElement("button");//Là pour la création d'un "bouton"
btn_2.innerHTML = " Cliquez sur la Liste";
document.body.appendChild(btn_2);
elementliste.appendChild(btn_2);


//Pour créer un nouvel élémemnt (une nouvelle section) à notre "body", voilà la syntaxe
let newSection = document.createElement("section");//création d'une nouvelle section
newSection.innerHTML;
document.body.appendChild(newSection);


/** GESTION DU TEMPS EN JAVASCRIPT */

// Nous allons ajouter manuellement 2 boutons  dans notre fichier html
/*
function afficherAlert(){ // Fonction pour appeler notre alerte
    setTimeout(showAlert,2000);
} 

function showAlert () { // Foction pour aaficher notre alerte
    alert("Voici une alerte !");
}
*/

// Maintenant pour annuler notre alerte avant notre delais de "2000 milli secondes",
// nous aurons déjà besoin de créer une variable avant notre "function afficherAlerte",
// et notre variable sera égal à "setTimeout(showAlert,2000);", voici la syntaxe :

var timeoutID;
function afficherAlert() { // Fonction pour appeler notre alerte
    timeoutID = setTimeout(showAlert, 2000);
}

function showAlert() { // Foction pour aaficher notre alerte
    alert("Voici une alerte !");
}

function clearAlert() {
    clearTimeout(timeoutID);
}


