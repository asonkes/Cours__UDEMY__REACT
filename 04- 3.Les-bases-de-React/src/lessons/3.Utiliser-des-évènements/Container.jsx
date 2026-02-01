export default function Container3() {
  const handleClick = () => {
    console.log("Click");
  };

  const handleClickWithId = (id) => {
    console.log(id);
  };

  const handleClickWithIdAndEventObject = (event, id) => {
    console.log(event, id);
  };

  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      {/** On voit 'Click' dans la console */}
      <button onClick={() => console.log("click")}>Click</button>
      <hr />

      {/* Mauvaise pratique, peu maintenable */}
      <button
        onClick={() => {
          {
            /** On évite ici, de répeter le code si on en a beaucoup à cet endroit ci
          On va plutôt faire une fonction en haut et importer la fonction ici  
          */
          }
          console.log("Click");
          console.log("Click");
          console.log("Click");
          console.log("Click");
          console.log("Click");
        }}
      >
        Click
      </button>
      <hr />

      {/* On lui préfère en général ceci */}
      {/** On voit 'Click' dans la console */}
      <button onClick={handleClick}>Click</button>
      <hr />

      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      {/** On voit l''id' dans la console */}
      <button onClick={() => handleClickWithId(2351)}>Click</button>
      <hr />

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      {/** On voit 'l'objet de l'évènement 'e' et l'id ' dans la console */}
      <button onClick={(e) => handleClickWithIdAndEventObject(e, 253)}>
        Click
      </button>
    </div>
  );
}
