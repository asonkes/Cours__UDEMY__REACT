import { useState, useRef, useEffect } from "react";

// Ici on va faire en sorte de pas faire seulement 1 ref
// Donc pas seulement sélectionner 1 élément 
// Mais pouvoir ne sélectionner plusieurs
export const StaticRefSelection = () => {
    
    {/** Donc on va créer notre référence */}
  const inputsRef = useRef([]);

  {/** On va créer une fonction callback */}
  function addInputRef(el) {
    {/** SI l'élément existe ET qu'il n'est pas encore présent 
    dans 'input.current' alors on le 'push'
      */}
      {/** Pk on demande s'ils existent car qd on a des listes d'éléments
        dynamiques avec des éléments qui sont ajoutés/enlevés etc
        ==> la fonction va être rappeller avec 'null'
        ==> Car ici avec le sinput, pas grave 'statique'

        ==> Mais qd éléments dynamiques, il faut d'abord savoir si l'élément existe 
        ==> avant de vouloir l'afficher, va faire des erreurs au sinon.

        ==> c'est aussi pour éviter que des anciens éléments s'ajoute avec la liste des nouveaux
        ==> donc je vérifie s'ils existent déjà
        ==> si OUI, tu rajoutes PAS
        ==> si NON, tu les RAJOUTES

        ==> Ici c'est statique, qd c'est dynamique ==> plus compliqué
      */}
    if(el && !inputsRef.current.includes(el)) {
      inputsRef.current.push(el);
      console.log(el);
    }
  }

  return (
    <div>
      <h1>Sélectionner un tableau d'éléments</h1>

      {/** On a ces 3 'input' et on a envie de les sélectionner */}
      {/** car on a envie de savoir ce qu'il y a l'intérieur etc */}
      {/** On peut utiliser 'querySelector' etc, c'est pas interdit MAIS
       * c'est pas très efficace et on peut se tromper...
       */}
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
    </div>
  )
}
