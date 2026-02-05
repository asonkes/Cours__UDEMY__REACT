import { useEffect, useState } from "react";

// Donc on va créer un compteur qui va s'incrémenter chaque seconde (+1, +1 etc)
export default function Container() {

  const [count, setCount] = useState(0);

  /* Option 1 :
  setInterval(() => {
    setCount(count + 1)
  }, 1000)

  ==> Ici le problème, chaque fois que je vais rafraîchir 
  ==> ma fonciton, je vais relancer un 'setInterval',  
  ==> et donc il va y en avoir plein qui vont tourner
  ==> et qui vont essayer de faire tourner le state
  */

  /* Option 2 : se serait que ça ne se lance qu'une seule fois
  ==> donc useEffect !!!
  ==> Toujours, [] (tableau des dépendances VIDE)
  ==> DONC ne se REPETERA PAS !!! JUSTE 1 fois !!!!
  */
  /* Donc mais là, c'est ok MAIS prob, il tourne dans le vide
  ==> donc on va faire un 'clearInterval' pour qu'une fois que ça été lancé
  ==> après ça s'arrete !!!
  ==> INTERVALID, c'ets quoi, c'est ce que retourne 'SETINTERVAL'
  ==> A mettre avec une constante 
  ==> Et ca nous permet de supprimer la fonction par la suite
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount(count + 1)
    }, 1000)

    return () => clearInterval(intervalID)
  }, []);

  ==> mais ne tourne QUE 1 SEULE FOIS, donc s'arrete à 1
  */

  /* Option 3 :
  ==> On va passer une fonction
  ==> On passe la fonction STATE qui est fournie par 'useState'
  */
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount(state => state + 1);
    }, 1000)

    return () => clearInterval(intervalID)
  }, []);
  

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
    </div>
  )
}
