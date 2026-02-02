import { useState, useRef } from "react";

{
  /** UseRef peut servir à 2 choses :
  1. Isoler une valeur parmi les mises à jour
  2. Sélectionner un élément (donc pas querySelector MAIS à la REACT)
*/
}

export default function Container13() {
  const [state, setState] = useState(0);

  const countRef = useRef(0);
  // Ca c'est la référence
  // On va avoir un objet {current: 0}
  console.log(countRef);

  // Une fois que l'on a cela, on va avoir envie de l'incrémenter,
  // de le modifier
  function handleCountRef() {
    countRef.current++;
    console.log(countRef.current);

    console.log(txtRef);
  }

  // On va créer la référence de l'élément
  const txtRef = useRef();
  // Au départ : undefined
  console.log(txtRef.current);

  return (
    <div>
      <h1>Comprendre les refs</h1>
      <h2>Le hook UseRef</h2>

      {/** On voit ici dans la console, on incrémente la valeur,
       * mais la valeur du state et de la référence
       * elles ne changent pas (interface ne changent pas)!!!
       */}
      <p>Valeur du State {state}</p>
      <p>Valeur de la référence {countRef.current}</p>
      <button onClick={handleCountRef}>Incrémenter la référence</button>

      {/** Et donc cette fonction ==> 'setState(state+1),
       * ==> elle va modifier l'interface
       * On incrémente, qd on décide d'arrêter, on clique sur 'incrémenter la ref
       * et elle se met à jour
       */}
      <button onClick={() => setState(state + 1)}>
        Incrémenter la référence
      </button>

      {/** Maintenant, on va voir le cas où, on doit sélectionner un élément */}
      {/** Ex : querySelector en JS
       * Mais en React, on fait comment ????
       *
       * Mais là, en cliquant sur le bouton, normal puisque la fonction est sur le onClick
       * React va aller chercher la référence qu'on lui demande... (txtRef)
       */}
      <p ref={txtRef}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
        laboriosam enim accusamus ut expedita, repellendus officiis tempora,
        doloribus quia aut facilis, voluptas laborum eos fuga nobis molestias
        consectetur cumque hic.
      </p>
    </div>
  );
}
