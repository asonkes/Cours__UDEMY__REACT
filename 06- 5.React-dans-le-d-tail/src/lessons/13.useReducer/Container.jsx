import { useReducer } from "react";

// Donc un 'reducer' ca sert à modifier un 'state' en fonciton d'une action
//
export default function Container() {
  {
    /** Dispatch correspond à tous les cas que l'on pourrait avoir,
    toutes les actions que l'on va pouvoir envoyer
    dispatch => fonction qui va permettre d'envoyer une action à notre 'reducer'
    */
  }
  const [count, countDispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        console.log(action);

        {
          /** Grâce à cela ==> ça va augmenter 5 par 5 */
        }
        return state + action.payload;

      case "decrement":
        return state - 1;

      case "multiply":
        return state * 10;

      case "divide":
        return state / 10;
    }
  }

  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>
      <button onClick={() => countDispatch({ type: "increment", payload: 5 })}>
        Incrémenter
      </button>
      <button onClick={() => countDispatch({ type: "decrement" })}>
        Décrémenter
      </button>
      <button onClick={() => countDispatch({ type: "multiply" })}>
        Multiplier par 10
      </button>
      <button onClick={() => countDispatch({ type: "divide" })}>
        Diviser par 10
      </button>
    </div>
  );
}
