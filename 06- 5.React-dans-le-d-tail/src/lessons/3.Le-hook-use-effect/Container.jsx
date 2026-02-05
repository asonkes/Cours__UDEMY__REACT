// Dans quel cas va-t-on avoir besoin d'utiliser un 'useEffect' ?
//- 1) Effet secondaire quand on veut faire des requêtes 'HTTP'
//- 2) Quand on utilise 'setInterval'
//- 3) Quand on veut faire un 'addEventListener' global sur 'window'
//- 4) Un observateur au scroll
// -5) Un appel vers une API

import "./Container.css";
import { useEffect, useState } from "react";

export default function Container() {

  const [count, setCount] = useState(0);
  // Là avec le console.log(on voit l'incrémentation)
  console.log(count);
  console.log("Mise à jour du composant");

  {/** Oui mais pour l'instant ne s'exécute qu'une seule fois !!! 
  !!! Même si je mets le 'useEffect' avant le 'console.log' => 'mise à jour du composant'
  Et bien il y se serait effectué après !!!
  ==> Car :
  - Lorsque le composant est exécuté, cela ne l'exécute pas directement
  - Cela créé d'abord mon composant dans le DOM virtuel
  - Cela vient l'intégrer à mon vria DOM
   - Et après j'ai mon effet (Il y a d'abord la mise à jour) 
  */}

  {/** Pk ça ne re se réécrit pas ???
  C'est à cause du tableau... 
  Si pas de tableau ça se répète: 
  ex :
  useEffect(() => {
  console.log("Après 1ere création et après chaque mise à jour du DOM");
  });
  */}

  {/** Par contre ici, tableau vide: 
  Donc cela veut dire que l'on veut faire qu'un seul appel 
  Ex : 1 seul appel vers une API
  */}
  useEffect(() => {
    console.log("Après 1ere création et après chaque mise à jour du DOM");
  }, []);


  {/** Ici par contre j'ai passé {count} donc :
  - Maintenant, chaque fois que la valeur se met à jour, il y a noté :
  - Mise à jour...
    */}
  useEffect(() => {
    console.log("Après 1ere création et après chaque mise à jour du DOM");
  }, [count]);
  
  return (
    <div>
      {/** Il permet de créer des effets secondaires 
       * C'est un effet secondaire ==> effet 'callback'
       * après la 1ere création dans le DOM,
       * après chaque mise à jour d ecet élément dans le DOM
      */}

      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
