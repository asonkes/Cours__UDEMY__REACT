import { Card } from "./Card";
import { useState, useCallback } from "react";

// Par contre ici, on va pas entouré notre fonction de 'memo'
// Pk, parce que notre fonction est ici, est réinitialisé à chaque click
// Exemple ==> count + 1
// Donc le chiffre va changer à chaque click ==> donc pas mémo
export default function Container() {
  // Maintenant, on va provoquer des mises à jour avec React
  // Comment on fait ça???
  // Avec des states
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card txt={"test"} />
      <button onClick={() => setCount(count + 1)}>Incrémentation</button>
    </div>
  );
}
