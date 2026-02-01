export default function Container9() {
  const isLogged = false;
  let content;

  // Ici en fait, on s'occupe d'abord de la partie logique
  // Et puis seulement du contenu
  // Et donc, on fait 1 'return'
  if (isLogged) {
    content = "Bienvenue sur votre contenu privé";
  } else {
    content = "Veuillez vous connecter";
  }

  return (
    <div>
      <h1>Rendu conditionnel avec if</h1>
      <p>{content}</p>
    </div>
  );
}

////////////////////////////////////
// Méthode  ==> pas très otpimisé //
////////////////////////////////////

// export default function Container9() {
//   const isLogged = false;

//   if (isLogged) {
//     return (
//       <div>
//         <h1>Rendu conditionnel avec if</h1>
//         <p>Vous êtes connecté !!!</p>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Rendu conditionnel avec if</h1>
//         <p>Vous n'êtes pas connecté !!!</p>
//       </div>
//     );
//   }
// }
