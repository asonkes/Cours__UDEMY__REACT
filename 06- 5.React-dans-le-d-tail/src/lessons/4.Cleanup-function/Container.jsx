import { Card } from "./Card";
import { useState } from "react";

export default function Container() {
  // Si je mets le 'useState' sur 'false' ==> il, n'apparaît pas !!!
  const [showCard, setShowCard] = useState(true);

  return (
    <div>
      <h1>Ajouter un évènement global</h1>

      {/** Ca y est j'ai compris...
       * Donc j'ai compris, ici, on fait un évènement au click
       * Sur cet évènement, on met 'setShowCard', pk ==> changement d'état
       * Et on fait '!ShowCard' ==> qd tu clique ==> ShowCard passe à false et puis true
       * Ca permet qu'au clique il apparaisse ou disparaisse !!!
       * 
       * Destruction ==> c'ets le fait que l'on cache l'élément  => il est enlever du DOM !!!
       */}
      <button onClick={() => setShowCard(!showCard)}>Montrer/Cacher la carte</button>

      {/** Ici, ca veut dire qd 'showCard' est true, je retourne le/la 'card */}
      {showCard && <Card/>}

    </div>
  )
}
