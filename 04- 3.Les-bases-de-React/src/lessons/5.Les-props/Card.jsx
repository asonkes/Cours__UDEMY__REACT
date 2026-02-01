export const Card = ({ id, state, changeState }) => {
  console.log(id, state, changeState);

  return (
    <div>
      {/** Ici on a fait l'inverse que dans le cours de Aude,
       * on définit l'id dans le parent
       * on définit props dans l'enfant
       * donc id = props (puisque 1er élément)
       * id s'affiche dans l'enfant
       * ==> Donc on a fait passer des informations du parent à l'enfant
        <p>User {props.id}</p>
       */}

      <p>User {id}</p>
      <p>Sate du parent {state}</p>
      <button onClick={() => changeState("Buongiorno")}>
        Changer le state
      </button>
    </div>
  );
};
