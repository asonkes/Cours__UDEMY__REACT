export default function Container11() {
  const isLogged = true;

  return (
    <div>
      <h1>Bienvenue sur BooksParadise</h1>
      {/** Donc ici c'est une condition qui permet d'afficher
       * quelque chose que si l'élément existe
       */}
      {isLogged && <button>Afficher votre collection</button>}
    </div>
  );
}
