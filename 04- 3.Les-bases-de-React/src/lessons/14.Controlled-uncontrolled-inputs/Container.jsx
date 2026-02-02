import "./Container.css";
import { useState, useRef } from "react";

export default function Container14() {
  // Si on met ceci pour commencer :
  // const [state, setState] = useState("Hello World");
  // Ca va s'afficher
  const [state, setState] = useState("");

  const handleInput = (event) => {
    setState(event.target.value);
  };

  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    {
      /** Si je fais ca : 
        console.log(emailRef.current) ==> je récupère l'input dans la console
        Et pour récupérer sa valeur, je rajoute 'value'  
        On va récupérer la valeur en cliquant sur envoyer PK???
        car soumission du formulaire en cliquant sur 'envoyer'
    */
    }
    console.log(emailRef.current.value);

    {
      /** Et ici j'ai aussi accès à la valeur de mon state */
    }
    console.log(state);
  };

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>

      {/** Ici tout est en place pour avoir un input 'contrôllé'
       * Pour avoir cela, il faut faire :
       * 1) lié notre input au state
       * 2) Et que notre state soit lié à notre input
       * Pour cela, il faut utiliser 'value' dans l'input
       */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Votre pseudo</label>
        {/** Mais on va pas savoir ajouter de lettre dans l'input
         * Donc il faudrait pouvoir changer la valeur de l'input qd j'écris dedans
         * Et pour cela, on peut utiliser 'onChange'
         */}
        <input onChange={handleInput} value={state} type="text" id="pseudo" />

        {/** Input incontrollé ==> pas conseillé
         * Donc on utilise pas les références pour les formulaires etc */}
        {/** On va récupérer la valeur en cliquant sur envoyer PK???
        car soumission du formulaire en cliquant sur 'envoyer' */}
        <label htmlFor="email">Votre email</label>
        <input ref={emailRef} type="email" id="email" />

        <button>Envoyer</button>
      </form>

      {/** Nuance pour la compréhension :
       * Etat initial = useState (juste pour le 1er render)
       * A chaque click, le setState va permette la mise à jour et va passer
       * cette valeur au state <!DOCTYPE html>
       * le setState, ne fait que passer le changement de valeur
       */}
      <p>Votre pseudo : {state}</p>
    </div>
  );
}
