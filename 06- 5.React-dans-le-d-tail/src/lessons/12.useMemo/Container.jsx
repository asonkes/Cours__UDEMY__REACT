import "./Container.css";
import { Calculation } from "./Calculation";
import { useState } from "react";
import { use } from "react";

export default function Container() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useMemo</h1>
      <Calculation />
      {/** Et mise à jour sur le parent aussi */}
      {/** Dobnc le calcul est refait pour rien */}
      {/** Car une fois qu'on a mis la valeur dans l'input, ca ne change pas, il
       * faudrait changer la valeur dans l'input pour ça...
       */}
      <button onClick={() => setCount(count + 1)}>Incrémentation</button>
    </div>
  );
}
