export default function Container7() {
  const datas = [
    {
      id: 1,
      name: "Marie",
    },
    {
      id: 2,
      name: "Paul",
    },
    {
      id: 3,
      name: "Louise",
    },
  ];

  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {/** Ici il y a qd même une 'erreur', il y a pas de 'key'
         * Il faut en fait déclaré l'id de l'élément
         * Ici, on avait pas forcément besoin d'un id car c'est statique !!
         * Donc on peut utiliser 'l\'index'
         */}
        {datas.map((data, index) => (
          <li key={index}>{data.name}</li>
        ))}

        {/** Mais dés qu'on doit 'modifier', 'filtrer' les éléments, il faut mettre l'id */}
        {/* {datas.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))} */}

        {/** Quand on fait une liste d'éléments avec 'map' comme en haut
         * En fait, on fait cela :
         * {[
         * <li>{data[0].name}</li>,
         * <li>{data[1].name}</li>,
         * <li>{data[2].name}</li>,
         * ]}
         */}
      </ul>
    </div>
  );
}
