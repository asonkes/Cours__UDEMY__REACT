/* 1. Toujours exécuter les Hooks au plus haut niveau de la fonction.
Ne pas coder d'appels de Hooks dans des conditions, des boucles, etc...

2. Toujours exécuter les Hooks dans un composant ou un hook personnalisé, afin de garder la logique dans un environnement React.
*/

import { useState } from "react";

export default function Container() { 

  const [s1, setS1] = useState(0);
  console.log("S1", s1);
  

  if(s1 < 1) {
    const [s2, setS2] = useState(1);
    console.log("S2", s2);
  }

  const [s3, setS3] = useState(2);
  console.log("S3", s3);
  
  return (
    <div>
      <h1>Les règles des Hooks</h1>
      {/** Si on clique sur le bouton, on voit bien que "S2 est pas passé
       * Donc on rend moins de 'Hook' que prévu, pk???
       * Car la condition si s1 < 1, jamais possible, 1er tour s1 = 1" 
       * Et donc s3 va prendre la valeur de S2 et S3 va pas être appellée
       * Donc jamais appeller les 'hooks' dans des conditions */}
      <button onClick= {() => setS1(1)}>Change State</button>
    </div>
  )
}
