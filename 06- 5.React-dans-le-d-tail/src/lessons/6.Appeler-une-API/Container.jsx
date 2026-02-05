// useState qui va contenir les données que l'on reçoit
import { useState } from "react";
// useEffect, lui va nous permettre d'appeler l'API
import { useEffect } from "react";
import "./Container.css";
// Donc ici, on va importer l'image (svg)
import spinner from './spinner.svg';

export default function Container() {

  {/** On va donc créer ce 'state' */}
  {/** On pase à ce 'useState' un 'objet' */}
  {/** Cet objet contient :
    - un loader (est-ce que j'ai envie d'afficher un loader)
    - des erreurs (est-ce que j'ai envie d'afficher des erreurs)
    - des datas (à la base 'undefined')
  */}

  {/** Ici, on a mis => loading: true ==> donc l'image s'affiche
    Si 'loading' = false, rien ne s'affiche 
  */}
  const [APIState, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined
  });

  {/**********************************************
    Maintenant, il faudrait appeler ces données
            Donc on va faire un useEFFECT  
  ***********************************************/}
  {/** Tableau en-dessous (tableau des dépendances VIDE)
    ==> C'est pour exécuter ce omposant une seule fois
    ==> après l'installation de celui-ci dans le DOM
  */}

  {/** On va utiliser pour tester 'JSON PLACEHOLDER' (on va prendre les utilisateurs) 
  Donc on va passer (puisque là, on récupère les données) ==> then(data):
    - loading à false
    - error à false
    - data à data (pour récupérer les données)
  */}

  {/** Le 'catch' ne reprend des erreurs que si :
    - mauvaise adresse
    - on pas de connexion
  */}
  {/** Erreurs 400 à 500 :
    - Il faut gérer dans le 1er 'then' de la 'res'(response)
  */}
  useEffect(() => {
    setAPIState({...APIState, loading: true});
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      console.log(res);
      if(!res.ok) throw new Error("Erreur mauvaise ressource")
      return res.json()
    })
    .then(data => {
      console.log(data);
      setAPIState({loading: false, error: false, data: data})
    })
    .catch((e) => {
      console.log(e);
      setAPIState({loading: false, error: true, data: undefined})
    })
  }, []);

  {/** Cela correspond au contenu que l'on a envie de retourner en fonction de ce que l'on a reçu dans le state */}
  let content;

  {/** condition et content = img */}
  {/** Pour 'APIState.data?.length > 0' (ca veut dire : 
    - la 1ere fois que le composant va être exécuté, il sera undefined )
    - donc on lui dit, tu essayes de comparer la propriété 'length'
    seulement si elle existe
    - sinon, ca retourne undefined (au lieu de retourner une erreur) ==> chaîne optionnelle !!!
    - même chose que pour le 'type', on avait mis '=?.'
  */}

  {/** OK et ca sert à quoi, qd un tableau pourrait être vide :
    - On va retourner une liste de profils dans un dashboard
    - Et on cherche 'Jean-Dupont' et ben il EXISTE PAS
    - On va recevoir un tableau vide
    - Il faudra qu'on écrive, votre requête ne correspond à aucune donnée
    - Sinon, j'affiche le profil
  */}

  {/** Du coup sil y a des profils, on part du principe qu'il y en ai plusieurs
    - Donc on fait un map sur les DATAS
  */}
  if(APIState.loading) content = <img src={spinner} alt="icône de chargement" />
  else if(APIState.error) content = <p>Une erreur est survenue...</p>
  else if (APIState.data?.length > 0 ) {
    content = <ul>
      {APIState.data.map(item => 
        <li key={item.id}>
          <span>{item.name}</span>
          <span>{item.email}</span>
          <span>{item.phone}</span>
        </li>
      )} 
    </ul>
  }
  else if (APIState.data?.length === 0) {
    content = <p>Votre requête ne correspond à aucune donnée</p>
  }

  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
      {/** Pour afficher l'image, on pourrait mettre :
       * {APIState.loading && <img src={spinner} alt="icône de chargement" />}
      */}
    </div>
  )
}
