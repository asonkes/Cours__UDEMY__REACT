// On va partir d'une API qui se base sur les chats
// Nom : TheCatAPI
//developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t

import { useState, useEffect } from "react";

export const useAPICall = () => {
  {
    /** Donc ici c'est pour faire apparaître les données de l'API
     * On fait démarrer à 'undefined'
     */
  }
  const [catData, setCatData] = useState();

  {
    /** Ici c'est pour savoir si j'ai envie d'afficher un 'loader' ou pas */
  }
  const [loading, setLoading] = useState(true);

  {
    /** Ici c'est pour les erreurs (et on démarre à 'false' car normalement pas d'erreur */
  }
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      // Ca c'est pour transformer les données json en format JS
      .then((response) => {
        console.log(response);
        {
          /** Cela permet que même s'il y ai une erreur 404
          On a le texte 'une erreur est survenue qui apprait
          */
        }
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCatData(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  // Donc là, on va reprendre un exemple pour un appel à une API basique
  return { catData, error, loading };
};
