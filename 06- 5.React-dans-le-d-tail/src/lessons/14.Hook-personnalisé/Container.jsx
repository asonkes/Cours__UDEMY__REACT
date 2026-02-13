// Un hook personnalisé, c'est quoi??? c'est l'extraction de fonctionnalités
// React d'un composant en 1 autre fichier

import { useAPICall } from "./hooks/useAPICall";
import spinner from "./spinner.svg";

// Et on pourra réutilisé ce fichier à plusieurs endroit
export default function Container() {
  const { catData, error, loading } = useAPICall();

  let content;

  if (loading && !error) {
    content = <img src={spinner} alt="icône de chargement" />;
  } else if (error) {
    content = <p>Une erreur est survenue...</p>;
  } else if (catData) {
    content = <img src={catData[0].url} alt="photo d'un chat" />;
  }

  return (
    <div>
      <h1>Photo de chats 🐾</h1>

      {content}
    </div>
  );
}
