import { useState } from "react";

export default function Container4() {
  {
    /** 
    Use State est un hook que l'on peut utilisé en React
    C'est une fonctionnalité de React 
    Et ici on commence le 'state' à '0'    */
  }

  const [count, setCount] = useState(0);
  console.log("Mise à jour");

  const handleClick = () => {
    setCount(99);
    // Pour avoir +1 à chaque 'click', on pourrait faire :
    // setCount(count+1)
  };

  return (
    <div>
      {/** Le State représente des données que l'on va pouvoir utiliser
       * dans un composant
       * Ces données vont pouvoir être mises à jour
       */}
      <h1>Le state</h1>
      <p>{count}</p>
      {/** Donc en cliquant, on va voir '99' au lieu de 0 sur la page
       * Et on va voir "Mise à jour" dans la console
       * Car au click, on dit le 'useState' passe à 99
       */}
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  );
}
