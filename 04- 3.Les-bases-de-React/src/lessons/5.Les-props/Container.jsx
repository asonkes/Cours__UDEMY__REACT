import { Card } from "./Card";
import { useState } from "react";

export default function Container5() {
  const [state, setState] = useState("Hello World");

  const id = 4125;

  return (
    <div>
      {/** Les props sont des données que l'on va pouvoir passer
       * d'un composant 'parent' à un composant 'enfant'
       */}
      <h1>Les props</h1>
      <p>State du Container: {state}</p>
      {/** On peut aussi faire passer des fonctions comme 'changeState' */}
      <Card id={id} state={state} changeState={setState} />
    </div>
  );
}
