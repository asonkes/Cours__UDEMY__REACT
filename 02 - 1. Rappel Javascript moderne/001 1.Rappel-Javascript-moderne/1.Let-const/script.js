/**
 * Découvrons et rappelons les principales caractéristiques des déclarations let et const, 
 * et leurs différences avec le mot-clé var
**/

/** 
 * 1. 
 * let &const sont block-scoped
 * var est function-scoped 
**/

if(true) {
    var test = "Hello World"
    let test2 = "Test2"
    let test3 = "test3"
}

// Ici problèmatique de la 'var', le console fonctionne en dehors de la condition
// Avec 'let' et 'const' ==> on a pas ce problème
//console.log(test, test2, test3);

function foo() {
    var number = 10
    let number2 = 99
}
// Ici ne fonction pas en dehors de la fonction, ni pour 'var', ni pour 'let'
//console.log(number2);


/** 2. 
 * On ne peut pas déclarer de const vide,
 * Contrairement à let ou var
**/

var animal;
let lion;
// Ici on doit donner une valeur à une const
// On peut pas faire 'const cat' ==> erreur
const cat = 10;
console.log(lion);


/** 3.
 * On peut redéclarer des variables var sans provoquer d'erreurs
**/

/*
var dog = "Coco"
var dog = "Toby"
console.log(dog);
*/

// Ici avec let, on peut plus redéclarer 2x la même variable
// let cat = "Feline"
// let cat = "Lorem ipsum"


/** 4.
 * Une variable var se fait hoisted et peut être utilisée avant sa déclaration
 * car elle est pas initialisée à undefined
 * let & const sont hoisted mais pas initialisées
 * 
 * Hoisting Javascript
 * Les déclarations de fonctions et de variables sont hissées en javascript 
 * dans la mémoire du VO(variables Object) du contexte d'éxécution actuel et rendues
 * disponibles dans le contexte d'exécution avant même que l'exécution du code ne commence
**/

// Donc qd on dléclare la variable, la variable va être hissé en haut
// puis lue et on lui donne la valeur "test"
// console.log après , et donc on peut la lire
// On peut pas mettre console.log avant
var test = "test";
console.log(test);


/** 5.
 * Une variable var déclarée globalement se fait enregistrer dans l'objet global, 
 * pouvant provoquer des des bugs de clash entre variables globales.
 * Let et const peuvent se faire enregistrer globalement, mais san sêtre accessibles comme propriétés directes de window
 * elles sont inscrites dans l'environnement lexical de l'objet global
 * (l'ensemble des déclarations accessibles par ce dernier)
**/

// Exemple, si on utlisait une librairie, avec la var(username pouvait remplacé la valeur d'une variable
// qui pourvait avoir été utilisée et qui avait le même nom
// avec let , ca se passe pas comme ca 
var username = "Julia";
let username2 = "Tobby";
console.log(window);
