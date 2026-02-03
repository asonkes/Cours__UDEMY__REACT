export default function Container() {
  return (
    <>
      {/** Donc ici, si on a pas envie de rajouter une "div" ou "autre" pour rien
       * On peut laisser juste les "fragments" vide comme ci_dessous.
       * Ca allège le DOM, au lieu de rajouter tout le temps pour rien des "div" */}
      <h1>Les fragments</h1>
      <p>Lorem ipsum dolor sir amet.</p>
      <p>Lorem ipsum dolor sir amet.</p>
      <p>Lorem ipsum dolor sir amet.</p>
    </>
  )
}
