import { useState } from "react";
import "./Container.css";

export default function Container10() {
  const [validation, setValidation] = useState(false);

  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez-vous?</label>
        {/** Ici cela permet d'inverser un state facilement */}

        <input onClick={() => setValidation(!validation)} type="checkbox" />

        {/** Explications :
         * 1ere {} c'est une expression JSX
         * 2eme {}, on met dedans une fonctionnalité JS avec ternaire et backTicks
         */}
        {/** Attention bien mettre la condition ternaire dans l'accolade, ausinon fonctionne pas */}
        <p style={{ color: `${validation ? "lightgreen" : "red"}` }}>
          {validation
            ? "Bravo, vous pouvez envoyer le formulaire"
            : "Vous devez cocher la case"}
        </p>

        {/** Attention bien mettre la condition ternaire dans l'accolade, ausinon fonctionne pas */}
        <p className={`${validation ? "valid" : "invalid"}`}>
          {validation
            ? "Bravo, vous pouvez envoyer le formulaire"
            : "Vous devez cocher la case"}
        </p>

        {validation ? <p>True</p> : <p>False</p>}
      </form>
    </div>
  );
}
